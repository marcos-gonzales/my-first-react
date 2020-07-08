import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <MyFirstComponent color="blue">Chocolate</MyFirstComponent>
      <MyFirstComponent height="100vh">Syrup</MyFirstComponent>
      <MyFirstComponent color="purple" height="100vh">Purple</MyFirstComponent>
      <MyFirstComponent color="purple" height="100vh">Purple</MyFirstComponent>
      <MyFirstComponent color="purple" height="100vh">Purple</MyFirstComponent>
      <MyFirstComponent color="purple" height="100vh" value="orange">Purple</MyFirstComponent>
      <MyFirstComponent color="purple" height="100vh" value="blue">Purple</MyFirstComponent>
      <MyFirstComponent hi="p" color="purple" height="100vh" defaultValue="yellow">Purple</MyFirstComponent>
    </div>
  );
}

let color = '#ff0000'

function changeTitle(props) {
  let parent = props.target.previousSibling;
  parent.style.color = props.target.value;
  parent.textContent = `I am now ${props.target.value} color!`;
  console.log(parent)
}


function MyFirstComponent(props) {
  return (
    <div>
      <h1 style={{color: props.color ? props.color: "orange"}}>{props.children}</h1>
      <input type="color" onInput={changeTitle} defaultValue={color}></input>
    </div>
  )
}

export default App;
