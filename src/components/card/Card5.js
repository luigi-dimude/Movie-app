import React, { useState } from 'react'
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom"
import Box from '@mui/material/Box';


// Sytles
const Image = styled.img`
&&{
width: 100%;
height: 100%;
border-radius: 8px;
object-fit: cover;
transition: all .1s ease-in;
cursor: pointer;

}
`;

const StyledBox = styled(Box)`

&& {
  width: 12em;
  height: 20em;

  @media screen and (max-width: 530px) {
    width: 10em;
    height: 16em;
} 

}
`


const Card5 = ({ src, info }) => {
  return (
    <Link to={`/title/${info.id}`}>
      <StyledBox>
        <Image src={src} alt={info.title} />
      </StyledBox>
    </Link>
  )
}

export default Card5

