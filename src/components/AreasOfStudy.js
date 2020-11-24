import React from 'react';
import AreaOfStudyCard from './AreaOfStudyCard'

const AreasOfStudy = (props) => {

  return(
    <div>
      { props.department.area_of_studies.map(area => {
         return <AreaOfStudyCard areaData={area} />
      })}
    </div>
  )
}

export default AreasOfStudy;