import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import "core-js/stable";
import "regenerator-runtime/runtime";


const App = () => {

  useEffect(() => {getData()},[]);

  const getData = async () => {
    const response = await fetch('https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05')
    const result = await response.json()
    const data = result.bpi
    console.log(data);
  }

  return (
    <Line data={data} />
  )
}

export default App;

