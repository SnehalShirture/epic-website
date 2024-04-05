import React from 'react'
import video from "../Images/video.mp4"
import "./home.css"
function Home() {
  return (
    <>
    <div className='video-background'>
      <video autoPlay loop muted>
        <source src={video} type='video/mp4'></source>
      </video>
      
    </div>
    
    </>
    
  )
}

export default Home