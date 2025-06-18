import React from 'react'

function Header() {
  return (
    <div className='nav'>
        <h1>Portfolio</h1>
        <nav className='nav-links'>
            <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
<div className='Con-btn'>
            <button className='btn'>Contact Me</button>

</div>
    </div>
  )
}

export default Header