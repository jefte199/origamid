import React from 'react';
import { useParams } from 'react-router-dom';

const Prod = () => {
  const params = useParams();
  console.log(params);
  return (
    <h1>{params.id}</h1>
  );
}

export default Prod;