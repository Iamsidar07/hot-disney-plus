import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";
import Login from "./components/Login";
import Fade from "react-reveal/Fade";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setSignOut, setUser } from "./features/movieSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(
          setUser({
            name: authUser.displayName,
            profileImage: authUser.photoURL,
            email: authUser.email,
            uid: authUser.uid,
          })
        );
      } else {
        dispatch(setSignOut());
      }
    });
  }, [dispatch]);
  return (
    <div className="app">
      <Router>
        <Fade bottom>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Home />
                </>
              }
            />

            <Route
              path="/detail/:movieId"
              element={
                <>
                  <Header />
                  <Detail />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Fade>
      </Router>
    </div>
  );
}

export default App;
