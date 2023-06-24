import React, { useState } from 'react'
import { Burger, Hearticon, HomeIcon, InfoIcon, Logo, SettingsIcon } from '../../assets'
import './NavBar.css'

function Navbar() {

  const [sidebar , setSidebar] = useState('')

  function SideBarOpen(){
    if(sidebar == ''){
      setSidebar('sidebar')
      
    }
    if(sidebar == 'sidebar'){
      setSidebar('')
    }
  }

  return (
    <div className={`navbar ${sidebar}`}>
      <div className="navbar__row">
        <div className="navbar__top">
          <Logo className={`navbar__logo `} /> 
          <Burger className='burgerButton'  onClick={() => SideBarOpen()}/>
        </div>
        <div className="navbar__links">
          <div className="navbar__link">
            <HomeIcon className='navbar__icon'/>
            <p className={`navbar__title `}>Inicio</p>
          </div>
          <div className="navbar__link">
            <Hearticon className='navbar__icon'/>
            <p className={`navbar__title `}>FAVORITES</p>
          </div>
          <div className="navbar__link">
            <SettingsIcon className='navbar__icon'/>
            <p className={`navbar__title `}>Preferencias</p>
          </div>
          <div className="navbar__link">
            <InfoIcon className='navbar__icon'/>
            <p className={`navbar__title `}>Resportar</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar