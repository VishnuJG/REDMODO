import React, { Component } from 'react';
//import { Card, ListGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Recpro from './Recpro';

class Products extends Component {

    constructor(props) {
        super(props);
        
      }
      state = {
        users: [<Recpro />]
      }
      addUser = () => {
          var lli=document.getElementsByTagName("textarea");
          
            console.log(lli[lli.length-1].innerHTML);
          
          
        this.setState({
          users: [...this.state.users, <Recpro />]
        })
      }
    
    render() {
        return (
            <div >
                <div id="quesarea"><h2 style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>Pro Page</h2>
                <form>
                    <Button variant="btn btn-success" onClick={this.addUser}>New question</Button>
                    
                </form>
                    
                </div>
            </div>
        );
    }
}

export default Products;