import React, { useState, useEffect } from 'react'
import ListContent2 from '../listContent/ListContent2'
import Card from '../card/Card2'
import content from '../../data.json'

const Slider2 = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const cardData = content.topSeries.map((movie, index) => {
      return <Card number={index + 1} src={movie.Poster} info={{ Title: movie.Title, Type: movie.Type, Year: movie.Year, id: movie.imdbID }} />
    })
    setData(cardData)
    console.log(cardData)
  }, [])
  return (
    <div style={{ marginBottom: '100px', }}>
      {data && <ListContent2 arrOfCards={data} title='top series Worldwide' itemsPerPage={6} />}
    </div>
  )
}

export default Slider2