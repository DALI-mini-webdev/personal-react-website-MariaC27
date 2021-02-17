import logo from './logo.svg';
import beverly from './Images/beverly.jpeg'
import fall from './Images/fall.jpeg'
import plants from './Images/plants.jpeg'
import self from './Images/self.jpeg'
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import ToDoBoard from "./components/ToDoBoard"
import ImageGallery from "./components/ImageGallery"
import { Component } from 'react';
import axios from 'axios';
import Firebase from './firestore/index';

class App extends Component{

  

  constructor(props){
    super(props);
    this.state = {
      currPage: "Home",
      data: null
    };
}
  state = {currPage: true}

  
  

  fetchData = () => {

     axios.get("http://jservice.io/api/random")
     .then((response) => {
       console.log(response);
       this.setState({data: response.data[0]})
     }).catch((error) => {
       console.log(error)
     })

 };

 renderData = () => {
  if(this.state.data) {
    return(
      <div className="jeapordyButton">
        <div>Question: {this.state.data.question}</div>
          <div>Answer: {this.state.data.answer}</div>

      </div>
    )
  }else{
    return null
  }
}

  //function to do something when button is clicked, have different methods for each image
  bevImgFunction = () => {
    var x = document.getElementById("bevButton");

    if (x.style.display === "none") {
      x.style.display = "block";
    } 
    else {
      x.style.display = "none";
    }
  }

  fallImgFunction = () => {
    var x = document.getElementById("fallButton");
    if (x.style.display === "none") {
      x.style.display = "block";
    } 
    else {
      x.style.display = "none";
    }

  }

  plantImgFunction = () => {
    var x = document.getElementById("plantButton");
    if (x.style.display === "none") {
      x.style.display = "block";
    } 
    else {
      x.style.display = "none";
    }

  }


  //keeps track of characters typed into input box
  onChangeFunction = (event) => {
    console.log(event.target.value);
    var x = document.getElementById("textBoxAfterEnter");
    console.log(x);
    document.getElementById('textBox').onkeypress = function(e){
      if (!e) e = window.event;
      var keyCode = e.code || e.key;
      if (keyCode == 'Enter'){
        // Enter pressed
        x.style.display = "block"; 
        //when enter is pressed, display text that says "thanks for replying"
        console.log("enter pressed");
        
      }
    }
  }


  //usage of callback functions - pressing "Email" button causes email to appear on screen
  changeCurrPage = (newCurrPage) => {
    console.log(newCurrPage)
    this.setState({
      currPage: newCurrPage,
    })
  }

  renderPage = () => {
    if(this.state.currPage === "Gallery"){
      return <ImageGallery/>
    } 
   
  }

  render() {

    console.log(Firebase);


  return (
    <div className="App">

        
        <Navbar changeCurrPage = {this.changeCurrPage}/>
        {this.renderPage()}
        
        <h1 className="center">Maria Cristoforo</h1>

        <h3 className="center">Dartmouth '24</h3>

        
        <div id="textBox">
          <input type="text" onChange={this.onChangeFunction}className="inputBox" />
        </div>

        <p className = "inputBoxCaption">Drop your email here and I'll email you something:</p>
        

        <p className="description">Super excited to be here! I'm from Beverly MA, a town on the northern coast of Massachusetts. 
            I'm interested in studying CS and statistics at Dartmouth and learning Mandarin Chinese. 
            I've programmed in Java and Python for my high school's robotics team, but I've never
            done much web development before. Outside of class I enjoy running and baking. I have no 
            pets :( but I am a cat person. 
        </p>


        <p className="p1">To see a caption for each image, click the "?" button next to each image!
        (you may have to click twice - it's problem I can't fix for now)</p>


        <div id="textBoxAfterEnter" className="ButtonDiv">
          <p className="afterEnter">Thanks for replying!</p>
        </div>


        <figure>
            <img src={beverly} className="bevImg" alt="Beverly"/>
            <button className="bevButton" onClick={this.bevImgFunction}>?</button>
            <div id="bevButton" className="ButtonDiv">
               <figcaption>Me in Beverly MA (coastal town w lots of beaches)</figcaption>
            </div>
        </figure>
        
        <figure>
            <img src={fall} alt="Fall" className="fallImg"/>
            <button className="fallButton" onClick={this.fallImgFunction}>?</button>
            <div id="fallButton" className="ButtonDiv">
              <figcaption>My fav season</figcaption>
            </div>
        </figure>

        <figure>
            <img src={plants} alt="Plants" className="plantImg"/>
            <button className="plantButton" onClick={this.plantImgFunction}>?</button>
            <div id="plantButton" className="ButtonDiv">
              <figcaption>Some plants I'm taking care of...</figcaption>
            </div>
        </figure>

        <img src={self} alt="Self" className="selfImg"/>

        <div className="jeapordyButton">
        <button onClick = {this.fetchData}>click for a jeapordy question</button>
        </div>
        {this.renderData()}

        <div className="todoboard">
          <ToDoBoard></ToDoBoard>
        </div>

        

  </div>

  );
}
}

export default App;
