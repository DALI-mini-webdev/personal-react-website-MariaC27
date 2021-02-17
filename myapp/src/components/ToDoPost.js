import React, { Component } from 'react';
import Firebase from '../firestore/index';


class ToDoPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

 
  deletePosting = () => {
    console.log('deleted!');
    this.props.delete(this.props.id);
  }

  render() {
    

    return (
      <div className='todoPostStyle'>
        <p>{this.props.title}</p>
        <p>{this.props.task}</p>
      </div>
    )
  }
}

export default ToDoPost;
