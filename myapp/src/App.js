import logo from './logo.svg';
import beverly from './Images/beverly.jpeg'
import fall from './Images/fall.jpeg'
import plants from './Images/plants.jpeg'
import self from './Images/self.jpeg'
import './App.css';

function App() {

 
  /*
  //comment out the map and objects for now since they aren't necessary for the website
  //this was just for testing out a map with objects
  const maria = {
    name: "maria",
    age: 19,
    major: "computer science",
    location: "massachusetts"
  }

  const nonExistentSibling = {
    name: "matthew",
    age: 22,
    major: "biology",
    location: "new york"

  }

  const kevin = {
    name: "kevin",
    age: 19,
    major: "mechanical engineering",
    location: "massachusetts"
  }

  const sarah = {
    name: "sarah",
    age: 19,
    major: "english",
    location: "delaware"
  }

  //create a map with objects
  const friends_and_family = [nonExistentSibling, kevin, sarah];
  const friendMap = friends_and_family.map((friend) =>{
   
    return (
      
      <h1>{friend.name}</h1>
    )
  });

  */

  //create a map
  const foodsList = ["Apple Pie", "Pasta Salad", "Omelettes" ];
  const foodMap = foodsList.map((food) =>{
    return(
      <p className="foodMapText">{food}</p>
    )
  });


  //function to do something when button is clicked, have different methods for each image
  const bevImgFunction = () => {
    var x = document.getElementById("bevButton");

    if (x.style.display === "none") {
      x.style.display = "block";
    } 
    else {
      x.style.display = "none";
    }
  }

  const fallImgFunction = () => {
    var x = document.getElementById("fallButton");
    if (x.style.display === "none") {
      x.style.display = "block";
    } 
    else {
      x.style.display = "none";
    }

  }

  const plantImgFunction = () => {
    var x = document.getElementById("plantButton");
    if (x.style.display === "none") {
      x.style.display = "block";
    } 
    else {
      x.style.display = "none";
    }

  }


  //keeps track of characters typed into input box
  const onChangeFunction = (event) => {
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
 
  
  return (
    <div className="App">

      
     
    
        <h1 className="center">Maria Cristoforo</h1>

        <h3 className="center">Dartmouth '24</h3>

        
        <div id="textBox">
          <input type="text" onChange={onChangeFunction} className="inputBox"/>
        </div>

        <p className = "inputBoxCaption">Drop your email here and I'll email you something:</p>
        

        <a target="_blank" className="linkPosition" href="https://github.com/MariaC27">my github page!</a>

        <p className = "favFoods">Some of my favorite foods:</p>
        <div className="foodMap">
          {foodMap}
        </div>

        <p>Super excited to be here! I'm from Beverly MA, a town on the northern coast of Massachusetts. 
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
            <button className="bevButton" onClick={bevImgFunction}>?</button>
            <div id="bevButton" className="ButtonDiv">
               <figcaption>Me in Beverly MA (coastal town w lots of beaches)</figcaption>
            </div>
        </figure>
        
        <figure>
            <img src={fall} alt="Fall" className="fallImg"/>
            <button className="fallButton" onClick={fallImgFunction}>?</button>
            <div id="fallButton" className="ButtonDiv">
              <figcaption>My fav season</figcaption>
            </div>
        </figure>

        <figure>
            <img src={plants} alt="Plants" className="plantImg"/>
            <button className="plantButton" onClick={plantImgFunction}>?</button>
            <div id="plantButton" className="ButtonDiv">
              <figcaption>Some plants I'm taking care of...</figcaption>
            </div>
        </figure>

        <img src={self} alt="Self" className="selfImg"/>
      
  </div>

  );
}

export default App;
