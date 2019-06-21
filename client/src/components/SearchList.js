import React, { useState, useEffect } from 'react';
import Address from './Address';
import axios from 'axios';

export default function SearchList({ search }) {
  const [addresses, setAddresses] = useState('');
  const baseUrl = 'http://localhost:9000/api';

  useEffect(() => {
    filterAddresses();
  }, [search]);

  const filterAddresses = async () => {
    if (!search) {
      const res = await axios({
        method: 'get',
        url: baseUrl
      });
      const data = res.data;
      setAddresses(data);
    } else {
      const res = await axios({
        method: 'get',
        url: `${baseUrl}/search`,
        headers: {
          'Content-Type': 'application/json',
          value: search
        }
      });
      const data = res.data;
      setAddresses(data);
    }
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
