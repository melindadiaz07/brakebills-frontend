import React, { useEffect, useState } from 'react';
import FacultyCard from './FacultyCard'

const Faculty = ({logged_in}) => {

  const [faculty, setFaculty] = useState([])

  const getFaculty = () => {
    fetch("http://localhost:3000/faculties")
    .then(res => res.json())
    .then(facultyList => {
      let sorted = facultyList.sort(function(a, b) {
        return a.id - b.id;
    });
      setFaculty(sorted)
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