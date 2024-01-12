import React from 'react'
import "./UniversityData.css"
function UniversityData({name, degree, graduating, gpa}) {
  return (
    <div className='universitydata'>
      <div className='universitydata__name'>
        {name}
      </div>
      <div className='universitydata__degree'>
        {degree}
      </div>
      <div className="universitydata__graduating">
        Graduating - <span>{graduating}</span>
      </div>
      <div className='universitydata__gpa'>
        GPA - <span>{gpa}</span>
      </div>
    </div>
  )
}

export default UniversityData
