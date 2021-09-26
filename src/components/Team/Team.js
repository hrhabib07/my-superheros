import React from 'react';
import Teammate from '../Teammate/Teammate';
import './Team.css';
import '../Cards/Cards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons'

const Team = (props) => {
    let total = 0;
    props.member.map(member => total += member.salary )
 
    return (
        <div className="team-container">
            <h2>Make your Team</h2>
            <br />
            <div>
                <h4>Team member : {props.member.length}</h4>
                <h4>Team Budget :    {total}            </h4>
            </div>
            
            <div>
            {
                props.member.map(member => <Teammate
                    member = {member}
                />)
            }
            </div>
            <div>
                <button className="button-regular">Make A Team 
                <small> <FontAwesomeIcon icon={ faLayerGroup} /></small>
                </button>
            </div>
            
        </div>
    );
};

export default Team;