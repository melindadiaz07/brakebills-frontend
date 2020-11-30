import React from 'react';


const FacultyCard = (props) => {

  let imageName = props.faculty.name.replace(/\s/g, '').toLowerCase()
  
  return(
    <div>
    { !props.logged_in ?
       (
         
      <div >
       <div className="faculty-container">
           <div className={`${imageName}-photo faculty-image` } alt="faculty image" /><br />
           <div className="faculty-info-container">
            <h3>{ props.faculty.name } </h3>
            <p>{ props.faculty.fake_bio } </p>
            </div>
        </div>
       </div>
     
     ) : (
      <div >
      <div className="faculty-container">
      <div className={`${imageName}-photo faculty-image` }  alt="faculty image" /><br />
          <div className="faculty-info-container">
           <h3>{ props.faculty.name } </h3>
           <p>  { props.faculty.real_bio } </p>
           </div>
       </div>
      </div>
     )
    }

   </div>
  )
}

export default FacultyCard 