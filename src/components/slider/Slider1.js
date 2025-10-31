import React, { useState, useEffect } from 'react'
import ListContent from '../listContent/ListContent'
import Card from '../card/Card'
import content from '../../data.json'
import content2 from '../../newData.json'

const Slider1 = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const cardData = content2.topMovies.map(movie => {
      return <Card key={movie.Actors} src={movie.Poster} info={{ Title: movie.Title, Type: movie.Type, Year: movie.Year, id: movie.imdbID }} />
    })
    setData(cardData)
  }, [])
  return (
    <div style={{ marginBottom: '50px' }}>
      {data && <ListContent arrOfCards={data} title='top movies Worldwide' itemsPerPage={6} />}
    </div>
  )
}

export default Slider1