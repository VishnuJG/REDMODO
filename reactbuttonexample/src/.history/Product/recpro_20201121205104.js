import React, { Component } from 'react';
//import { Card, ListGroup } from 'react-bootstrap';


class Recpro extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div onClick={"init()">\
                    <h3 id="num${num}" name="questionnumber">Question :</h3>\
        <div  style="background-color:rgb(255,160,122)">	\
        </div>\
        \
        <input type="number" id="bla"  placeholder="Enter question Number" required min="1" onload="fun1(event)" onchange='+this.handle1+'/> \
        <br><textarea id="quesone" rows="4" cols="90" >\
            Type your answer here.!\
        </textarea><br>\
        \
        \
        <button onclick={this.handle2}>Submit</button>\
        <hr>\
        <p id="qarea"></p>\
        </div>
            </div>
        );
    }
}

export default Recpro;