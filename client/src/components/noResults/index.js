import React from 'react';
import notFound from '../../assets/notFound.png';
import './NotFound.css';

const NoResults = ({ setLoading }) => {
  setLoading(false);
  return (
    <div className="not-found">
      <img src={notFound} />
      <h2>Sorry, no results for your search!</h2>
    </div>
  )
}

export default NoResults;