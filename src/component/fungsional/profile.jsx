
import Blog from './blog'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button , Container, Row, Col} from 'reactstrap';



function BasicExample() {
  return ( <div>
  <Container>
         <h1 className="display-3">Profile Page</h1>
         <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
         <hr className="my-2" />
         <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
         <p className="lead">
         </p>
         </Container>
         <Container>
            <Row>
                <Col><Blog id="1" judul="Belajar React" tanggal="22/06/2022"/></Col>
                <Col><Blog id="2" judul="Belajar Nodejs" tanggal="21/06/2023"/></Col>
                <Col><Blog id="3" judul="Belajar Mysql" tanggal="28/06/2023"/></Col>
            </Row>
         </Container>
     </div>
  );
}

export default BasicExample;