import React from 'react';
import './Teammate.css'

const Teammate = props => {
    const {name, photo, salary} = props.member;
    // console.log(props.member);
    return (
        <div className="member-container">
            <div className="selected-member">  
            <div>
            <img className="profile-photo" src={photo} alt="" />
            </div>
            <div className="member-info">
                <h4>{name}</h4>
                <h5>Salary : ${salary}</h5> 
            </div>
            
            </div>
        </div>
    );
};

export default Teammate;