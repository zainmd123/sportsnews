import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Cricket',
        path: '/cricket',
        icon: <MdIcons.MdSportsCricket/>,
        cName: 'nav-text'
    },
    {
        title: 'Football',
        path: '/football',
        icon: <MdIcons.MdSportsSoccer/>,
        cName: 'nav-text'
    },
    {
        title: 'Tennis',
        path: '/tennis',
        icon: <MdIcons.MdSportsTennis/>,
        cName: 'nav-text'
    },
    {
        title: 'Basketball',
        path: '/basketball',
        icon: <MdIcons.MdSportsBasketball/>,
        cName: 'nav-text'
    },
    {
        title: 'Motorsports',
        path: '/motorsports', 
        icon: <AiIcons.AiFillCar/>,
        cName: 'nav-text'
    },
   
]