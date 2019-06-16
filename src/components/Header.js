import React from 'react';
import logo from './../assets/media/logo.svg';

function Header() {
    return (
        <header className="header">
            <div className="header__content">
                <img src={logo} className="header__content--logo" alt="logo" />
            </div>
        </header>
    )
}

export default Header;