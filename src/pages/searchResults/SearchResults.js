import React, { useState, useEffect } from 'react'
import { getGifs } from '../../services/getGifs';
import { ListOfGifs } from '../../components/listOfGifs/ListOfGifs';
import { Spinner } from '../../components/spinner/Spinner';

export const SearchResults = ({params}) => {
  

  const { keyword } = params;
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword })
      .then(gifs => {
        setGifs(gifs);
        setLoading(false);
      })
  }, [keyword]);

  return (
    <>
      {
        loading
          ? <Spinner />
          : <ListOfGifs gifs={gifs} />
      }
    </>
  )
}
