import {Link} from 'react-router-dom';

const Nav = ()=>
  {
    return(
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav me-auto mb-2 mb-lg-8">
          <li>
            <Link className='nav-link' to='/'>Home</Link>
          </li>
          <li>
            <Link className="nav-link" to='/GroupedMembers'>Teams</Link>
          </li>
        </ul>
      </nav>
    )
  }

export default Nav;

