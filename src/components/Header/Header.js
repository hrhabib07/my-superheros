import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="heading-container">
                <div className="container rounded">
                <h2>List of top class programmer in <span className="special-name">Bangladesh</span> </h2>
                <h5>We always try to <span className="special-name">improve</span> our skills. </h5>
                <h2>Total budget <span className="special-name">$50000 </span> USD</h2>
                </div>
            </div>
    );
};

export default Header;