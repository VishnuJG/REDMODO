import React, { Component } from 'react';
//import { Card, ListGroup } from 'react-bootstrap';


class Recpro extends Component {
    constructor() {
        super();
        this.state = {
          textAreaValue: ""
        };
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({ textAreaValue: event.target.value });
      }
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div>
                    <label>Enter the next Question : </label><br></br>
                    <textarea
                    value={this.state.textAreaValue}
                    onChange={this.handleChange}
                    rows={15}
                    cols={115}
                    />
                </div>
            </div>
        );
    }
}

export default Recpro;