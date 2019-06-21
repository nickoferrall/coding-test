import React, { useEffect, useState } from 'react';

export default function Filter({ handleChange }) {
  useEffect(() => {});
  return (
    <div>
      <textarea onChange={letter => handleChange(letter)} />
    </div>
  );
}
