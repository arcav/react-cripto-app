import React, { useState, useEffect } from 'react';

import './App.css';

const App = () => {

  const API_URL = "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR";
  const APP_KEY = "d895517855845d4f78ddeacdf0c9201305518a4e87a9d7c2aa637ad9d4dca6a9";


  const [price, setPrice] = useState([])

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const response = await fetch(API_URL)
    const data = await response.json();
    setPrice(data)
    console.log(data)
  }
  return (
    <div className="App">

      <h1>CRIPTO APP</h1>
      <ul>
        <li>
          USD = {price.USD}
        </li>
        <li>
          EUR = {price.EUR}
        </li>
        <li>

          JPY = {price.JPY}
        </li>
      </ul>
    </div>
  );
}

export default App;
