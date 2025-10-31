import React, { useEffect, useRef, useState } from 'react'
import IconButton from '@mui/material/IconButton';
import Card from '../card/Card2'
import { ArrowForward, ArrowBackward, DarkOverlay, Title, ListContentContainer } from './ListContent.style';
import Carousel from 'react-elastic-carousel'

const ListContent = ({ title, arrOfCards, itemsPerPage }) => {
  const [position, setPosition] = useState(0)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  let swipe = false;
  let items = itemsPerPage
  if (windowWidth <= 1865) items = 5;
  if (windowWidth <= 1183) items = 4;
  if (windowWidth <= 967) items = 3;
  const detectWidth = () => {
    setWindowWidth(window.innerWidth)
  }

  // const itemsPerPage = 6;
  const carouselRef = useRef(null);
  const reset = arrOfCards.length - items;

  useEffect(() => {
    window.addEventListener('resize', detectWidth)

    return () => {
      window.removeEventListener('resize', detectWidth)
    }
  }, [windowWidth])

  const goNext = () => {
    setPosition(prev => prev + 1)
    if (position >= reset) {
      carouselRef.current.goTo(0)
      setPosition(0)
    }
    else carouselRef.current.slideNext()
  }

  const goPrev = () => {
    if (position > 0) {
      setPosition(prev => prev - 1)
    }
    carouselRef.current.slidePrev()
  }

  return (
    <>
      <Title component='h2' gutterBottom>{title}</Title>
      <ListContentContainer direction='row'>
        <DarkOverlay opacity='0' margin='0 -50px 0 0' className='darkOverlay' direction='column' justifyContent='center' alignItems='center' onClick={goPrev}>
          <IconButton>
            <ArrowBackward className='arrow' />
          </IconButton>
        </DarkOverlay>
        <Carousel ref={carouselRef}
          sx={{ width: '120%' }}
          outerSpacing={50}
          itemsToShow={items} pagination={false} enableSwipe={swipe}>
          {arrOfCards.map(card => card)}
        </Carousel>
        <DarkOverlay opacity='0' className='darkOverlay' margin='0 0 0 -50px' direction='column' justifyContent='center' alignItems='center' onClick={goNext}>
          <IconButton >
            <ArrowForward className='arrow' />
          </IconButton>
        </DarkOverlay>
      </ListContentContainer>
    </>
  )
}

export default ListContent