import React from 'react';
import AreaOfStudyCard from './AreaOfStudyCard'

const AreasOfStudy = (props) => {

  return(
    <div>
      { props.department.area_of_studies.map(area => {
         return <AreaOfStudyCard areaData={area} logged_in={props.logged_in}/>
      })}
    </div>
  )
}

export default AreasOfStudy;