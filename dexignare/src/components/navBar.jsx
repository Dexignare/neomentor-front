import React from 'react';
import logo from '../assets/logo.png'

const NavBar = () => {
    return ( 
        <section className="navigation">
            <nav className="navigation__nav">
                <a href="/" className="navigation_link"><img src={logo} alt="NeoMentor Logo" className="navigation__logo" /></a>
                <div className="navigation__login">
                    <span className="defaultText">Already have an account?<a href="/" className="navigation__link"> Log in</a></span>
                </div>
            </nav>
        </section>
     );
}
 
export default NavBar;