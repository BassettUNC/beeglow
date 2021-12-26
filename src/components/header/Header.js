import React from 'react';
import logo from '../../assets/BIGLOGOsmall.png';
import '../../primaryStyles.css';


export default function Header() {
    return (
        <div id="headerMain">
            <img id ="headerLogo" src={logo} />
            <h1 id="headerText">Beeglobal Studio and Gallery</h1>
        </div>
    );
}