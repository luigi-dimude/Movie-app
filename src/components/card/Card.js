import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useDispatch, useSelector } from "react-redux";
import { addToList, removeFromList } from "../../redux/myListSlice";
import axios from "axios";
import { Link as Lnk } from "react-router-dom";

// ───────────────────────────────
// Styled Components
// ───────────────────────────────

const StyledCard = styled(Card)`
  && {
    position: relative;
    overflow: hidden;
    background-color: #181818;
    color: #fff;
    width: 15em;
    height: 25em;
    border-radius: 8px;
    cursor: pointer;
    transition: box-shadow 0.4s ease;

    &:hover {
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6);
    }

    &:hover img {
      transform: scale(1.1);
    }

    &:hover .info {
      opacity: 1;
      transform: translateY(0);
    }

    @media screen and (max-width: 1359px) {
      width: 13em;
    }
  }
`;

const StyledMedia = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
  transition: transform 0.4s ease;
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
`;

const Info = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.95),
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.2)
  );
  backdrop-filter: blur(4px);
  color: white;
  opacity: 0;
  transform: translateY(100%) translateZ(0);
  will-change: transform, opacity;
  transition: transform 0.4s ease, opacity 0.4s ease;
`;

const Title = styled(Typography)`
  && {
    font-size: 1rem;
    font-weight: 600;
    margin: 0;
  }
`;

const Subtitle = styled(Typography)`
  && {
    font-size: 0.85rem;
    opacity: 0.8;
    margin-top: 0.25rem;
  }
`;

const Separator = styled(FiberManualRecordIcon)`
  && {
    font-size: 0.4em;
    color: #888;
    margin: 0 0.4rem;
  }
`;

const Link = styled(Lnk)`
  && {
    font-size: 0.8rem;
    text-transform: capitalize;
    text-decoration: underline;
    color: #fff;
    margin-right: 0.75rem;

    &.disableBtn {
      pointer-events: none;
      color: gray;
      text-decoration: none;
    }
  }
`;

// ───────────────────────────────
// Component
// ───────────────────────────────

export default function MediaCard({ src, info }) {
  const [added, setAdded] = useState(false);
  const titles = useSelector((state) => state.myList.titles);
  const dispatch = useDispatch();
  const API_KEY = "f9ec8bb0";

  useEffect(() => {
    const check = titles.find((ele) => ele.imdbID === info.id);
    setAdded(!!check);
  }, [titles, info.id]);

  const add = (e, id) => {
    e.preventDefault();
    try {
      axios
        .get(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
        .then((res) => {
          dispatch(addToList(res.data));
          setAdded(true);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const remove = (e, id) => {
    e.preventDefault();
    dispatch(removeFromList(id));
    setAdded(false);
  };



  return (
    <StyledCard elevation={4}>
      {/* <StyledMedia src={src} alt={info.Title} /> */}
      <StyledMedia
        src={src && src !== "N/A" ? src : "https://placehold.co/300x450?text=No+Poster"}
        alt={info?.Title || "No Title"}
        onError={(e) => (e.target.src = "https://placehold.co/300x450?text=No+Poster")}
      />

      <Info className="info">
        <Title>{info.Title}</Title>
        <Subtitle>
          {info.Type}
          <Separator />
          {info.Year}
        </Subtitle>
        <CardActions sx={{ padding: 0, marginTop: "0.75rem" }}>
          <Link
            onClick={(e) => {
              if (added) {
                remove(e, info.id);
              } else {
                add(e, info.id);
              }
            }}
          >
            {added ? "Remove from List" : "Add to List"}
          </Link>
          <Link to={`/title/${info.id}`}>Learn More</Link>
        </CardActions>
      </Info>
    </StyledCard>
  );
}
