import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom';
import {SidebarData} from './SidebarData'
import './Sidebar.css'
import {IconContext} from 'react-icons'

function Sidebar() {
    const[sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
        <IconContext.Provider value = {{color: '#fff'}}>
        <div className = "sidebar">
            <Link to = "#" className = 'menu-bars'>
                <FaIcons.FaBars onClick = {showSidebar} style = {{align: 'left'}}/>
            </Link>
                <p className = "title" style = {{align: 'center'}}>Banzai Sports</p>
                <a className = "logout" href={"/login"}>Logout</a>
        </div>
        <nav className = {sidebar ? 'nav-menu active' : 'nav-menu'}>
            
            <ul className = "nav-menu-items" onClick = {showSidebar}>
                <li className = "navbar-toggle">
                    <Link to = "#" className = "menu-bars">
                        
                    </Link>
                </li>
                {SidebarData.map((item, index) => {
                    return(
                        <li key = {index} className = {item.cName}>
                            <Link to = {item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            
        </nav>
        </IconContext.Provider>
        </>
    )
}

export default Sidebar;