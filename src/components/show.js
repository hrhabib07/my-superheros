import React from 'react';

const Show = (props) => {
    console.log(props);
    return (
        <div>
            <h2>hellow</h2>
            <img src={props.source} alt="" />
        </div>
    );
};

export default Show;