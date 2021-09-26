import React, { useEffect, useState } from 'react';
import Show from './show';

const Check = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('./fakeDb.json')
        .then(res=> res.json())
        .then(data => setUsers(data))
        
    },[])
    console.log(users);
    return (
        <div>
            <h2>Hello</h2>
            {
                users.map(user => <Show source={user.photo}></Show>)
            }
        </div>
    )
}

export default Check;