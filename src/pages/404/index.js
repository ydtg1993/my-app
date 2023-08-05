import React from 'react';
import {cat} from "../../resource";

const NoFound = () => {
    return (
        <div>
            <h1 style={{textAlign:'center'}}>404 Not Found</h1>
            <img src={cat}/>
            <p style={{textAlign:'center'}}>The page you are looking for does not exist.</p>
        </div>
    );
};

export default NoFound;