const container = document.querySelector('.projects-container')

const createProject = function(project){
  return `
  <div class="col-xl-10 my-3 bg-light shadow rounded">
    <div class="p-3">
      <h3 class="title-2">${project.title}</h3>
      ${project.desc? `<p class="text-muted text w-75">${project.desc}</p>`: null}
      <div class="repos">
        <h4 class="title-3">GitHub Repos</h4>
        ${project.repos && Object.keys(project.repos).length !== 0? `<ul>
          ${getRepos(project.repos)}
        </ul>`: null}
      </div>
      ${project.live ? `<h4 class="title-3">Live preview: <a target="_blank" href=${project.live}>${project.live}</a></h4>`: null}
      <div class="row my-3 mx-0">
        ${project.tags ? project.tags.reduce(function(content,tag){
          content += createTag(tag)
          return content
        },''): null}
      </div>
      <div>
        <div class="text-center"><i class='bx bx-chevron-down-circle text-info pointer bx-md'></i></div>
        ${project.video ? `<iframe class="collapse" style="width: 100%;min-height: 350px;" src="${project.video}" frameborder="0" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen allow="autoplay; geolocation" ></iframe>`: null}
        <div class="row mx-0 justify-content-center">
          <div class="col-md-6 col-lg-4">
            <img class="shadow-sm" src="./img/1.png" width="100%" alt="" />
          </div>
          <div class="col-md-6 col-lg-4">
            <img class="shadow-sm" src="./img/2.png" width="100%" alt="" />
          </div>
          <div class="col-md-6 col-lg-4">
            <img class="shadow-sm" src="./img/3.png" width="100%" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  `
}

function getRepos(repos){
  let content = ''
  const createRepo = function(title,link){
    return `<li>
      <span>${title}</span>
      <a href="#">${link}</a>
    </li>`
  }

  for(i in repos){
    content += createRepo(i,repos[i])
  }

  return content
}

function createTag(tag){
  return `
    <small class="py-2 px-3 m-2 bg-light text-info border rounded shadow-sm">${tag}</small>
  `
}


fetch('./js/projects.json').then(function(res){
  return res.json()
}).then(data => {
  let content = ''
  data.forEach(function(project){
    content += createProject(project)
  })
  if(container){
    container.innerHTML = content
  }
})
