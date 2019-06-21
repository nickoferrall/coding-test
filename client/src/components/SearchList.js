import React, { useState, useEffect } from 'react';
import Address from './Address';
import axios from 'axios';

export default function SearchList() {
  const [addresses, setAddresses] = useState('');

  useEffect(() => {
    getAddresses();
  });

  const getAddresses = async () => {
    const res = await axios({
      method: 'get',
      url: 'http://localhost:9000/api/'
    });
    const data = res.data;
    setAddresses(data);
    console.log('data', data);
  };

  let mappedData;
  if (addresses) {
    mappedData = addresses.map((val, index) => {
      return (
        <>
          <Address key={index} data={val} />
        </>
      );
    });
  }

  return <div>{mappedData}</div>;
}
