import React, { PureComponent } from 'react';

import axios from 'axios';
import { Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const api = "http://localhost:3001";


class addmahasiswa extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            nim: '',
            nama: '',
            kelamin: '',
            kelas: '',
            alamat: '',
            display:'none'

        }
    }
    /* menangkap perubahan data di input bisa di handle dimasukan ke state */
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    /*button action send to backend */
    adddata = () => {
        axios.post(api + '/add', {
            nim: this.state.nim,
            nama_lengkap: this.state.nama,
            kelamin: this.state.kelamin,
            kelas: this.state.kelas,
            alamat: this.state.alamat
        }).then(json => {
            if (json.data.status === 200) {
                this.setState({
                    response: json.data.values,
                    display:'block'
                })
            } else {
                this.setState({
                    response: json.data.values,
                    display:'block'
                })
            }
        })
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



export default addmahasiswa;