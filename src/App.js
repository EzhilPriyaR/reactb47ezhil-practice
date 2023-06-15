import React, { useState } from 'react'

function Header(){
  return(
    <h1>Half Stack Application Development</h1>
  );
}

function Content(props){
  return(
    <div>
        <p>{props.courseOne} = {props.exeOne}</p>
        <p>{props.courseTwo} =  {props.exeTwo}</p>
        <p>{props.courseThree} = {props.exeThree}</p>
    </div>
  );
}

function Total(props){
  return(
    <div>
      <p>Total Number of exercise = {props.exeOne + props.exeTwo + props.exeThree}</p>
    </div>
  );
}

function Feedback(){

  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const total = (good + bad + neutral);

  return(
    <div>
      <div>
        <h1>FEEDBACK</h1>
          <button onClick={() => setGood(good+1)}>GOOD</button>
          <button onClick={() => setBad(bad +1)}>BAD</button>
          <button onClick={() => setNeutral(neutral +1)}>Neutral</button>
      </div>
      <div>
        <h3>STATISTICS</h3>
        <div>Good = {good}</div>
        <div>Neutral = {neutral}</div>
        <div>Bad = {bad}</div>
        <div>All = {total}</div>
        <div>Average = {(total) / 3}</div>
        <div>Positivity = {(good / total) * 100} %</div>
      </div>
    </div>
  );

}

function App() {
  const courseOne = 'Fundamentals of React';
  const exeOne = 10;
  const courseTwo = 'Using props to pass data';
  const exeTwo = 7;
  const courseThree = 'State of a component';
  const exeThree = 14;



  return (
    <div>
      <Header />
      <Content courseOne={courseOne} courseTwo={courseTwo} courseThree={courseThree} exeOne={exeOne} exeTwo={exeTwo} exeThree={exeThree}/>
      <Total exeOne={exeOne} exeTwo={exeTwo} exeThree={exeThree}/>
      <Feedback />
    </div>
  )
}

export default App