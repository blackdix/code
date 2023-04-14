import React, { Component } from 'react';
import Child1 from './child1.jsx';
import Child2 from './chid2';

class parents extends Component {
    constructor(props){
        super(props)
        this.state={
            stok:10,
            harga:200000,
            jml:0
        }
    }
        buyproduct=(jumlah)=> {
            this.setState({
                stok:this.state.stok-jumlah,
      
            })
        }
     
    render() {
        return (
         
            <div><Child1 stok={this.state.stok}
            fungsi={this.buyproduct.bind(this)} />
            <Child2 stok={this.state.stok}/>
            </div>
        );
    }
}

export default parents;