import React, { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import logo from "./../../assets/Logo1.png";
import Topnav from "../Topnav/Topnav";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <Topnav />
        <nav className="navbarItems">
          <a className="navbar-Logo">
            <img src={logo} alt="logo" />
          </a>
          <div className="menu-icone" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => (
              <li
                key={index}
                className={item.submenu ? "nav-item has-submenu" : "nav-item"}
              >
                <a className={item.cName} href={item.url}>
                  {item.title} <i className={item.icon}></i>
                </a>
                {item.submenu && (
                  <ul className="submenu">
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a className={subItem.cName} href={subItem.url}>
                          {subItem.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <nav
          className="fixed w-full bg-blue-50 select-none justify-between lg:items-stretch z-10 px-2"
          style={{ top: "126px" }}
        >
          <h1
            className="overflow-hidden whitespace-nowrap pr-5 text-xl font-bold text-red-500 shadow-xl"
            style={{ textShadow: "1px 2px 2px orange" }}
          >
            <marquee>
              <a
                className="px-4"
                href="a-training-session-on-future-goals-general-approach-by-mr-prashant-r-doshi.aspx"
              >
                Lakshya Event - 22 to 24 Dec, 2023{" "}
              </a>{" "}
              |&nbsp;
              <a
                className="px-4"
                href="state-level-open-night-kabaddi-tournament-25-26-february-2022.aspx"
              >
                A Workshop on Artificial Intelligence by Dr. Pushpendra Singh,
                Dr. Deepak Sharma - 8 Feb, 2024
              </a>{" "}
              |&nbsp;
              <a
                className="px-4"
                href="technical-activities-february-2022.aspx"
              >
                ISRO Visit - 8 Mar, 2024
              </a>{" "}
              |&nbsp;
            </marquee>
          </h1>
        </nav>
      </>
    );
  }
}

export default Navbar;
