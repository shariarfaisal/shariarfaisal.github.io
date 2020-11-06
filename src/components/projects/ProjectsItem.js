import React from 'react'
import Title from './Title'
import Description from './Description'
import Repos from './Repos'
import Tags from './Tags'
import LivePreviewLink from './LivePreviewLink'
import Media from './Media'

function ProjectsItem({ title, desc, repos, tags, live, video, images }){
  return (
    <div className="col-xl-10 my-3 bg-light shadow rounded">
      <div className="p-3">
        <Title title={title}/>
        {desc && <Description desc={desc}/>}
        {repos && repos.length > 0 && <Repos repos={repos}/>}
        {live && <LivePreviewLink link={live}/>}
        {tags && tags.length > 0 && <Tags tags={tags} />}
        <Media title={title} video={video} images={images}/>
      </div>
    </div>
  )
}
export default ProjectsItem
