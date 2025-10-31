import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Container from '@mui/material/Container';
import { useSelector, useDispatch } from 'react-redux'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card from '../components/card/Card';
import { addToList } from '../redux/myListSlice'
import { Link as Lnk } from "react-router-dom"


const Image = styled.img`
&&{
width: 100%;
height: 100%;
border-radius: 8px;
object-fit: cover;
transition: all .1s ease-in;
cursor: pointer;
border: 7px solid #e5e5e5;
width: 90%;
height: 90%;

@media screen and (max-width: 1672px) {
  width: 80%;
height: 80%;
} 
}
`

const Link = styled(Lnk)`
&& {
  font-size: 1.2rem;
  text-transform: capitalize;
  text-decoration: underline;
  color: #FFF;
  margin: 2rem 0;


  @media screen and (max-width: 800px) {
    display: block;
  }
  
}
`


const StyledWrapper = styled(Container)`
margin-top: 5vh;
margin-top: 5%;
& .disableBtn {
  pointer-events: none;
  color: gray;
  text-decoration: none;
}
`

const Heading = styled(Typography)`

&& {
  color: #FFF;
text-transform: capitalize;
font-weight: 600;
font-size: 3em;

@media screen and (max-width: 560px) {
  font-size: 2.5em;
}
@media screen and (max-width: 383px) {
  font-size: 2em;
}
}

`


const Title = () => {

  let { title } = useParams();
  const API_KEY = 'f9ec8bb0';
  const OMDB_API = `https://www.omdbapi.com/?i=${title}&apikey=${API_KEY}`;

  const [foundTitle, setFoundTitle] = useState({})
  const [added, setAdded] = useState(false)
  const titles = useSelector(state => state.myList.titles)
  const dispatch = useDispatch();



  useEffect(() => {
    try {
      axios.get(OMDB_API).then((res) => {
        const result = res.data;
        setFoundTitle(foundTitle => ({
          ...foundTitle,
          ...result
        }))

        const check = titles.find(ele => ele.imdbID
          === result.imdbID);
        check ? setAdded(true) : setAdded(false)

      });
    }
    catch (err) {
      console.log(err)
    }
  }, [])

  const add = (e, id) => {
    e.preventDefault();
    try {

      axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`).then((res) => {
        const title = res.data;
        dispatch(addToList(title))
        setAdded(true)
      });
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <StyledWrapper maxWidth="lg">
      <Grid container columnSpacing={20}>
        <Grid item xs={12} md={6}>
          <Stack direction='column' justifyContent='center' alignItems='center'>
            <Image src={foundTitle.Poster} />
            <Link className={added ? 'disableBtn' : ''} onClick={(e) => add(e, foundTitle.imdbID)}>{!added ? 'Add to List' : 'Added'}</Link>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} >
          <Heading component='h1' variant='h2' gutterBottom>
            {foundTitle?.Title}
          </Heading>
          <Stack direction='flex' alignItems='center' sx={{ marginBottom: 2 }}>
            <Typography variant='subtitle1' sx={{ color: '#FFF', textTransform: 'capitalize', marginRight: 2 }}>
              <span style={{ fontWeight: 'bold' }}>Released: </span>{foundTitle.Released}
            </Typography>
            <Typography variant='subtitle1' sx={{ color: '#FFF', textTransform: 'capitalize', background: '#FF0000', padding: 1, borderRadius: 2 }}>
              <span style={{ fontWeight: 'bold', }}>Rated: </span>{foundTitle.Rated}
            </Typography>
            <Typography variant='subtitle1' sx={{ color: '#FFF', textTransform: 'capitalize', marginLeft: 2 }}>
              <span style={{ fontWeight: 'bold' }}>Year: </span>{foundTitle.Year}
            </Typography>

          </Stack>
          <Typography variant='subtitle1' sx={{ color: '#FFF', textTransform: 'capitalize', background: '#444', padding: 1, display: 'inline-block', marginBottom: 2 }} >
            <span style={{ fontWeight: 'bold', }}>Genre: </span>{foundTitle.Genre}
          </Typography>
          <Typography variant='subtitle1' sx={{ color: '#FFF', textTransform: 'capitalize', marginBottom: 2 }}>
            <span style={{ fontWeight: 'bold', }}>Writer: </span>{foundTitle.Writer}
          </Typography>
          <Typography variant='subtitle1' sx={{ color: '#FFF', textTransform: 'capitalize', marginBottom: 2 }}>
            <span style={{ fontWeight: 'bold', }}>Acotors: </span>{foundTitle.Actors}
          </Typography>
          <Typography variant='subtitle1' sx={{ color: '#FFF', textTransform: 'capitalize', marginBottom: 2 }}>
            <span style={{ fontWeight: 'bold', }}>Plot: </span>{foundTitle.Plot}
          </Typography>
          <Typography variant='subtitle1' sx={{ color: '#888', textTransform: 'capitalize', marginBottom: 2 }}>
            <span style={{ fontWeight: 'bold', }}>Language: </span>{foundTitle.Language}
          </Typography>
          <Typography variant='subtitle1' sx={{ color: '#888', textTransform: 'capitalize', marginBottom: 2 }}>
            <span style={{ fontWeight: 'bold', }}>Runtime: </span>{foundTitle.Runtime}
          </Typography>
        </Grid>
      </Grid>
    </StyledWrapper >
  )
}

export default Title