import { signInWithPopup } from "firebase/auth";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { setUser } from "../features/movieSlice";
import { auth, provider } from "../firebase";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      // authUser created

      dispatch(
        setUser({
          name: result.user.displayName,
          profileImage: result.user.photoURL,
          email: result.user.email,
          uid: result.user.uid,
        })
      );

      navigate("/");
    });
  };
  return (
    <LoginContainer>
      <Cta>
        <CtaLogoOne src="images/cta-logo-one.svg" />
        <SignUp onClick={signIn}>Log in now</SignUp>
        <CtaDescription>Login for the big entertainment</CtaDescription>
      </Cta>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  height:100vh;
  position: relative;
  &:before {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: "";
    background-image: url("images/login-background.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
  }
`;

const Cta = styled.div`
  padding-top: 30px;
  width: 80%;
  max-height: 1100px;
`;
const CtaLogoOne = styled.img``;

const SignUp = styled.button`
  width: 100%;
  display: block;
  margin: 0 auto;
  text-align: center;
  padding: 15px;
  background-color: #2a2a72;
  background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
  border-radius: 3px;
  color: white;
  border: none;
  cursor: pointer;
  margin: 15px auto;
  font-weight: 700;
  background-color: #2a2a72;
background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);
  max-width:500px;
  transition: all 200ms ease-in;
  border-radius:100px;
  &:hover {
    background: white;
    color: green;
  }
`;
const CtaDescription = styled.p`
  font-weight: 500;
  text-align: center;
  line-height: 1.2;
`;
