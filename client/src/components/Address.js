import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';

export default function Address({ data }) {
  return (
    <div>
      <ListItemText>{data.name}</ListItemText>
      <ListItemText>{data.postcode}</ListItemText>
    </div>
  );
}
