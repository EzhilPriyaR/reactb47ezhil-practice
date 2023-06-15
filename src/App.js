import React from 'react'

function App() {
  const courseOne = 'Fundamentals of React';
  const exeOne = 10;
  const courseTwo = 'Using props to pass data';
  const exeTwo = 7;
  const courseThree = 'State of a component';
  const exeThree = 14;

  return (
    <div>
      <h1>Half Stack Application Development</h1>
      <p>{courseOne} = {exeOne}</p>
      <p>{courseTwo} =  {exeTwo}</p>
      <p>{courseThree} = {exeThree}</p>
      <p>Total Number of exercise = {exeOne + exeTwo + exeThree}</p>
    </div>
  )
}

export default App