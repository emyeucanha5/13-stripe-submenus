import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import sublinks from './data'
import {useGlobalContext} from './context.js'

const Navbar = () => {

  const {isSidebarOpen,openSidebar, openSubmenu, closeSubmenu} = useGlobalContext();

  const displayMenu = (e) => {
    const page = e.target.textContent
    const mid = (e.target.getBoundingClientRect().right+e.target.getBoundingClientRect().left)/2;
    const bottom = e.target.getBoundingClientRect().bottom - 3;
    const location = {mid,bottom}

    openSubmenu(page, location)
  }
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  };
  return <nav className="nav" onMouseOver={handleSubmenu}>
    <div className= "nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo" className='nav-logo' />
        <button onClick = {openSidebar} className="btn toggle-btn">
          <FaBars />
        </button>
      </div>
      <ul className="nav-links">
        {sublinks.map((item, index) => {
          return <li key={index}>
          <button className="link-btn" onMouseOver = {(e) => displayMenu(e)}>{item.page}</button>
          </li>
        })}
      </ul>
      <button className="btn signin-btn">Sign in</button>
    </div>
  </nav>
}

export default Navbar
 