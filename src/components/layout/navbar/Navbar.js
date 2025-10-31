import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Text from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Logo from '../logo/Logo';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { setTitles } from '../../../redux/searchSlice'
import DrawerComponent from './Drawer';
import { useNavigate, Link as Lnk } from "react-router-dom"

// Sytles
export const StyledAppBar = styled(AppBar)`
padding: 20px 2%;

&&{
  
background-color: #141414;
background-image: linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent);

& .nav-md {
  display: flex;
}
  & .nav-sm {
  display: none;
}

@media screen and (max-width: 1000px) {
  & .nav-md {
  display: none;
}
  & .nav-sm {
  display: flex;
  justify-content: flex-end;
}
} 

}
`
export const NavLinks = styled(Button)`
&&{
color: #e5e5e5;
font-size: .95em;
text-transform: capitalize;
&:hover {
  color: #fff;
}
  &.ml {
    margin-left: 20px;
  }
  
}
`

const Input = styled(TextField)`
&& {
  background-color: #000;
  border: 1px solid #FFF;
  color: #FFF;
  padding: 6px;

  &.Mui-focused fieldset {
    border-color: white;
    color: #FFF;
  }

  &:hover fieldset {
    border-color: white;
    color: #FFF;
  }
  & input {
    color: #fff
  }
  & :focus {
    color: #fff;
  }
  & .MuiOutlinedInput-root {
    color: #FFF;
  }
  & .MuiInput-underline:after {
    border-bottom-color: transparent;
  }
}
`

const StyledStack = styled(Stack)`
&& {
  width: 70%;
  transition: all .5s ease-in;
  margin-left: 0; 
   transform-origin: left;

  &:hover {
    /* width: 400px; */
  width: 100%;


  }
}

`
const Link = styled(Lnk)`
color: #FFF;
display: block;
margin-left: 20px;
text-decoration: none;

&:hover {
  text-decoration: underline;
}
`

const Navbar = () => {
  const [title, setTitle] = useState('')
  const titles = useSelector(state => state.titles.titles)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const API_KEY = 'f9ec8bb0'

  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      const OMDB_API = `https://www.omdbapi.com/?s=${title}&apikey=${API_KEY}`

      try {
        axios.get(OMDB_API).then((res) => {
          const result = res.data.Search;
          dispatch(setTitles(result))
          console.log(titles);
          navigate('/search')
        });
      }
      catch (err) {
        console.log(err)
      }

    }
  }

  const handleChange = e => {
    setTitle(e.target.value)
  }
  return (
    <header>
      <StyledAppBar position="static" elevation={0}>
        <Toolbar>
          <Logo>I-flix</Logo>
          <Stack className='nav-md' direction='row' justifyContent='space-between' alignItems='center' sx={{ width: '100%' }}>
            <Stack direction='row' spacing={0}>
              <Link className='ml' to="/">Home</Link>
              <Link to="/my-list">My List</Link>
            </Stack>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: '600px' }}>
              <StyledStack className='styledStack'>
                <Input placeholder='Search for titles' size='small' fullWidth variant='standard' color='warning' InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.6em' }} />
                    </InputAdornment>
                  ),
                }} onKeyDown={handleSearch} onChange={handleChange} />
              </StyledStack>
            </Box>
            <Stack direction='flex' justifyContent='center' alignItems='center' >
              <Link to="/">Login</Link>
              <Link to="/">Register</Link>
            </Stack>
          </Stack>
          <Stack className='nav-sm' direction='row' justifyContent='space-between' alignItems='center' sx={{ width: '100%' }}>
            <DrawerComponent />
          </Stack>
        </Toolbar>
      </StyledAppBar>
    </header>
  )
}

export default Navbar
