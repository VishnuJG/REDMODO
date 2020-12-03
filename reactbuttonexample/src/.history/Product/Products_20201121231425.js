import React, { Component } from 'react';
//import { Card, ListGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Recpro from './Recpro';

class Products extends Component {

    constructor(props) {
        super(props);
        
      }
      state = {
        numChildren: 0
      }
      addUser = () => {
        this.setState({
          users: [...this.state.users, <Recpro />]
        })
      }
    
    render() {
        const children = [];

    for (var i = 0; i < this.state.numChildren; i += 1) {
      children.push(<Resproc key={i} number={i} />);
    };
        return (
            <div >
                <div id="quesarea"><h2 style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>Pro Page</h2>
                <form>
                    <Button variant="btn btn-success" onClick={this.addUser}>New question</Button>
                    {this.state.users}
                </form>
                    <Recpro/>
                </div>
            </div>
        );
    }
}

export default Products;