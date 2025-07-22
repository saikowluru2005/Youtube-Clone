import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search from'../../assets/search.png'
import upload from '../../assets/upload.png'
import more from '../../assets/more.png'
import notification from '../../assets/notification.png'
import profile from '../../assets/jack.png'

const Navbar=()=>{
  return (
    <nav className='flex-div'>
        <div className='nave-left flex-div'>
            <img src={menu_icon} alt=""  className='menu-icon'/>
            <img src={logo} alt="" className='logo' />
        </div>
        <div className='nave-middle flex-div'>
            <input type="text" placeholder='Search'/>
            <img src={search} alt="" />
        </div>
        <div className='nave-right flex-div'>
            <img src={upload} alt="" />
            <img src={more} alt="" />
            <img src={notification} alt="" />
            <img src={profile} alt=""  className='user-icon'/>
        </div>
    </nav>
  )
}

export default Navbar