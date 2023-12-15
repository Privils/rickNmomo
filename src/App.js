import React from 'react';
import './App.css';
import image from './anime-site.png'
import { useEffect, useState } from 'react';

function App() {
  fetch('https://rickandmortyapi.com/api/character').then(res => res.json())
  .then(data => {
   // console.log(data)
  })
const [ricky, setRicky] = useState([]);
useEffect(()=>{
  rick()
}, [])
  async function rick(){
    const url = 'https://rickandmortyapi.com/api/character';
    try {
      let rickData = await fetch(url)
      const response = await rickData.json();
      console.log(response)
      setRicky(response)
    } catch (error) {
      console.log('your errors are:', error)
    }
  }
  return (
    <>
      <header>
        <h1>Rick n MoMo</h1>
      </header>
      <main className='main'>
        {ricky.results && ricky.results.length > 0 ? (
          ricky.results.map((values) => (
            <div className='container' key={values.id}>
              <img src={values.image} alt={values.name} />
              <div className="info-container">
                <span className="name">character name: {values.name}</span> <br />
                <span className="species">character species: {values.species}</span><br />
                <span className="gender">character gender: {values.gender}</span><br />
                <span className="alive">character status: {values.status}</span>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </>
  );
}

export default App;

