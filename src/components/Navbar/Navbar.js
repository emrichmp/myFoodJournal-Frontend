import React from 'react';
import { MenuItems } from "./MenuItems"
import './Navbar.css'

class Navbar extends React.Component {
    state = {clicked: false}
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo"></h1>
                <div className="menu-icon">
                    
                </div>
                <ul>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={MenuItems.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar