const Header= (props)=>{
  return(
    <header className="container">
      <div className="row mb-3 mt-3 justify-content-center">
        <div className="col-8 mb-3 mt-3 justify-content-center">
          <h1>
            Employee Tracker
          </h1>
          <h3>{props.selectedTeam} has {props.noOfMembers} members</h3>
          </div>
        </div>
    </header>
  )
}

export default Header;