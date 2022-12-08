const Footer= ()=>{

var today = new Date();
  
  return(
    <footer>
      <div className="row mb-3 mt-3 justify-content-center">
        <div className="col-8 mb-3 mt-3 justify-content-center">
          <h5>Team member allocation app - {today.getFullYear()}</h5>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer;