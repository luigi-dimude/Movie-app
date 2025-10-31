import React, { useEffect, useRef, useState } from 'react'
import { Title, ListContentContainer } from './ListContent.style';
import Carousel from 'react-elastic-carousel'

const ListContent4 = ({ title, arrOfCards, itemsPerPage }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  let items = itemsPerPage
  if (windowWidth > 450 && windowWidth <= 1000) items = 2;
  else if (windowWidth <= 450) items = 1;
  else items = 2;


  const detectWidth = () => {
    setWindowWidth(window.innerWidth)
  }

  // const itemsPerPage = 6;
  const carouselRef = useRef(null);
  const reset = arrOfCards.length - items;

  useEffect(() => {
    window.addEventListener('resize', detectWidth)
    console.log(windowWidth);
    return () => {
      window.removeEventListener('resize', detectWidth)
    }
  }, [windowWidth])


  return (
    <>
      <Title component='h2' gutterBottom>{title}</Title>
      <ListContentContainer direction='row'>
        <Carousel ref={carouselRef}
          sx={{ width: '120%' }}
          outerSpacing={50}
          itemsToShow={items} pagination={false} enableSwipe={true}>
          {arrOfCards.map(card => card)}
        </Carousel>
      </ListContentContainer>
    </>
  )
}

export default ListContent4