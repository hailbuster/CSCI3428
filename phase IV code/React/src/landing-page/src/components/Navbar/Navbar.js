import React from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

class Navbar extends React.Component {
    state = { clicked: false };

    //Change the state to opposite of the current if clicked
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    //This function will return the structure of navbar
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">ProductName</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    {/* Show fas fa-times(x) if true, and fas fa-bars(bars) if false. 
                      fas fa-times and fas fa-bars come from Font Awesom */}
                    <i
                        className={
                            this.state.clicked ? "fas fa-times" : "fas fa-bars"
                        }
                    ></i>
                </div>
                <ul
                    className={
                        this.state.clicked ? "nav-menu active" : "nav-menu"
                    }
                >
                    {/* Use map function to iterate throught all the items in MenuItems object */}
                    {MenuItems.map((item, index) => {
                        return (
                            <li>
                                <a
                                    className={item.cName}
                                    href={item.url}
                                    key={index}
                                >
                                    {item.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        );
    }
}

export default Navbar;
