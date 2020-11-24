import React, { useState, useEffect } from 'react';
import AreasOfStudy from './AreasOfStudy'
import DepartmentCard from './DepartmentCard'

const Departments = ({logged_in}) => {

  const [departments, setDepartments] = useState([])
  
  
  let getDepartments = () => {
    fetch("http://localhost:3000/departments")
    .then(res => res.json())
    .then(departments => setDepartments(departments))
  }


  useEffect(getDepartments, [])
 
  return(
   
        <div>
          { departments.map(dept => {
            return <DepartmentCard dept={dept} key={dept.id} logged_in={logged_in} />
            })} 
        </div>

  )
}

export default Departments;