import React from 'react'
import styled from "styled-components";
import Typography from '@mui/material/Typography';

// Sytles
export const StyledLogo = styled(Typography)`
&&{
font-weight: normal;
color: red;
text-transform: uppercase;
font-family: 'Bebas Neue';
font-size: 2em;
min-width: 2em;
}
`

const Logo = ({ children }) => {
  return (
    <StyledLogo>{children}</StyledLogo>
  )
}

export default Logo