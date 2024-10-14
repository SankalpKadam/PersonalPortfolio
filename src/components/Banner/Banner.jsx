import React from 'react'
import './index.css'
import shuttle from '../../assets/shuttle.png'
import gps from '../../assets/gps.png'
const Banner = () => {
  return (
    <div className='banner'>
      <p className='banner__greeting text__background'>Hello I'm</p>
      <h1 className='banner__name'>Sankalp Kadam</h1>
      <div className='banner__title'>
        <p>Software Engineer. 
            <span>A recent graduate with a MS degree in Computer Science</span>
            </p>
      </div>
      <div className='banner__subheadings'>
        <img src={shuttle} alt="shuttle" width={'30rem'} /> <span>Proficient in React, JavaScript and Python</span>
      </div>
      <div className='banner__subheadings'>
        <img src={gps} alt="shuttle" width={'30rem'} /> <span>Arlington, TX, United States</span>
      </div>
    </div>
  )
}

export default Banner
