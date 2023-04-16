import React from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';/* grafis UI*/

/* route navigate */
import { useNavigate,Link } from "react-router-dom";
import { ButtonToolbar } from "react-bootstrap";
 

export default function blog(props){
  /* membuat button dengan usenavigate route */
  const navigate = useNavigate();
var id=props.id
var data=props.judul;
  const Btn= () => {
    // 👇️ navigate to /contacts
    navigate('/detail',{state:{id:id,name:data}});
     
  };
  const doto="https://placeimg.com/640/480/nature";
    return (<div>
      
        <Card>
        <CardImg top width="100%" src={doto} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.judul}{data}</CardTitle>
          <CardSubtitle>{props.tanggal}</CardSubtitle>
          <CardText><p>It uses utility classes for typography and spacing to space content out within the larger container.</p></CardText>
          <Button onClick={()=>{Btn()}}>Detail  </Button>
       
          <Link to="/detail" state={{id: 1, name: data, shirt: 'green'}}>
    
    link2</Link>
        </CardBody>
      </Card>
    </div>
    );
}