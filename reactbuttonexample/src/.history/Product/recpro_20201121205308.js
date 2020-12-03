import React, { Component } from 'react';
//import { Card, ListGroup } from 'react-bootstrap';


class Recpro extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div>
        <label>Enter value : </label>
        <textarea
          value={this.state.textAreaValue}
          onChange={this.handleChange}
          rows={5}
          cols={5}
        />
      </div>
            </div>
        );
    }
}

export default Recpro;