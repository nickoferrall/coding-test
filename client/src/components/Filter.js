import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function Filter({ handleChange }) {
  return (
    <div>
      <TextField onChange={letter => handleChange(letter)} />
    </div>
  );
}
