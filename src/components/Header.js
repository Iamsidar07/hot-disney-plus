import React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, IconButton } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setSignOut, setUser } from "../features/movieSlice";
import { auth, provider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const signIn=()=>{
    signInWithPopup(auth,provider).then((result)=>{
      // user created 
     
      dispatch(setUser({
        name:result.user.displayName,
        profileImage:result.user.photoURL,
        email:result.user.email,
        uid:result.user.uid,
      }))

    })
  }
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(setSignOut());
        navigate("/login")
      })
      .catch((error) => {
        // An error happened.
        alert(error.message);
      });
  };
  return (
    <Nav>
      <Link to={"/"}>
        <Logo src="images/logo.svg" />
      </Link>

      {
        user? 
        <> <NaveMenu>
        <a href="#">
          <img src="images/home-icon.svg" alt="" />
          <span>Home</span>
        </a>
        <a href="#">
          <img src="images/search-icon.svg" alt="" />
          <span>search</span>
        </a>
        <a href="#">
          <img src="images/movie-icon.svg" alt="" />
          <span>movie</span>
        </a>
        <a href="#">
          <img src="images/original-icon.svg" alt="" />
          <span>original</span>
        </a>
        <a href="#">
          <img src="images/series-icon.svg" alt="" />
          <span>series</span>
        </a>
        <a href="#">
          <img src="images/watchlist-icon.svg" alt="" />
          <span>watchlist</span>
        </a>
      </NaveMenu>
       <p style={{
         color:"white"
       }}>Hello,{user?.name}</p>
      <IconButton onClick={handleSignOut}>
        <Avatar src={user?.profileImage} />
      </IconButton>
</>: <h1 onClick={signIn} style={{
  color:"white",
  cursor:"pointer",
  padding:"7px 15px",
  border:"2px solid white",
  borderRadius:"10px"
}}>login</h1>
      }

     
      {/* <ProfilePicture src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg/220px-Bonnet_macaque_%28Macaca_radiata%29_Photograph_By_Shantanu_Kuveskar.jpg" /> */}
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  padding: 5px 10px;
  display: flex;
  overflow-x: hidden;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 60px;
`;
const NaveMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding-right: 10px;
    span {
      font-size: 12px;
      letter-spacing: 2px;
      text-transform: capitalize;
      position: relative;
      &:after {
        content: "";
        height: 3px;
        background: red;
        position: absolute;
        right: 0;
        left: 0;
        bottom: -5px;
        opacity: 0;
        tranform: scaleX(0);
        transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1) 0.14s;
      }
    }
    &:hover {
      span:after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
    img {
      width: 20px;
    }
  }
  @media screen and (max-width: 757px) {
    display: none;
  }
`;
const ProfilePicture = styled.img`
  width: 40px;
  cursor: pointer;
  height: 40px;
  border-radius: 5px;
  border: 2px solid pink;
`;

const BurgerMenu = styled.img``;
const AccountIcon = styled(AccountCircleIcon)`
  color: white;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: gray;
  }
`;
