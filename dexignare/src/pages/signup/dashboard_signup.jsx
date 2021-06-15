import React from 'react';
import Button from '../../components/button'
import NavBar from '../../components/navBar'
import eye from '../assets/password_eye.png'
import glogo from '../assets/google_logo.PNG'

function Signup() {
    return (
        <>
            <NavBar />
            <div className="container">
               <div className="form">
                    <div className="form__headings">
                        <h1 className="heading-primary">Hi, Welcome <br/>To <span className="color-purple">Neomentor!</span></h1>
                        <h3 className="heading-tertiary color-grey">Create an account to get started!</h3>
                    </div>
                    <a href="/" className="form__button">
                        <img src={glogo} className="form__button-image" />
                        Sign up with Google
                    </a>
                    <div className="form__or">
                        <p className="color-grey defaultText form__or-or">or</p>
                    </div>
                    <div>
                        <form action="/" method="post">
                            <div className="form__group">
                                <label htmlFor="email" className="form__label">Email</label>
                                <input type="email" name="email" className="form__input" placeholder="mail@yourmail.com" required/>
                            </div>
                            <div className="form__group form__eye">
                                <label htmlFor="password" className="form__label">Password</label>
                                <input type="password" name="password" className="form__input" placeholder="Min. 8 characters" required/>
                                <img src={eye} alt="Password Reveal Button" className="form__reveal" />
                            </div>
                            <button className="form__submit" type="submit">Sign Up</button>
                        </form>
                    </div>
               </div>
               <div className="form__legal">
                   <p>By signing up, you agree to the <a href="/" className="form__legal-link">Terms of Use</a> and <a href="/" className="form__legal-link">Privacy Policy</a></p>
               </div>
            </div>
        </>
    );
}

export default Signup;