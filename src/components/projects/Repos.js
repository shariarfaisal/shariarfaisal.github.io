import React from 'react'

function Repos({ repos }){
  return(
    <div className="repos">
      <h4 className="title-3">GitHub Repos</h4>
      <ul>
        {repos.map((repo,i) => {
          return(
            <li key={i}>
              <span className="mr-2">{repo.title}</span>
              <a href={repo.link}>{repo.link}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default Repos
