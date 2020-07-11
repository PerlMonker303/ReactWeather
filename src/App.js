import React, {useState} from 'react';
import Forecasts from './components/Forecasts/Forecasts';
import Input from './components/UI/Input/Input';

import axios from 'axios';

function App() {
  /*
  const test = axios.get('http://api.weatherstack.com/forecast?access_key=e8ec4f1ea621d83f676f81576bd4e748&query=Sfantu Gheorghe,Covasna')
  .then(response => {
    console.log(response);
  });
  */

  return (
    <div>
      <Input />
      <Forecasts title="TITLE" />
    </div>
  );
}

export default App;
