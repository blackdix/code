import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

/* route navigate */
import { useNavigate,Link } from "react-router-dom";


const homepage = () => {
    const Navi = useNavigate()
    return ( 
        <div>
 <container>
        <h1 className="display-3">Home Page</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
    </p>
        </container>
    </div>
    );
}

export default homepage;