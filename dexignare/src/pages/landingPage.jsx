import React from 'react';
import Button from '../components/button'
import logo from '../assets/logo.png'
import img1 from '../assets/landingPage-1.jpg'
import img2 from '../assets/landingPage-2.jpg'
import img3 from '../assets/landingPage-3.jpg'
import img4 from '../assets/landingPage-4.jpg'
import img5 from '../assets/media_n.png'
import Lin from '../assets/media1.png'
import Insta from '../assets/media2.png'
import FB from '../assets/media3.png'
import Twt from '../assets/media4.png'
import Yt from '../assets/media5.png'

const LandingPage = () => {
    return (
        <>
        <header className="header">
            <nav className="header__nav">
                <a href="/" className="header__link"><img src={logo} alt="NeoMentor Logo" className="header__logo" /></a>
                <div className="header__login">
                    {/*<Button Title="Login" BackgroundColor="btn-white" />*/}
                    <div className="u-margin-left-small">
                    <Button Title="Sign up" BackgroundColor="btn-purple" link="https://form.typeform.com/to/fVGy4Uz6?typeform-medium=embed-snippet"  />
                    </div>
                </div>
            </nav>
        </header>

        <section className="content">
            <div className="content__ad">
                <h1 className="landing-heading">Built exclusively for the enthusiastic learners</h1>
                <h2 className="heading-secondary color-carbon-base content__ad-heading">India's first mentorship platform</h2>
                <a href="https://form.typeform.com/to/fVGy4Uz6?typeform-medium=embed-snippet" className="content__ad-button" >Get Started For Free</a>
            </div>
            <div className="content__image-container">
                <img src={img1} alt="Multiple Monitors-Mentors and Mentees" className="content__image"/>
            </div>
        </section>

        <section className="mentorship">
            <h1 className="mentorship__heading"><span className="color-purple">Mentorship</span> has now become easy</h1>
            <p className="mentorship__text">Do not lose time exploring a right person to guide you through your way</p>
        </section>

        <section className="mentees u-margin-bottom-big">
            <img src={img2} alt="" className="mentees__image" />
            <div className="mentees__text">
                <p className="heading-tertiary color-grey mentees__text-1 u-margin-bottom-medium">For mentees</p>
                <h1 className="heading-primary u-margin-bottom-medium">Get a perfect mentor, reach new heights</h1>
                <p className="heading-tertiary color-grey mentees__text-1">We have the finest mentors from top industries with immense experience to mentor you for a prosperous future.</p>
            </div>
        </section>

        <section className="connect">
            <p className="heading-secondary color-blue-gradient u-margin-bottom-medium">How this works</p>
            <h1 className="connect__heading u-margin-bottom-medium">We made it super easy for you to connect to a mentor</h1>
            <p className="heading-tertiary color-grey u-margin-bottom-medium">Book your convenient slot and connect to the mentor in just a click.</p>
            
        </section>
        <img src={img3} alt="Mentor Connect" className="connect__image" />

        <section className="philosophy">
            <div className="philosophy__content">
                <h3 className="philosophy__heading">Our philosophy</h3>
                <h1 className="philosophy__heading-1">We believe in the integral growth of all</h1>
                <p className="philosophy__text">Do not waste time on searching for the right person to guide your through your way</p>
            </div>
            <img src={img5} alt="Mentor Helping With Doubts" className="philosophy__image" />
        </section>
        
        <section className="queries u-margin-bottom-big">
            <img src={img4} alt="Queries in chat" className="queries__image" />
            <div className="queries__text">
                <h1 className="queries__heading u-margin-bottom-medium">Getting any queries? We're here to help you 24 x 7</h1>
                <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=hello@neomentor.in" className="queries__button">Contact Us</a>
            </div>
        </section>
        
        <section className="journey">
            <h1 className="journey__heading">Start your <span className="color-yellow">mentorship</span> journey today</h1>
            <h2 className="heading-secondary color-white journey__text">Get Started with your Real-Time Mentorship Journey with NeoMentor</h2>
            <a href="/" className="journey__button">Get Started For Free</a>
        </section>
        <div className="journey__bottom-background"></div>

        <footer className="footer">
            <div className="footer__description">
                <div className="footer__text">
                    <a href="/"><img src={logo} alt="NeoMentor Logo"/></a>
                    <p className="footer__paragraph">NeoMentor is India’s first mentorship platform where anyone can give or take mentorship easily. We are changing the way India learns online.</p>
                    <p className="footer__paragraph">Follow us:</p>
                </div>
                <div className="footer__socialmedia">
                    <a href="https://www.linkedin.com/company/neomentor-in" target="_blank" rel="noopener noreferrer"><img src={Lin} alt="NeoMentor Logo"/></a>
                    <a href="https://www.instagram.com/neomentor.in" target="_blank" rel="noopener noreferrer"><img src={Insta} alt="NeoMentor Logo"/></a>
                    <a href="https://www.facebook.com/neomentor.in" target="_blank" rel="noopener noreferrer"><img src={FB} alt="NeoMentor Logo"/></a>
                    <a href="https://www.twitter.com/neomentorindia" target="_blank" rel="noopener noreferrer"><img src={Twt} alt="NeoMentor Logo"/></a>
                    <a href="https://youtube.com/channel/UCC34aAr23-s6f-ny14vtyNw" target="_blank" rel="noopener noreferrer"><img src={Yt} alt="NeoMentor Logo"/></a>
                </div>
            </div>
            <div className="footer__links">
                <ul className="footer__list">
                    <li className="footer__list-links-1">Company</li>
                    <li className="footer__list-links"><a href="/" className="footer__last">About</a></li>
                    <li className="footer__list-links"><a href="/" className="footer__last">Pricing</a></li>
                    <li className="footer__list-links"><a href="/" className="footer__last">Careers</a></li>
                </ul>
                <ul className="footer__list">
                    <li className="footer__list-links-1">Explore</li>
                    <li className="footer__list-links"><a href="/" className="footer__last">Club</a></li>
                    <li className="footer__list-links"><a href="/" className="footer__last">Blog</a></li>
                    <li className="footer__list-links"><a href="/" className="footer__last">FAQs</a></li>
                </ul>
                <ul className="footer__list">
                    <li className="footer__list-links-1">Legal</li>
                    <li className="footer__list-links"><a href="/" className="footer__last">Privacy</a></li>
                    <li className="footer__list-links"><a href="/" className="footer__last">Terms</a></li>
                    <li className="footer__list-links"><a href="/" className="footer__last">Contact</a></li>
                </ul>
            </div>
        </footer>

        <div className="footer__end">
            <div className="footer__end-line"></div>
            <div className="footer__end-text defaultText color-grey">
                <p>Copyright: 2021 Dexignare | All Rights Reserved</p>
                <p>For any assistance, contact us at <a className="footer__end-link" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=support@neomentor.in">support@neomentor.in</a></p>
            </div>
        </div>

        </>
    );
}
 
export default LandingPage;