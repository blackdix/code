import React from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

/* route navigate */
import { useNavigate,Link } from "react-router-dom";
 

export default function blog(props){
   

       
      
    return (<div>
      
        <Card>
        <CardImg top width="100%" src="https://placeimg.com/640/480/nature" alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.judul}</CardTitle>
          <CardSubtitle>{props.tanggal}</CardSubtitle>
          <CardText><p>It uses utility classes for typography and spacing to space content out within the larger container.</p></CardText>
          <Button OnClick="">Detail  </Button>
          <Link to ={{
                 pathname:'/detail/1',
                state :{
                     judul:props.judul,
                     tanggal:props.tanggal
        
                  

          }  }}>Detail</Link>
        </CardBody>
      </Card>
    </div>
    );
}