import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { selectMovies } from "../features/movieSlice";
import { useSelector } from "react-redux";

function Movies() {
  const movies = useSelector(selectMovies);

  return (
    <Container>
      {movies && (
        <Fade left>
          <h3>Recommnded for you</h3>
          <Content right>
            {movies?.map(({ id, title, poster, video, descritpion }, index) => {
              return (
                <Wrap key={id} id={id}>
                  <Link to={`/detail/${id}`}>
                    <img src={poster} alt="" />
                  </Link>
                </Wrap>
              );
            })}
          </Content>
        </Fade>
      )}
    </Container>
  );
}

export default Movies;
const Container = styled.div`
  padding: 25px 10px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 20px;
  padding-top: 20px;
  @media only screen and (max-width:510px){
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media only screen and (max-width:410px){
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
const Wrap = styled.div`
  border: 2px solid gray;
  border-radius: 10px;
  margin:10px;
  cursor: pointer;
  overflow: hidden;
  background:transparent;
  width:100%;
  transition: all 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    border: 2px solid white;
    border-radius: 10px;
    transform: scale(1.05);
  }
`;
