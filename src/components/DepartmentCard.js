import { Component } from 'react';
import AreasOfStudy from './AreasOfStudy'

class DepartmentCard extends Component {

  state = {
    areaOfStudyShown: false
  }

showAreaOfStudy = () => {
  this.setState({
    areaOfStudyShown: !this.state.areaOfStudyShown
  })
}

render() {

  return(
    <div className="dept-container">

      {  !this.props.logged_in ?
      (<div>
      <div className="department-info-container">
   
        <h2>{this.props.dept.fake_name}</h2>
        <h3>{this.props.dept.fake_description}</h3>
        <p onClick={() => this.showAreaOfStudy()}><em>See areas of study </em> ▽ </p>
        </div>
        <div>
        { !this.state.areaOfStudyShown ? null : 
          <div className="area-of-study-card">
            <AreasOfStudy department={this.props.dept} />
          </div>
        }
        </div></div>
      
    ) : (

      <div className="department-info-container">
        <h2>{this.props.dept.real_name}</h2>
        <h3>{this.props.dept.real_description}</h3>
        <p onClick={() => this.showAreaOfStudy()}><em>See areas of study </em> ▽ </p>
        { !this.state.areaOfStudyShown ? null : 
          <div className="area-of-study-card">
            <AreasOfStudy department={this.props.dept} />
          </div>
        }
      </div>) 

    }
    </div>
    )
  }
}

export default DepartmentCard;