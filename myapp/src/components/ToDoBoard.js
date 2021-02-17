import React, { Component } from 'react';
import Firebase from '../firestore/index';
import ToDoPost from './ToDoPost';
import './ToDo.css';

class ToDoBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allToDos: [],
      title: '',
      id: 0,
      task: '',
    }
  }
  newTitleFunction = (event) => {
    this.setState({ title: event.target.value });
  }
  newTaskFunction = (event) => {
    this.setState({ task: event.target.value });
  }

  saveNewToDo = () => { 
    Firebase.db.collection('todo').add({
      title: this.state.title,
      task: this.state.task,
      id: this.state.id
    }).then(ref => {
      this.setState({
        id: this.state.id + 1,
      });
      }).catch(error => {
    console.log(error.message)
    });
  }

  fetchToDos = () => {
    const todoList = [];
    Firebase.db.collection('todo').get()
      .then(querySnapshot => {
        querySnapshot.forEach( doc => {
          console.log(doc.data());
          todoList.push(doc.data());
        })
      }).then(() => {
        this.setState({
          allToDos: todoList
        });
        console.log(this.state.allToDos);
      })
      .catch(err => {
        console.log(err.message)
      })
  }

 
  render() {
    const posts = this.state.allToDos;
    const allPosts = posts.map((todo) => {
        return (
          <ToDoPost className="todoPost"
            title={todo.title}
            task={todo.task}
            id={todo.id}
          />
        );
      }
    );
    return (
      <div>
        <p className="boardTitle"> To Do Board </p>
       
        <p className="boardText">Add something!</p>

        <p>Enter Title:</p>
        <input className="boardInput" type="text" value={this.state.title} onChange={this.newTitleFunction} />

        <p>Enter Task:</p>
        <input className="boardInput" type="text" value={this.state.task} onChange={this.newTaskFunction} />

        <button className="boardButton" onClick={this.saveNewToDo}>Save To Do!</button>

        
          <button className="boardButton" onClick={this.fetchToDos}> Show My To Dos!</button>
          <div>
          {allPosts}
          </div>
         
       
      </div>
    );
  }
}

export default ToDoBoard;