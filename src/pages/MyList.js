import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import Card from '../components/card/Card';
import styled from "styled-components";


const Search = () => {

  const list = useSelector(state => state.myList.titles)
  let titles = [...new Set(list)]

  const StyledBox = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1; 
    width: 100%;
  `

  return (
    <>

      <StyledBox>
        <Grid container columnSpacing={1} rowSpacing={5} m={2}>
          {titles && titles.map((title, index) => {
            return (
              <Grid item lg={2.4} md={4} xs={12} style={{ display: "flex", justifyContent: "center" }}>
                <Card src={title.Poster} info={{ Title: title.Title, Type: title.Type, Year: title.Year, id: title.imdbID }} />
              </Grid>
            )
          })}
        </Grid>
      </StyledBox>

    </>
  )
}

export default Search