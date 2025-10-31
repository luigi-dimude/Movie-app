import React, { useState, useEffect } from 'react'
import ListContent4 from '../listContent/ListContent4'
import Card6 from '../card/Card6'
import content from '../../data.json'

const Slider4 = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const cardData = content.topSeries.map((movie, index) => {
      return <Card6 number={index + 1} src={movie.Poster} info={{ Title: movie.Title, Type: movie.Type, Year: movie.Year, id: movie.imdbID }} />
    })
    setData(cardData)
    console.log(cardData)
  }, [])
  return (
    <div style={{ marginBottom: '100px', }}>
      {data && <ListContent4 arrOfCards={data} title='top series Worldwide' itemsPerPage={6} />}
    </div>
  )
}

export default Slider4