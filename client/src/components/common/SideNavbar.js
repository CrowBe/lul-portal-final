import React from 'react';

const HomeSidebar = () => {
    const routes = [
      {path: '/#home', name: "Home"},
      {path: '/#projects', name: "Projects"},
      {path: '/#about', name: "About"},
      {path: '/#staff', name: "Staff"}
    ]

    return (
        <nav id="home-sidebar">
        {routes.map((route) => (
          <a href={route.path} key={route.name}>
            <button className="sidebar-button">{route.name}</button>
          </a>
        ))}
      </nav>
    )
}

export default HomeSidebar;