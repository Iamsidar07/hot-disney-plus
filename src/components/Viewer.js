import React from "react";
import styled from "styled-components";
import Slide from "react-reveal/Slide";

function Viewer() {
  return (
    <ViewContainer>
      <Slide left>
        <Wrap>
          <img src="images/viewers-disney.png" alt="" />
        </Wrap>
        <Wrap>
          <img src="images/viewers-marvel.png" alt="" />
        </Wrap>
        <Wrap>
          <img src="images/viewers-national.png" alt="" />
        </Wrap>
        <Wrap>
          <img src="images/viewers-pixar.png" alt="" />
        </Wrap>
        <Wrap>
          <img src="images/viewers-starwars.png" alt="" />
        </Wrap>
      </Slide>
    </ViewContainer>
  );
}

export default Viewer;
const ViewContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  @media only screen and (max-width: 510px) {
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    padding: 20px;
  }

  ::-webkit-scrollbar {
    display: none;
  }

   {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
const Wrap = styled.div`
  border: 2px solid gray;
  margin: 10px 5px;
  border-radius: 10px;
  width: 100%;
  transition: all 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 2px 1px black;
  &:hover {
    border: 2px solid white;
    border-radius: 10px;
    transform: scale(1.05);
  }
  @media only screen and (max-width: 510px) {
    min-width: 100px;
  }
  img {
    cursor: pointer;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
