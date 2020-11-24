import React from 'react';

const FacultyCard = (props) => {

  return(
    <div>
    { !props.logged_in ?
       (
         
      <div >
        
       <div className="faculty-container">
           <img src="https://hancroft.co.nz/wp-content/uploads/2019/05/profile-placeholder.png" className="faculty-image"  /><br />
           <div className="faculty-info-container">
            <p>{ props.faculty.name } </p>
            <p>Area of Study: { props.faculty.area_of_study.fake_name } </p>
            <p> Bio: { props.faculty.fake_bio } </p>
            </div>
           
        </div>
       </div>
     
     ) : (
      <div >
      <div className="faculty-container">
          <img src="https://hancroft.co.nz/wp-content/uploads/2019/05/profile-placeholder.png" className="faculty-image"  /><br />
          <div className="faculty-info-container">
           <p>{ props.faculty.name } </p>
           <p>Area of Study: { props.faculty.area_of_study.real_name } </p>
           <p> Bio: { props.faculty.real_bio } </p>
           </div>
       </div>
      </div>
     )
    }

   </div>
  )
}

export default FacultyCard 