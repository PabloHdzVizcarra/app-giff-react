import React, { useState } from 'react';
import {  useLocation } from 'wouter';

export const Home = () => {

  const [keyword, setKeyword] = useState('');
  const [path, pushLocation] = useLocation();
  

  const handleSubmit = (event) => {
    // navegar a otra ruta
    event.preventDefault();
    pushLocation(`/search/${keyword}`);
  }

  const handleChange = (event) => {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Search a gif here...'
          onChange={handleChange}
          type="text" 
          value={keyword}  
        />
      </form>
    </div>
  )
}
