import React, { useState, useEffect } from 'react'
import ListContent from '../listContent/ListContent'
import Card from '../card/Card'
import content from '../../data.json'

const Slider1 = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const cardData = content.topMovies.map(movie => {
      return <Card key={movie.Actors} src={movie.Poster} info={{ Title: movie.Title, Type: movie.Type, Year: movie.Year, id: movie.imdbID }} />
    }).reverse();
    setData(cardData)
  }, [])
  return (
    <div style={{ marginBottom: '100px' }}>
      {data && <ListContent arrOfCards={data} title='top movies Canada' itemsPerPage={6} />}
    </div>
  )
}

export default Slider1