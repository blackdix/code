import React, { Component } from 'react';

class grandchild extends Component {
    render() {
        return (
            <div>
                <p>data grand child</p> 
                <p>{this.props.data}</p>
            </div>
        );
    }
}

export default grandchild;