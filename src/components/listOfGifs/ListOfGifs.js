import React from 'react';
import { Gif } from '../Gif';
import './styles.css';

export const ListOfGifs = ({gifs}) => {

  

  return (
    <div className="gif-contain">
      {
        gifs.map(({ title, id, url }) => (
          <Gif
            id={id} 
            key={id}
            title={title}
            url={url}
          />
        ))
      }
    </div>
  )
}
