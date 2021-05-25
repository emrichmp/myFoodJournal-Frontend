import React from 'react';
import { MenuItems } from "./MenuItems"
import './Navbar.css'
import { NavLink } from 'react-router-dom'

//<a href="/"></a>

class Navbar extends React.Component {
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo"> myFoodJournal<i className="fas fa-weight"></i></h1>
                <ul className='nav-menu'>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <NavLink to={item.url} className={item.cName}>{item.title}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar