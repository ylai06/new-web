import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'
import Bee from '../images/bee.png'
import { links } from '../data'
import { GoThreeBars } from 'react-icons/go'
import { MdOutlineClose } from 'react-icons/md'


const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false)

  return (
    <nav>
      <div className="container nav_container">
        <Link to="/">
          <img className='logo' src={Bee} alt="Homepage" onClick={()=> setIsNavShowing(false)}/>
        </Link>
        <ul className={`nav_links ${isNavShowing ? 'show_nav': 'hide_nav'}`}>
          {
            links.map((item) => {
              return (
                <li key={item.name}>
                  <NavLink
                    exact="True"
                    to={item.path}
                    className={({ isActive }) => {
                      return isActive ? 'active-nav' : undefined
                    }}
                    onClick={() => setIsNavShowing(prev => !prev)}
                  >
                    {item.name}
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
        <button
          className="nav_taggle_btn"
          onClick={() => setIsNavShowing(prev => !prev)}>
          {
            isNavShowing ? <MdOutlineClose /> : <GoThreeBars />
          }
        </button>
      </div>
    </nav>
  )
}

export default Navbar