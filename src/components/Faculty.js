import React, { useEffect, useState } from 'react';
import FacultyCard from './FacultyCard'

const Faculty = ({logged_in}) => {

  const [faculty, setFaculty] = useState([])

  const getFaculty = () => {
    fetch("http://localhost:3000/faculties")
    .then(res => res.json())
    .then(facultyList => {
      console.log(facultyList[0])
      setFaculty(facultyList)
    })
  }

  useEffect(getFaculty, [])

  return(
    <div className="faculty-page" >
     { !logged_in ?
        (
        <div>
          <div className="faculty-header">
          <em>Brakebills' Outstanding Faculty</em>
        </div>
            <p>
              { !faculty ? null : faculty.map(person => {
                return <FacultyCard faculty={person} logged_in={logged_in} />
              })}
            </p>
        </div>
      
      ) : (
        <div className="faculty-page">
          <div className="faculty-header">
          <em>Brakebills' Outstanding Faculty</em>
        </div>
          <p>
          { !faculty ? null : faculty.map(person => {
                return <FacultyCard faculty={person} logged_in={logged_in} />
              })}
          </p>
        </div>
      )
     }

    </div>
  )
}

export default Faculty 