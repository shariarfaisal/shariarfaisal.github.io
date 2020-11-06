import React from 'react'

function LivePreviewLink({ link }) {
  return(
    <h4 className="title-3">Live preview: <a href={link}>{link}</a></h4>
  )
}

export default LivePreviewLink
