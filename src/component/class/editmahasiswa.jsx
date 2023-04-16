import React, { PureComponent } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button } from 'reactstrap';
//import {useLocation} from 'react-router-dom';/*di gunakan untuk memperoleh parssing data dari route */




const api ="http://localhost:3001"
class editmahasiswa extends PureComponent {
constructor(props) {
    super(props);
 //const Location = useLocation();
     this.state ={
       //      id_mahasiswa:this.state.location.state.id,
      //       nim:this.state.location.state.nim,
       //      nama:this.state.location.state.nama,
        //     kelamin:this.state.location.state.kelamin,
        //     kelas:this.state.location.state.kelas,
        //     alamat:this.state.location.sate.alamat,
             response:'',
             display:'none'

     }
}
  /* menangkap perubahan data di input bisa di handle dimasukan ke state */
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
}

    render() {
        return (
            <div>
                <Container>
                    <h4>Tambah Data</h4>
                    
                    <Alert color="primary" style={{display:this.state.display}}>
                        {this.state.response}
                    </Alert>
                    <Form className="form">
                        <Col>
                            <Label>NIM</Label>
                            <FormGroup>

                                <Row>
                                    <Col>
                                        <Input type="text" name="nim" value={this.state.nim} onChange={this.handleChange} placeholder='Masukan Nim' />
                                    </Col>
                                </Row>
                            </FormGroup>
                            <Label>Nama</Label>
                            <FormGroup>

                                <Row>
                                    <Col>
                                        <Input type="text" name="nama" value={this.state.nama} onChange={this.handleChange}  placeholder='Masukan Nama' />
                                    </Col>
                                </Row>
                            </FormGroup>
                            <Label>Kelamin</Label>
                            <FormGroup>

                                <Row>
                                    <Col>
                                        <Input type="text" name="kelamin" value={this.state.kelamin} onChange={this.handleChange} placeholder='Masukan Jurusan' />
                                    </Col>
                                </Row>
                            </FormGroup>
                            <Label>Kelas</Label>
                            <FormGroup>

                                <Row>
                                    <Col>
                                        <Input type="text" name="kelas" value={this.state.kelas} onChange={this.handleChange} placeholder='Masukan Kelas' />
                                    </Col>
                                </Row>
                            </FormGroup>
                            <Label>Alamat</Label>
                            <FormGroup>

                                <Row>
                                    <Col>
                                        <Input type="textarea" name="alamat" value={this.state.alamat} onChange={this.handleChange}  placeholder='Masukan Alamat' />
                                    </Col>
                                </Row>

                            </FormGroup>

                            <FormGroup>

                                <Row>
                                    <Col>
                                        <Button type="button" onClick={this.adddata}>Simpan</Button>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Col>
                    </Form>
                </Container>
            </div>
        );
    }
}



export default editmahasiswa;