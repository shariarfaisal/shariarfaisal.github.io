import React from 'react'

function Images({ images }) {
  return(
    <div className="row mx-0 justify-content-center my-3">
      {images.map((image,i) => (
        <div key={i} className="col-md-6 col-lg-4">
          <img className="shadow-sm" src={image} width="100%" alt="Project Screenshoot" />
        </div>
      ))}
    </div>
  )
}
export default Images
