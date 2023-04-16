
import React, { PureComponent } from 'react';
import axios from 'axios';
//import qs from 'querystring';
//import {Link} from 'react-router-dom';
import {Table,Button,Container,NavLink,Alert} from 'reactstrap';

// server backend
const api ="http://localhost:3001"

class mahasiswa extends PureComponent {
   constructor(props) {
    super(props);
    // variabel array penampung local class
    this.state={
        mahasiswa:[],
        response:"",
        display:'none'    
    } 
    
   }
   // sebuah siklus get data dari backend
   componentDidMount(){
       axios.get(api+'/tampil').then(res=>{
        this.setState({
               mahasiswa: res.data.values

        })
       });
   }
    render() {
        return (
            <div>
                <Container>
                <h2>Data mahasiswa</h2>
               
                <NavLink > <Button color="success" href="/mahasiswa/add"> Tambah </Button></NavLink>
                 <hr/>
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
                    
                        {this.state.mahasiswa.map(mahasiswa=>
                         <tr key={mahasiswa.id}>
                            <td>{mahasiswa.nim}</td>
                            <td>{mahasiswa.nama_lengkap}</td>
                            <td>{mahasiswa.kelamin}</td>
                            <td>{mahasiswa.alamat}</td>
                             <td>  <Button color="success" href="/mahasiswa/edit"> Tambah </Button> | Hapus</td>
                         </tr>
                       ) }
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