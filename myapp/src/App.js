import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Maria";

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

  //create a map
  const foodsList = ["Apple Pie", "Pasta Salad", "Omelettes" ];
  const foodMap = foodsList.map((food) =>{
    return(
      <p>my favorite food is {food}</p>
    )
  });

  //function to do something when button is clicked
  const buttonFunction = () => {
    console.log("the button was clicked");
  }

  //keeps track of characters typed into input box
  const onChangeFunction = (event) => {
    console.log(event.target.value);
  }
 
  

   
  return (
    <div className="App">
      <header className="App-header">

          hi my name is {name}
          
          <button onClick={buttonFunction}>I am a button</button>
          
          <input type="text" onChange={onChangeFunction}/>

          <div>{foodMap}</div>
          <div>{friendMap}</div>
      
      </header>
    
    
      <title>Maria Cristoforo's Website</title>
     
    
        <h1 className="center">Maria Cristoforo</h1>

        <h3 className="center">Dartmouth '24</h3>

        <a target="_blank" className="linkPosition" href="https://github.com/MariaC27">my github page!</a>

        <p>Super excited to be here! I'm from Beverly MA, a town on the northern coast of Massachusetts. 
            I'm interested in studying CS and statistics at Dartmouth and learning Mandarin Chinese. 
            I've programmed in Java and Python for my high school's robotics team, but I've never
            done much web development before. Outside of class I enjoy running and baking. I have no 
            pets :( but I am a cat person. 
        </p>

        <figure>
            <img src="images/beverly.jpeg" alt="Beverly" className="bevImg"/>
            <figcaption>Me in Beverly MA (coastal town w lots of beaches)</figcaption>
        </figure>
        
        <figure>
            <img src="images/fall.jpeg" alt="Fall" className="fallImg"/>
            <figcaption>My fav season</figcaption>
        </figure>

        <figure>
            <img src="images/plants.jpeg" alt="Plants" className="plantImg"/>
            <figcaption>Some plants I'm taking care of...</figcaption>
        </figure>

        <img src="images/self.jpeg" alt="Self" className="selfImg"/>
      

  </div>

  );
}

export default App;
