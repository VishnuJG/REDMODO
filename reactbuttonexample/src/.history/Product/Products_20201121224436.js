import React, { Component } from 'react';
//import { Card, ListGroup } from 'react-bootstrap';
import Recpro from './Recpro';

class Products extends Component {

    constructor(props) {
        super(props);
        this.handle3 = this.handle3.bind(this);
        this.handle2 = this.handle2.bind(this);
        this.handle1 = this.handle1.bind(this);
      }

    render() {
        return (
            <div >
                <div><h2 style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>Pro Page</h2>

                    <Recpro />
                </div>
            </div>
        );
    }
}

export default Products;