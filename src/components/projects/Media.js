import React,{ useState } from 'react'
import Images from './Images'

function Media({ video, title, images }) {
  const [open,setOpen] = useState(null)
  return(
    <div>
      {open !== null && <div className="slowdown" style={{height: open? 'auto': '0px',overflow: 'hidden'}}>
        {
          video &&
          <div className="row mx-0 justify-content-center">
            <iframe
              title={title+Math.random()}
              className="my-3 col-md-10"
              style={{width: '100%',minHeight: '350px'}}
              src={video}
              frameBorder="0"
              allowFullScreen
              mozallowfullscreen="mozallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              allow="autoplay; geolocation"></iframe>
          </div>
        }

        {images && images.length > 0 && <Images images={images} />}
      </div>}
      <div className="text-center">
        <i onClick={e => setOpen(!open)} className={`bx bx-chevron-${open?'up': 'down'}-circle text-info pointer bx-md`}></i>
      </div>
    </div>
  )
}
export default Media
