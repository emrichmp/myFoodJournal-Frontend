import React from 'react';
import { MenuItems } from "./MenuItems"

class Navbar extends React.Component {
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">React</h1>
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