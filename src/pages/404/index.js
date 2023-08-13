import React from 'react';
import {dog_funny} from "../../resource";

const NoFound = () => {
    return (
        <div>
            <h1 style={{textAlign:'center'}}>404 Not Found</h1>
            <img width={'320px'} src={dog_funny}/>
            <p style={{textAlign:'center'}}>The page you are looking for does not exist.</p>
            <h3 style={{textAlign:'center'}}><span id="siteseal"><script async type="text/javascript" src="https://seal.godaddy.com/getSeal?sealID=jw1Iq785ly1PLxAenff6dLUnxzoWtocwrn6hvfVBYHyOk7nw7WzVnNDbRRO3"></script></span></h3>
        </div>
    );
};

export default NoFound;