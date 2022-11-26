import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header className='navbar'>
            <Link to='/'><img src="https://assets.herbalifenutrition.com/content/dam/herbalife/sites/herbalife_nutrition/logos/herbalife-nut-green-small.png" alt="" className='ml-3' /></Link>
            <div className='ml-auto'>
            <Link to='/home' className='mr-3 links'>member login</Link>
            <Link to='/home' className=' links'>find a member</Link>
            <span className='globe'>
            <i className='fa fa-globe mr-1'></i>
            India
            </span>
        </div>
      </header>
    </div>
  )
}

export default Header
