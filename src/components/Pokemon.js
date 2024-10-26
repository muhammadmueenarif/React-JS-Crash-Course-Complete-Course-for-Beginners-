import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Pokemon= ()=> {
    const [num, setNum] = useState(); 
    const [name, setName] = useState();
    const [moves, setMoves] = useState();

    useEffect(()=>{
        async function getData() {
            const res= await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            // console.log(res);//this returns object. to get specific data we will use below. 
            setName(res.data.name);
            setMoves(res.data.moves.length); //we can use res.data.moves.length
            // console.log(res.data.moves); array output
        }
        getData();
    });
  return (
    <>
    <h1>You choose <span style={{color:"red"}}> {num} </span> value</h1>
    <h1>My name is <span style={{color:"red"}}> {name} </span> </h1>
    <h1>I have <span style={{color:"red"}}> {moves} </span> </h1>

      <select value={num} onChange={(event)=> {
        setNum(event.target.value)
      }}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select></>
  )
}

export default Pokemon
