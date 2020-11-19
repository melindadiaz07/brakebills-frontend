import React from 'react';

const DepartmentCard = (props) => {


  return(
    <div>
      {  !props.logged_in ?
      
      (<div>
        <p>{props.dept.fake_name}</p>
        <p>{props.dept.fake_description}</p>
        <br />
      </div>

    ) : (

      <div><p>{props.dept.real_name}</p>
        <p>{props.dept.real_description}</p>
        <br />
      </div>) 

    }

    </div>
  )
}

export default DepartmentCard;