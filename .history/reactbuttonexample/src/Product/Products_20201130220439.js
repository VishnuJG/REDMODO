import React, { Component } from 'react';
//import { Card, ListGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Recpro from './Recpro';
import axios from 'axios';
import './prod.css';

class Products extends Component {

  state={
    title:'',
    body:'',
    posts:[]
  };

  componentDidMount=()=>{
    this.getBlogPost();
  }

  getBlogPost=()=>{
    axios.get('http://localhost:8080/api')
    .then((response)=>{
      const data=response.data;
      this.setState({posts:data});
      console.log('Data has been received');
    })
    .catch(()=>{
      alert('Error retrieving data');
    });
  }

  handleChange=({target})=>{
    const {name,value}=target;
    this.setState({
      [name]:value
    });
  };

  submit=(event)=>{
    event.preventDefault();
    const payload={
      title:this.state.title,
      body:this.state.body
    };


    axios({
      url:'http://localhost:8080/api/save',
      method:'POST',
      data:payload
    })
    .then(()=>{
      console.log('Data has been sent to the server');
      this.resetUserInputs();
    })
    .catch(()=>{
      console.log('Internal server error');
    });
  };


  resetUserInputs=()=>{this.setState({//this will reset the text area to null every time this function is called || the submit button is pressed
    title:'',
    body:''
  });
};


  displayBlogPost=(posts)=>{
    if(!posts.length)return null;

    return posts.map((post,index)=>(
    <div key={index} className='blog-post_display'>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
  };
  render(){
    console.log('State: ',this.state);
    return(<div className='app'>
      <form onSubmit={this.submit}>
        <div className="form-input">
          <input
          type="text"
          name="title"
          placeholder="Question Number"
          value={this.state.title}
          onChange={this.handleChange}
          />
        </div>
        <div className="form-input">
          <textarea placeholder="Question" name="body" cols="100" rows="10" value={this.state.body} onChange={this.handleChange}></textarea>
        </div>
        <h5 className>*Once submitted, question can not be modified.</h5>
        <button className="form-input">Submit</button>
      </form>
      <div className="blog-post">
        {this.displayBlogPost(this.state.posts)}
      </div>
    </div>
    )
  }
}


export default Products;