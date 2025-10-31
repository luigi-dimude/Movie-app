import React, { useState, useEffect } from 'react'
import ListContent3 from '../listContent/ListContent3'
import Card from '../card/Card'
import content from '../../data.json'

const Slider3 = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const cardData = content.topMovies.map(movie => {
      // return <Card5 src={movie.Poster} info={{ Title: movie.Title, Type: movie.Type, Year: movie.Year, id: movie.imdbID }} />
      return <Card key={movie.Actors} src={movie.Poster} info={{ Title: movie.Title, Type: movie.Type, Year: movie.Year, id: movie.imdbID }} />
    }).reverse();
    setData(cardData)
  }, [])
  return (
    <div style={{ marginBottom: '100px' }}>
      {data && <ListContent3 arrOfCards={data} title='top movies Worldwide' itemsPerPage={6} />}
    </div>
  )
}


export default Slider3