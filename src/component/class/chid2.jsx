import React, { Component } from 'react';
import Grandchild from './grandchild';
import {Button} from 'reactstrap'
class chid2 extends Component {
  
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <div>
                <p>{this.props.stok}</p>
                <Grandchild data={this.props.stok}/>
                <Button color="danger">Danger!</Button>
            </div>
        );
    }
}

export default chid2;