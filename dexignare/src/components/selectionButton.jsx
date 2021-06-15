import React from 'react'
import x1 from '../assets/community_member_logo.png'
import x2 from '../assets/mentor_logo.png'

const SelectionButton = ({Icon,Title,Content}) => {
    var x;
    if(Icon=="member"){
        x=x1;
    }
    else{
        x=x2;
    }
    return (
            <div className="btn__content ">
                <a href='/' className="btn__link">
                    <div className="btn__flex-container">
                        <img src={x} className="btn__icon"  />
                        {Title && <p className="heading-tertiary ">{Title}</p>}
                    </div>
                    {Content && <p className="defaultText">{Content}</p>}
                    <div className="btn__arrow">&#8594;</div>
                 </a>
        </div>
     );
}
 
export default SelectionButton;