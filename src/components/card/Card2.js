import React, { useState } from 'react'
import styled from "styled-components";
import Typography from '@mui/material/Typography';
import Card4 from './Card4'


const Container = styled.div`
width: 20em;
  height: 25em;
position: relative;
`
const Image = styled.img`
&&{
width: 200px;
height: 81%;
object-fit: cover;
position: absolute;
top: 0;
right: 0;


@media screen and (max-width: 1666px) {
  width: 187px;
    height: 69%;
} 

}
`
const BigNumber = styled(Typography)`
&& {
  font-weight: bold;
    font-size: 23em;
    color: #000;
    text-shadow: -7px -7px 0 #595959, 7px -7px 0 #595959, -7px 7px 0 #595959, 7px 7px 0 #595959;
    position: absolute;
    bottom: 0;
    left: 6px;
    top: -56px;

    @media screen and (max-width: 1666px) {
      font-size: 20em;

} 
  

}

`

const BigNumber2 = styled(Typography)`
&& {
  font-weight: bold;
  font-size: 23em;
    color: #000;
    text-shadow: -7px -7px 0 #595959, 7px -7px 0 #595959, -7px 7px 0 #595959, 7px 7px 0 #595959;
    position: absolute;
    bottom: 0;
    left: -71px;
    top: -42px;
    letter-spacing: -47px;

    @media screen and (max-width: 1666px) {
      font-size: 20em;

} 

  
}
`;

const Box = styled.div`
&&{
transition: all .1s ease-in;

&.fadeOut {
  transform: scale(.5) !important;
  opacity: .2;
}
}
`;

const Card2 = ({ number = 1, src, info }) => {
  const [isHovered, setIsHovered] = useState(false)

  let hoverEffect

  const mouseenter = (e) => {
    hoverEffect = setTimeout(() => {
      setIsHovered(true)
    }, 400)

  }

  const mouseLeave = (e) => {
    clearTimeout(hoverEffect);

    setTimeout(() => {
      setIsHovered(false)
    }, 300)
  }

  const card1 = (<Container onMouseEnter={mouseenter}>
    {number <= 9 ? <BigNumber variant='h2'>{number}</BigNumber> : <BigNumber2 variant='h2'>{number}</BigNumber2>}
    <Image src={src} alt="" />
  </Container>)

  const card2 = (<div onMouseLeave={mouseLeave}>
    <Box >
      <Card4 src={src} alt="" info={info} />
    </Box>
  </div>)


  return (
    <>
      {!isHovered ? card1 : card2}
    </>

  )
}

export default Card2