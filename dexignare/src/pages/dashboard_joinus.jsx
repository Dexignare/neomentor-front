import React from 'react';
import SelectionButton from '../components/selectionButton'
import NavBar from '../components/navBar'


const JoinUs = () => {
    return (
        <>
        <NavBar />
        <section className="section-options u-margin-bottom-small">
            <div className="heading section-options__heading u-margin-bottom-medium">
                <h1 className="heading-primary u-margin-bottom-small">Join Our Family</h1>
                <h3 className="heading-tertiary color-grey">To begin the journey, tell us how do you want to join this community?</h3>
            </div>
            <a href='/' className="options">
                <div className="options__button u-margin-bottom-small ">
                    <SelectionButton Title="Community Member" Icon="member" Content="Member account to connect to mentors and involve in community activities"/>  
                </div>
            </a>
            <a href='/' className="options">
                <div className="options__button u-margin-bottom-small">
                    <SelectionButton Title="Mentor" Icon="mentor" Content="Become a mentor, meet mentees and mentor the global community" />  
                </div>
            </a>
                <div className="continue">
                <a href="/" className="continue__btn u-margin-top-small">
                    Continue
                </a>
            </div>
        </section>
        
        </>
    );
}
 
export default JoinUs;