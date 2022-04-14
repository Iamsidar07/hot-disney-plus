import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import styled from 'styled-components';
function ImageSlider() {
    let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };
  return (
    <SliderContainer {...settings}>
        <Wrap>
            <img src="images/slider-badag.jpg" alt="" />
        </Wrap>
        <Wrap>
            <img src="images/slider-badging.jpg" alt="" />
        </Wrap>
        <Wrap>
            <img src="images/slider-scale.jpg" alt="" />
        </Wrap>
        <Wrap>
            <img src="images/slider-scales.jpg" alt="" />
        </Wrap>
       
    </SliderContainer>
  )
}

export default ImageSlider;
const SliderContainer=styled(Slider)`
margin-top:2%;
ul li button {
    &:before{
        font-size:13px;
        color:white;
    }
}
li.slick-active button:before{
    color:white;
}
.slick-list{
    overflow:visible;
}
`
const Wrap=styled.div`
color:white;
margin:0 10px;
margin:0 auto;
width:100%;
height:100%;


img{
    width:95%;
    height:100%;
    cursor:pointer;
    margin:0 auto;
    border-radius:15px;
    box-shadow:2px 3px black;
    transition-duration:0.24s;
    &:hover{
        border:2px solid white;
        border-radius:15px;
    }
}`