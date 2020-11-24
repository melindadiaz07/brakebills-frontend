import React from 'react';


const AreaOfStudyCard = (props) => {

  return(

    <div >
    { !props.logged_in ?
       (
        <div >
          <p>{props.areaData.fake_name}</p>
          <p>{props.areaData.fake_description}</p>
        </div>
     ) : (
      <div >
          <p>{props.areaData.real_name}</p>
          <p>{props.areaData.real_description}</p>
        </div>
     )
    }
   </div>
  )
}

export default AreaOfStudyCard;


