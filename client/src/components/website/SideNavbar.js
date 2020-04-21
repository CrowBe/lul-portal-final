import React from 'react';
import { FaHome, FaInfoCircle, FaTasks, FaAddressCard } from "react-icons/fa";

const HomeSidebar = () => {
  const routes = [
    {path: '/#home', name: "Home", icon: FaHome},
    {path: '/#projects', name: "Projects", icon: FaTasks},
    {path: '/#about', name: "About", icon: FaInfoCircle},
    {path: '/#staff', name: "Staff", icon: FaAddressCard}
  ]

  return (
    <nav id="home-sidebar">
      {routes.map((route) => (
        <a href={route.path} key={route.name}>
          <span>{route.name}</span><route.icon className="sidebar-icon"/>
        </a>
      ))}
    </nav>
  )
}

export default HomeSidebar;