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
      onAddChild = () => {
        this.setState({
          numChildren: this.state.numChildren + 1
        });
      }
    }
    
    render() {
        const children = [];

    for (var i = 0; i < this.state.numChildren; i += 1) {
      children.push(<Recpro key={i} number={i} />);
    };
        return (
            <div >
                <div id="quesarea"><h2 style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>Pro Page</h2>
                <form>
                    <Button variant="btn btn-success" addChild={this.onAddChild}>New question</Button>
                    {this.state.users}
                </form>
                    <Recpro/>
                </div>
            </div>
        );
    }
}

export default Products;