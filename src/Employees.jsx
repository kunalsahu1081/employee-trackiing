
import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';

const Employees= (props)=>{

  
  
  return(
    
    <main className='container'>
      <div className="row justify-content-center md-3 mt-3">
        <div className="col-6">
          <select className="form-select form-select-lg" value={props.selectedTeam} onChange={props.handleTeamSelection}>
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
            <option value="TeamD">TeamD</option>
            
          </select>
        </div>
      </div>
      <div className ="row justify-content-center mb-3 mt-3">
        <div className='col-8'>
          <div className="card-collection">
            {
            props.employees.map((employee) => (
              <div id = {employee.id} className={(employee.teamName===props.selectedTeam?'card m-2 standout':'card m-2')} style = {{cursor:"pointer"}} onClick={props.handleOnClickCard}>
                <img src={femaleProfile} className="card-img-top"/>
                <div className="card-body">
                  <h5 className="card-title"> Full Name : {employee.fullName}</h5>
                  <p className="card-text"><b>Designation </b> : {employee.designation}</p>
                </div>
              </div>
            ))
            }
          </div>
        </div>
      </div>
      
    </main>
    
  )
}

export default Employees;