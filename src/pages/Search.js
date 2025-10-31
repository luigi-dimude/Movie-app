import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import Card from '../components/card/Card';

const Search = () => {

  const titles = useSelector(state => state.titles.titles)


  const searchContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 7
  }

  return (
    <>

      <Box sx={{ flexGrow: 1, width: '100%', ...searchContainer }} >
        <Grid container columnSpacing={1} rowSpacing={5} m={2}>
          {titles && titles.map((title, index) => {
            return (
              <Grid item lg={2.4} md={4} xs={12} style={{ display: "flex", justifyContent: "center" }}>
                <Card src={title.Poster} info={{ Title: title.Title, Type: title.Type, Year: title.Year, id: title.imdbID }} />
              </Grid>
            )
          })}
        </Grid>
      </Box>

    </>
  )
}

export default Search