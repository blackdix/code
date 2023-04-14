

import React, { Component } from 'react';

class child1 extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    minbuy=1;
    render() {
        return (
            <div>
                <h2>Child component</h2>
                <p>stok {this.props.stok}</p>
                <button onClick={()=>this.props.fungsi(this.minbuy)} >Buy</button>
            </div>
        );
    }
}

export default child1;