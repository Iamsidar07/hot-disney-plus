import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GroupIcon from "@material-ui/icons/Group";
import AddIcon from "@material-ui/icons/Add";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import { doc, onSnapshot } from "firebase/firestore";
import db from "../firebase";
import { useNavigate, useParams } from "react-router-dom";
import { IconButton } from "@material-ui/core";

function Detail() {
  const [detail, setDetail] = useState();
  let { movieId } = useParams();
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "movies", movieId), (doc) => {
      setDetail(doc.data());
    });
  }, []);

  return (
    <>
      {detail && (
        <Container>
          <Background>{<img src={detail?.poster} alt="" />}</Background>

          <Zoom clear>
            <Controls>
              <PlayButton>
                <PlayArrowIcon /> <p>Play</p>
              </PlayButton>

              <TrailerButton>
                <PlayArrowIcon /> <p>Trailer</p>
              </TrailerButton>

              <IconButton>
                <AddIcon />
              </IconButton>
              <IconButton>
                <GroupIcon />
              </IconButton>
            </Controls>
          </Zoom>
          <Slide left>
            <SubTitle>
              <p>{detail?.title}</p>
            </SubTitle>
            <MovieDescription>
              <p>{detail?.description}</p>
            </MovieDescription>
          </Slide>
        </Container>
      )}
    </>
  );
}

export default Detail;
const Container = styled.div`
  min-height: calc(100vh - 60px);
  padding: 20px;
  cursor: pointer;
  position: relative;
  .MuiIconButton-root {
    background: black;
    color: white;
    margin: 0 5px;
    transition: all 200ms ease-in;
    &:hover {
      transform: scale(1.1);
      background-color: #2a2a72;
      background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
    }
  }
`;
const Background = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  z-index: -1;
  opacity: 0.89;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const subTitle = styled.div`
  min-height: 170px;
  height: 30vh;
  width: 35vw;
  color: white;
  min-width: 200px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.div`
  text-transform: uppercase;
  width: 100px;
  display: flex;
  background: white;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  transition: all 200ms ease-in;
  font-weight: bolder;
  &:hover {
    transform: scale(1.04);
    background: black;
    color: white;
  }
`;
const TrailerButton = styled(PlayButton)`
  background: gray;
  color: white;
  &:hover {
    background: gray;
    color: black;
  }
`;

const SubTitle = styled.div`
  padding-top: 3%;
  font-weight: bolder;
  color: white;
  max-width: 70%;
  letter-spacing: 2px;
  @media only screen and (max-width: 510px) {
    max-width: 400px;
  }
`;

const MovieDescription = styled.div`
  padding-top: 2%;
  letter-spacing: 2px;
  max-width: 75%;
  color: white;
  @media only screen and (max-width: 510px) {
    max-width: 480px;
  }
`;
