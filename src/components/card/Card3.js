import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from "styled-components";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useDispatch } from 'react-redux'
import { addToList } from '../../redux/myListSlice'
import { useNavigate, Link as Lnk } from "react-router-dom"
import { useSelector } from 'react-redux';
import axios from 'axios';


// Sytles
const TextItem = styled(Typography)`
&& {
  font-size: .85em;
  color: #777;
  
}
`

const Separator = styled(FiberManualRecordIcon)`
&& {
  font-size: .4em;
  color: #888;

  
}
`
const StyledCard = styled(Card)`
&& {
  background-color: #181818;
  color: #FFF;
  transition: all .5s ease-out;
  max-width: 15em;
  height: 100%;
/* border-radius: 8px; */
transform: scale(1);
opacity: 0.75;

& .disableBtn {
  pointer-events: none;
  color: gray;
  text-decoration: none;
}
&:hover {
  /* transform: scale(1.2); */
  opacity: 1;
}

@media screen and (max-width: 1359px) {
  max-width: 13em;
  }

}


`
const Title = styled(Typography)`
&& {
  font-size: 1em;
  font-weight: bold;

}
`
const Link = styled(Lnk)`
&& {
  font-size: .75em;
  text-transform: capitalize;
  text-decoration: underline;
  color: #FFF;
  
}
`

const StyledMedia = styled(CardMedia)`
&& {
  height: 230px;
  cursor: pointer;

  @media screen and (max-width: 1672px) {
    height: 190px;
  }
  
}
`


export default function MediaCard({ src, info }) {
  const [added, setAdded] = useState(false)
  const titles = useSelector(state => state.myList.titles)

  const dispatch = useDispatch();

  const API_KEY = 'f9ec8bb0';

  useEffect(() => {
    const check = titles.find(ele => ele.imdbID
      === info.id);
    check ? setAdded(true) : setAdded(false)
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
    <>
      <StyledCard elevation={4}>
        <StyledMedia
          component="img"
          sx={{ objectPosition: '20% 0' }}
          image={src}
          alt="green iguana"
        />

        <CardContent sx={{ paddingBottom: 0 }}>
          <Title component="h3" gutterBottom>
            {info.Title}
          </Title>
          <Breadcrumbs aria-label="breadcrumb" separator={<Separator />}>
            <TextItem>{info.Type}</TextItem>
            <TextItem>{info.Year}</TextItem>
          </Breadcrumbs>
        </CardContent>
        <CardActions>
          <Link className={added ? 'disableBtn' : ''} onClick={(e) => add(e, info.id)}>{!added ? 'Add to List' : 'Added'}</Link>
          <Link to={`/title/${info.id}`}>Learn More</Link>
        </CardActions>
      </StyledCard>
    </>
  );
}