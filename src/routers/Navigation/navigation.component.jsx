import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './navigation.styles.scss';
const Navigation = () => {
    return (
      <Fragment>
        <div className='navigation'>
        <Link className='logo-container' to='/'>
            <h2>MLIS Integration</h2>
        </Link>
          
          <div className="nav-links-container">
          <Link className='nav-link' to='/' >
                Home
            </Link>
            <Link className='nav-link' to='/link1' >
                Link 1
            </Link>
            <Link className='nav-link' to='/link2' >
                Link 2
            </Link>
          </div>
        </div>
        <Outlet/>
      </Fragment>
    );
  };

  export default Navigation;