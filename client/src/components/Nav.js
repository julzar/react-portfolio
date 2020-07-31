import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Top } from '../style'

const Nav = () => {
  const { pathname } = useLocation()
  const [text, setText] = useState('Jules Lazar')

  useEffect(() => {
    if (pathname === '/' || pathname === '/about') {
      setText('Jules Lazar')
    }
    else if (pathname === '/projects') {
      setText('Projects')
    }
    else if (pathname === '/connect') {
      setText('Connect')
    }
  }, [pathname])

  return (
    <>
      <ul id="dropdown1" className="dropdown-content black">
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='/connect'>Connect</Link></li>
      </ul>
      <Top className='black'>
        <div className="nav-wrapper black">
          <a href="#!" className="brand-logo center animate__animated animate__fadeIn" style={{fontSize: '250%'}}>
            {text}
          </a>
          <ul className="right">
            <li><a className="dropdown-trigger" href="#!" data-target="dropdown1"><i className="material-icons right">menu</i></a></li>
          </ul>
        </div>
      </Top>
    </>
  )
}

export default Nav