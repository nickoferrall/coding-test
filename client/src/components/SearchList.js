import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Address from './Address';
import axios from 'axios';
import List from '@material-ui/core/List';

const styles = {
  section: {
    padding: 0,
    marginTop: 10,
    backgroundColor: '#fafafa'
  }
};

function SearchList({ search, classes }) {
  const [addresses, setAddresses] = useState('');
  const baseUrl = 'http://localhost:9000/api';

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

  useEffect(() => {
    filterAddresses();
  }, [search]);

  let mappedData;
  if (addresses) {
    mappedData = addresses.map((val, index) => {
      return (
        <>
          <List className={classes.section}>
            <Address key={index} data={val} />
          </List>
        </>
      );
    });
  }

  return <div>{mappedData}</div>;
}

export default withStyles(styles)(SearchList);
