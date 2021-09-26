import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import "./Cards.css"

const Cards = props => {
    // const {person} = props.users;
    // console.log(props);
    const {name, age, photo, profession, key, role, salary} = props.user;
    // const {handleAddToTeam} = props.handleAddToTeam;
    return (
        <div className="single-card">
            <img className="profile-photo" src={photo} alt="" />
            <br />
            <h2>{name}</h2>
            <br />
            <p>Age : {age}</p>
            <p>ID : {key}</p>
            <p>Profession : {profession}</p>
            <p>Role : {role}</p>
            <p>Salary: ${salary}</p>
            <br /> 
            <button 
            onClick={()=>props.handleAddToTeam(props.user)}
            className="button-regular"
            >
                
                  Add to Team 
                  <small> <FontAwesomeIcon icon={faPlusCircle} /></small></button>
            <br />
        </div>
    );
};

export default Cards;