
import React, { PureComponent } from 'react';
import axios from 'axios';
import qs from 'querystring';
import { Link } from 'react-router-dom';
import { Table, Button, Container, NavLink, Alert } from 'reactstrap';

// server backend
const api = "http://localhost:3001"

class mahasiswa extends PureComponent {
    constructor(props) {
        super(props);
        // variabel array penampung local class
        this.state = {
            mahasiswa: [],
            response: "",
            display: 'none'
        }

    }
    // sebuah siklus get data dari backend
    componentDidMount() {
        axios.get(api + '/tampil').then(res => {
            this.setState({
                mahasiswa: res.data.values

            })
        });
    }
      hapusdata=(id_mhs)=>{
        const{mahasiswa}=this.state
        const data=qs.stringify({
            id:id_mhs
        })
        axios.delete(api+'/hapus',
        {
            data:data,
            header:{'Content-type':'application/x-www-form-urlencoded'}
        }
        ).then(json=>{
            if(json.data.status===200){
                this.setState({
                response:json.data.values,
                mahasiswa:mahasiswa.filter(mahasiswa=>mahasiswa.id !==id_mhs ),
                display:'block'
               })
               this.props.history.push('/mahasiswa')
            } else {
                this.setState({
                    response:json.data.values,
                    
                    display:'block'
                   })
                   //this.props.history.push('/mahasiswa')
            }
        })
      }

    render() {
        return (
            <div>
                <Container>
                    <h2>Data mahasiswa</h2>
                     
                    <NavLink > <Button color="success" href="/mahasiswa/add"> Tambah </Button></NavLink>
                    <Alert color="primary" style={{ display: this.state.display }}>
                        {this.state.response}
                    </Alert>
                    <hr />
                    <Table className="table-bordered">
                        <thead>
                            <tr>
                                <th>Nim</th>
                                <th>Nama</th>
                                <th>Kelamin</th>
                                <th>kelas</th>
                                <th>Alamat</th>
                            </tr>

                        </thead>
                        <tbody>

                            {this.state.mahasiswa.map(mahasiswa =>
                                <tr key={mahasiswa.id}>
                                    <td>{mahasiswa.nim}</td>
                                    <td>{mahasiswa.nama_lengkap}</td>
                                    <td>{mahasiswa.kelamin}</td>
                                    <td>{mahasiswa.alamat}</td>
                                    <td>  <Button >
                                        <Link
                                            to="/mahasiswa/edit"
                                            state={{
                                                id: mahasiswa.id,
                                                nim: mahasiswa.nim,
                                                name: mahasiswa.nama_lengkap,
                                                kelamin: mahasiswa.kelamin,
                                                alamat: mahasiswa.alamat
                                            }}
                                        >edit</Link>
                                    </Button> | <Button onClick={()=>this.hapusdata(mahasiswa.id)}color="danger" >Hapus</Button></td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Container>


            </div>
        );
    }
}

mahasiswa.propTypes = {

};

export default mahasiswa;