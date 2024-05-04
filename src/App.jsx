import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>

      <h1>Vite + React</h1>
      <Device name="laptop" price="20"></Device>
      <Device name="phone" price="230"></Device>
      <Device name="watch" price="50"></Device>
      <Device name="watch" price="50"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student></Student>
      <Student></Student>
      <Developer></Developer>
    </>
  )
}




function Device({name, price}){
  return <h2>This device: {name}, price:{price}</h2>
}



function Person() {
  const age = 24;
  const money = 20;
  const person = {
    name: "anik",
    age: 24,
    class: 12
  }
  return (
    <>
      <h3>I ame a Person with age:{age}</h3>
      <p>My total money:{money}</p>
      <div>
        <h4>About My details</h4>
        <p>My Name is {person.name}.my current age is {person.age}.I am Reading Class {person.class}</p>
      </div>
    </>
  )
}






function Student({grade=1, score=0}) {
  return (
    <div className="student">
      <h2>This is a Student Function</h2>
      <p>Student Grade: {grade}</p>
      <p>Student Score: {score}</p>
    </div>
  )
}


function Developer(){
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid green',
    borderRadius: "15px"
  }
  return (
    <div style={developerStyle}>
      <h5> Devo devo</h5>
      <p>Coding: </p>
    </div>
  )
}



export default App
