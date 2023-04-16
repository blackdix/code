import React from 'react';
import {useLocation} from 'react-router-dom';/*di gunakan untuk memperoleh parssing data dari route */


function detail() {
        
        const Location = useLocation();

    return (
        <div>
    <container>
        <h1 className="display-3">{Location.state.name}</h1>
        <p>{Location.state.id}</p>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
        
        </p>
        </container>
    </div>
    );
}

export default detail;