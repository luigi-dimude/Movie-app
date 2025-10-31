import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  Toolbar,
  Typography,
  Button,
  Stack,
  TextField,
  InputAdornment,
  Box,
  makeStyles
} from "@mui/material";
// import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { setTitles } from '../../../redux/searchSlice'
import styled from "styled-components";
import Logo from '../../layout/logo/Logo'
import { useNavigate, Link as Lnk } from "react-router-dom"


const StyledList = styled(List)`
background-color: #181818;
`
const StyledToolBar = styled(Toolbar)`
background-color: #181818;
display: flex;
justify-content: space-between;
color: #FFF;
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

export const NavLinks = styled(Button)`
&&{
color: #e5e5e5;
font-size: .95em;
text-transform: capitalize;
&:hover {
  color: #fff;
}

}
`
const StyledStack = styled(Stack)`
&& {
  width: 170px;
  transition: all .5s ease-in;

  &:hover {
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




function DrawerComponent() {

  const [openDrawer, setOpenDrawer] = useState(false);
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
    <>
      <Drawer
        anchor="top"
        sx={{ color: "#595959", }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <StyledToolBar>
          <Logo>I-flix</Logo>
          <CloseIcon sx={{ cursor: 'pointer' }} onClick={() => setOpenDrawer(false)} />
        </StyledToolBar>
        <StyledList>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/">Home</Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <Divider />
          <ListItem>
            <ListItemText>
              <Link to="/my-list">My List</Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Link style={{ display: 'inline-block' }} to="/">Login</Link>
              <Link style={{ display: 'inline-block' }} to="/">Register</Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText>
              <Box sx={{ width: 250 }}>
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
            </ListItemText>
          </ListItem>
        </StyledList>

      </Drawer>
      <IconButton
        sx={{ color: '#FFF' }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}

export default DrawerComponent;