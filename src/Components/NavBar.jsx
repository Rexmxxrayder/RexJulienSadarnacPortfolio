import Dropdown from './Dropdown';
import './NavBar.css'
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <>
      <div className="NavBar sticky top-0 w-full h-20 bg-gray-950">
        <div className='h-full flex justify-center items-center'>
          {location.pathname === '/' && (
            <Dropdown title="Projets" />
          )}
          {location.pathname !== '/' && (
            <Link className="text-white text-3xl px-20" to="/">
              Projets
            </Link>
          )}
          <Link className="text-white text-3xl px-20" to="/CV">CV</Link>
          <Link className="text-white text-3xl px-20" to="/Contacts">Contacts</Link>
        </div>
      </div>
    </>
  )
}

export default NavBar