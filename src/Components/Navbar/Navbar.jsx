import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

import 'antd/dist/antd.css'
import { Menu, Icon } from 'antd'
import logo from '../../img/logo.png'
import './Navbar.css'

export default function Navbar () {
  return (
    <Fragment>
      <div className = "navbar-wrapper">
    <img src = {logo} alt = "logo" />
    <Menu mode='horizontal'>
      
      <Menu.Item >
        <Link to='/'>
          <Icon type='home' /> Home
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='popular'>
          <Icon type='heart-o' /> Popular
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='upcoming'>
          <Icon type='like-o' /> Up Coming
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='nowplaying'>
          <Icon type='rocket' /> Now Playing
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='toprated'>
          <Icon type='star-o' /> Top Rated
        </Link>
      </Menu.Item>
    </Menu>
    </div>
    </Fragment>
  )
}
