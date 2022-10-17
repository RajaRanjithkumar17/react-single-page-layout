import React from 'react'
import "./timeline.css"
import img from "./img/Default.jpg"

function Timeline() {
  return (
    <div className='feeds'>
     <div className='posts'>
     <img src={img}/>
     <figcaption> default img</figcaption>
     <img src={img}/>
     <figcaption> default img</figcaption>
     <img src={img}/>
     <figcaption> default img</figcaption>
     <img src={img}/>
     <figcaption> default img</figcaption>
     <img src={img}/>
     <figcaption> default img</figcaption>

       

     </div>
    </div>
  )
}

export default Timeline