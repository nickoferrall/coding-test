import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [arr, setArr] = useState([]);
  const test = [
    {
      name: 'St_Albans',
      postcode: 'AL1 2RJ'
    },
    {
      name: 'Daniel',
      postcode: 'AL9 5JP'
    },
    {
      name: 'Worthing',
      postcode: 'Da14 9GB'
    },
    {
      name: 'Rustington',
      postcode: 'BN16 3RT'
    },
    {
      name: 'Eastbourne',
      postcode: 'BR23 6QD'
    },
    {
      name: 'Brussels',
      postcode: 'BN23 6QD'
    },
    {
      name: 'Bracknell',
      postcode: 'MD12 EKM'
    }
  ];

  let testArr = [];

  for (let i = 0; i < test.length; i++) {
    if (test[i].postcode.toLowerCase().includes('br')) {
      testArr.push(test[i]);
    }
    if (test[i].name.toLowerCase().includes('br')) {
      if (!testArr.includes(test[i].name)) {
        testArr.push(test[i]);
      }
    }
  }

  return (
    <div>
      {testArr.map(val => (
        <h4>
          {val.name}
          {val.postcode}
        </h4>
      ))}
    </div>
  );
}

export default App;
