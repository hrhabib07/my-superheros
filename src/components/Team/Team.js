import React from 'react';
import Teammate from '../Teammate/Teammate';
import './Team.css';
import '../Cards/Cards.css'

const Team = (props) => {
    // const {members} =props.member;
    console.log(props);
    console.log(props.member);
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
                <button className="button-regular">Make A Team</button>
            </div>
            
        </div>
    );
};

export default Team;