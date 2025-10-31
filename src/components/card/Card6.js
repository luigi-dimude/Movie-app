import React, { useState } from 'react'
import styled from "styled-components";
import Typography from '@mui/material/Typography';
import Card4 from './Card4'
import { useNavigate, Link } from "react-router-dom"
import Box from '@mui/material/Box';



// const Link = styled(Lnk)`
// width: 20em;
//   height: 25em;
// position: relative;
// /* background-color: #FFF; */
// `
const Image = styled.img`
&&{
width: 100%;
height: 100%;
object-fit: cover;


/* @media screen and (max-width: 1666px) {
  width: 187px;
    height: 69%;
} 
@media screen and (max-width: 1666px) {
  width: 171px;
  height: 56%;
} 
@media screen and (max-width: 476px) {
  width: 136px;
  height: 44%;
} 
@media screen and (max-width: 440px) {
  width: 167px;
  height: 56%;
}  */

}
`
const BigNumber = styled(Typography)`
&& {
  font-weight: bold;
    font-size: 13em;
    color: #000;
    text-shadow: -7px -7px 0 #d2d2d2, 7px -7px 0 #d2d2d2, -7px 7px 0 #d2d2d2, 7px 7px 0 #d2d2d2;
    position: absolute;
    bottom: 0;
    left: 40px;
    z-index: 2;
    line-height: .8;

    @media screen and (max-width: 587px) {
      font-size: 9em;
}

    /* @media screen and (max-width: 705px) {
      font-size: 9em;
      top: 80px;


}  */
/* @media screen and (max-width: 579px) {
      left: 9px;
} 

@media screen and (max-width: 476px) {
  font-size: 8em;
    top: 44px;
} 
@media screen and (max-width: 440px) {
  font-size: 11em;
  left: 95px;
}  */
  

}

`

const BigNumber2 = styled(Typography)`
&& {
  font-weight: bold;
  font-size: 12em;
    color: #000;
    text-shadow: -7px -7px 0 #d2d2d2, 7px -7px 0 #d2d2d2, -7px 7px 0 #d2d2d2, 7px 7px 0 #d2d2d2;
    position: absolute;
    bottom: 0;
    left: 40px;
    letter-spacing: -47px;
    line-height: .8;
    z-index: 2;

    @media screen and (max-width: 587px) {
      font-size: 9em;
}

    /* @media screen and (max-width: 705px) {
      font-size: 9em;
      top: 80px;
} 
    @media screen and (max-width: 579px) {
      left: 9px;
} 
@media screen and (max-width: 476px) {
  font-size: 8em;
    top: 44px;
} 
@media screen and (max-width: 439px) {
  font-size: 11em;
  left: 95px;
}  */

}
`;

const StyledContainer = styled(Box)`
  width: 20em;
  height: 17em;
  display: flex;

  @media screen and (max-width: 634px) {
  width: 18em;
  height: 16em;
} 
@media screen and (max-width: 587px) {
  width: 16em;
  height: 14em;
}
@media screen and (max-width: 533px) {
  width: 15em;
  height: 13em;
}
`
const NumberDiv = styled(Box)`
  flex: 1;
  position: relative;
`
const ImageDiv = styled(Box)`
  flex: 2;
`


const Card6 = ({ number = 1, src, info }) => {

  const card1 = (<Link to={`/title/${info.id}`}>
    <StyledContainer>
      <NumberDiv>
        {number <= 9 ? <BigNumber variant='h2'>{number}</BigNumber> : <BigNumber2 variant='h2'>{number}</BigNumber2>}
      </NumberDiv>
      <ImageDiv>
        <Image src={src} alt="" />
      </ImageDiv>
    </StyledContainer>
  </Link>)

  return (
    <>
      {card1}
    </>

  )
}

export default Card6