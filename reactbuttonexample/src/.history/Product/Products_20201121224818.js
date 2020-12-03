import React, { Component } from 'react';
//import { Card, ListGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Recpro from './Recpro';

class Products extends Component {

    constructor(props) {
        super(props);
        this.handle2 = this.handle2.bind(this);
        this.handle1 = this.handle1.bind(this);
      }
    handle2(event){

    }
    handle1(event){
        return() <Recpro />
    }
    render() {
        return (
            <div >
                <div><h2 style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>Pro Page</h2>
                <form>
                    <Button variant="btn btn-success" onClick={this.handle1}>Student</Button>
                    
                </form>
                    
                </div>
            </div>
        );
    }
}

export default Products;