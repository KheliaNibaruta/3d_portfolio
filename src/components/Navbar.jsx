import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className='header'>
        <NavLink to="/" className="w-20 h-10 rounded-xl bg-white items-center justify-center flex font-bold shadow-md">
            <p className='blue-gradient_text'>HOME</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                About
            </NavLink>
            <NavLink to="/projects" className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                Projects
            </NavLink>
            <a href="https://cvdesignr.com/p/6327e5e2e7c40">CV</a>
        </nav>
    </header>
  )
}

export default Navbar