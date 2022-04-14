import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Viewer from "./Viewer";
import Movies from "./Movies";
import db from "../firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { async } from "@firebase/util";
import { useDispatch, useSelector } from "react-redux";
import { setMovies, selectMovies } from "../features/movieSlice";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    // const q= query(collection(db,"chats"),orderBy("timestamp","desc"))
    onSnapshot(collection(db, "movies"), (snapShot) => {
      let data = snapShot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      dispatch(setMovies(data));
    });
  }, []);

  return (
    <HomeContainer>
      <ImageSlider />
      <Viewer />
      <Movies />
    </HomeContainer>
  );
}

export default Home;
const HomeContainer = styled.main`
  min-height: 100vh;
  color: white;
  padding: 0 5%;
  overflow-x: hidden;
  position: relative;
`;
