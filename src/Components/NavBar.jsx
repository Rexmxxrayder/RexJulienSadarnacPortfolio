import './NavBar.css'
import { Link, useNavigate } from 'react-router-dom';
function NavBar() {
  const navigate = useNavigate();
  function Navigate(url) {
    navigate(url);
  }

  return (
    <>
      <div className="NavBar w-full h-20 bg-gray-950">
        <div className='h-full flex justify-center items-center'>
          <Link className="text-white text-3xl px-20" to="/">Projets</Link>
          <Link className="text-white text-3xl px-20" to="/">CV</Link>
          <Link className="text-white text-3xl px-20" to="/">Contacts</Link>
        </div>
      </div>
    </>
  )
}

export default NavBar