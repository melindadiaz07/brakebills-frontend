import React from 'react';


const AreaOfStudyCard = (props) => {

  return(

    <div >
    { !props.logged_in ?
       (
        <div className="single-aos">
          <p className="aos-name">{props.areaData.fake_name}</p>
          <p>{props.areaData.fake_description}</p>
        </div>
     ) : (
      <div className="single-aos">
          <p className="aos-name">{props.areaData.real_name}</p>
          <p>{props.areaData.real_description}</p>
        </div>
     )
    }
   </div>
  )
}

export default AreaOfStudyCard;


