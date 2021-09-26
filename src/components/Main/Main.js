import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import Team from '../Team/Team';
import './Main.css'

const Main = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('./fakeDb.json')
        .then(res=> res.json())
        .then(data => setUsers(data))
        
    },[]);
    const [selected, setSelected] = useState([]);
    const handleAddToTeam = info =>{
        const selectedUser = [...selected, info];
        setSelected(
            selectedUser.filter((val,id,array) => array.indexOf(val) === id)
        );
    };
    return (
        <div className="main-section">
            <div className="display-user">
            {
                users.map(user => <Cards
                     user={user}
                    key={user.key}
                    handleAddToTeam={handleAddToTeam} 
                />)
            }
            </div>
             <Team member={selected}/>
            
        </div>
    );
};

export default Main;