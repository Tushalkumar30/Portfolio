import React from 'react'
import { commands } from "../commands/Command.js";
import "../styles/Style.css";

const Header = () => {
  return (
    // <div className="terminal-header">
    //     <span>type `help` for details</span>
    // </div>
        <div className="terminal-header">
        <span>type `help` for details</span>

        <div className="header-buttons">
            <div className="minimize"></div>
            <div className="maximize"></div>
            <div className="close"></div>
        </div>
        </div>
  )
}

export default Header;