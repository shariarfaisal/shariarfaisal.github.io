// Make sure service worker are supported
if('serviceWorker' in navigator){
  window.addEventListener('load',() => {
    navigator.serviceWorker
      .register('./sw_cached_site.js')
      .then(reg => console.log('Service Worker: Registered'))
      .catch(err => console.log(`Service Worker: Error: ${err}`))
  })
}


fetch('https://api.github.com/users/shariarfaisal')
  .then(function(res){
    return res.json()
  }).then(function(data){
    document.getElementById('profile-picture').src = data.avatar_url
  })




const trancator = function(str,limit){
  return str.length > limit ? str.substr(0,limit)+'...' : str
}

const langColors = [
  {name: 'javascript',color: 'yellow'},
  {name: 'typescript',color: 'cyan'},
  {name: 'python',color: 'green'},
  {name: 'go',color: 'light-blue'},
  {name: 'css',color: 'purple darken-2'},
  {name: 'html',color: 'red'},
  {name: 'php',color: 'deep-purple'}
]

const colorCheker = function(lang){
  const res = langColors.find(function(i){
    return i.name.toLowerCase() === lang.toLowerCase()
  })
  return res ? res.color : 'brown'
}


let project_content = function(data){
  return `
    <div class="col-md-6 col-xl-4 projects-item">
      <div class="card customScroll">
        <div class="card-content">
          <h2 class="title-2 d-flex justify-content-between align-items-center">
            <a target="_blank" class="text-dark truncate" href="${data.html_url}">${trancator(data.name,30)}</a>
            <i class="fa fa-github text-muted fa-x"></i>
          </h2>
          <p class="description">${data.description? trancator(data.description,150): ''}</p>
          <div class="footer">
            <div class="footer-language">
              <span class="color ${colorCheker(data.language)}"></span>
              <p class="title">${data.language}</p>
            </div>
            <div class="footer-starred">
              <i class="material-icons icon">star_border</i>
              <span class="count">${data.stargazers_count}</span>
            </div>
            ${data.forks_count > 0 ?
              `<div class="footer-fork">
              <i class="fa fa-code-fork icon"></i>
              <span class="count">${data.forks_count}</span>
            </div>`: ''}
          </div>
        </div>
      </div>
    </div>
  `
}

fetch('https://api.github.com/users/shariarfaisal/starred')
  .then(function(res){
    return res.json()
  })
  .then(function(data){
    let projects_content = ''
    data.forEach(function(i){
      projects_content += project_content(i)
    })

    if(projects_content){
      projects_content += `
        <div class="col-md-6 col-xl-4 projects-item">
          <div class="card customScroll">
            <div class="card-content flex-center h-100">
              <a href="https://github.com/shariarfaisal?tab=repositories" class="text-muted title-2">See more on <i class="fa fa-github more-fa" style="font-size: 15px;"></i></a>
            </div>
          </div>
        </div>
      `
    }
    document.querySelector('.projects-wrapper').innerHTML = projects_content
  })


  let gallery_container = document.querySelector('.gallery')
  let pic_content = function(i){
    return `
      <div class="mb-3 pics animation">
        <img class="img-fluid materialboxed" src="img/${i.url}" alt="${i.alt}">
      </div>
    `
  }

  const pics = [
    {id: 1,url: 'gallery-1.jpg',alt: ''},
    {id: 2,url: 'gallery-2.jpg',alt: ''},
    {id: 3,url: 'gallery-3.jpg',alt: ''},
    {id: 4,url: 'gallery-4.jpg',alt: ''},
    {id: 5,url: 'gallery-5.jpg',alt: ''},
    {id: 6,url: 'gallery-6.jpg',alt: ''},
    {id: 7,url: 'gallery-7.jpg',alt: ''},
    {id: 8,url: 'gallery-8.jpg',alt: ''},
    {id: 9,url: 'gallery-9.jpg',alt: ''},
    {id: 10,url: 'gallery-10.jpg',alt: ''},
    {id: 11,url: 'gallery-11.jpg',alt: ''},
    {id: 12,url: 'gallery-12.jpg',alt: ''},
    {id: 13,url: 'gallery-13.jpg',alt: ''},
    {id: 14,url: 'gallery-14.jpg',alt: ''},
    {id: 15,url: 'gallery-15.jpg',alt: ''},
    {id: 16,url: 'gallery-16.jpg',alt: ''},
    {id: 17,url: 'gallery-17.jpg',alt: ''}
  ]

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  shuffle(pics)

  let contents = ''
  pics.forEach(function(i){
    contents += pic_content(i)
  })
  gallery_container.innerHTML = contents
