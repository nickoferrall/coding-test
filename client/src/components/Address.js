import React from 'react';

export default function Address({ data }) {
  return (
    <div>
      <span>{data.name}</span>
      <span>{data.postcode}</span>
    </div>
  );
}
