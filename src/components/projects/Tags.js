import React from 'react'

function Tags({ tags }) {
  return (
    <div className="row my-3 mx-0">
      {tags.map((tag,i) => (
        <small key={i} className="py-2 px-3 m-2 bg-light text-info border rounded shadow-sm">
          {tag}
        </small>
      ))}
    </div>
  )
}

export default Tags
