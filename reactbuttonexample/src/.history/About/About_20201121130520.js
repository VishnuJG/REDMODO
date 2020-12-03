import React, { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        this.handle3 = this.handle3.bind(this);
        this.handle2 = this.handle2.bind(this);
        this.handle1 = this.handle1.bind(this);
      }
        handle3(event){
            var bl=0;
    
        var num="";
        var div1=document.createElement("div");
        bl+=1;
        num="idnum"+bl;
        var gendiv=document.getElementById("general");
        console.log(num);
        
        div1.innerHTML='\
        <div style="background-color:rgb(250,128,114,0);margin-left:50px;margin-right:100px;padding:20px" onload="init()">\
        <h3 id="num${num}" name="questionnumber">Question :</h3>\
        <div  style="background-color:rgb(255,160,122)">	\
        </div>\
        \
        <input type="number" id="bla"  placeholder="Enter question Number" required min="1" onload="fun1(event)" onchange='+this.handle1+'/> \
        <br><textarea id="quesone" rows="4" cols="90" >\Type your answer here.!\
        </textarea><br>\
        \
        \
        <button onclick={this.handle2}>Submit</button>\
        <hr>\
        <p id="qarea"></p>\
        </div>'
        console.log(div1.id);
        gendiv.appendChild(div1);
    
    }
    handle1(event){
        var ev=event.target;
        var bl=document.getElementById("bla").value;
        var ele=document.getElementById(bl);
        ele.innerHTML="Question : "+ev.value;
    }
        handle2(event){
        var ex=document.getElementById("quesone").value;
        var p1=document.getElementById("qarea");
        p1.innerHTML=ex;
        console.log(ex);
    }
    render() {
    return( <div id="general">
    <h1 style={{display: 'flex', justifyContent: 'center', padding: 30}}>Teacher</h1>
    
    <button onClick={this.handle3}>Next Question</button></div>
    );
    }
}

export default About;