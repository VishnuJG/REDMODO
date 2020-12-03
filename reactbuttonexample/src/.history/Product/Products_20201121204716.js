import React, { Component } from 'react';
//import { Card, ListGroup } from 'react-bootstrap';
import recpro from './Recpro';

class Products extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div><h2>Pro Page</h2>
                    <recpro />
                </div>
            </div>
        );
    }
}

export default Products;