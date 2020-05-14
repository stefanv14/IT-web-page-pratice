import React from 'react';

import './OurClients.css';
import Slider from "react-slick";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import OurClientsImg from '../../Assets/Images/OurClientsImg.png';

function SampleNextArrow(props) {
  const {  onClick } = props;
  return <ArrowForwardIosIcon onClick={onClick} fontSize="large" className="RespIcon1"/>
}

function SamplePrevArrow(props) {
  const {  onClick } = props;
  return <ArrowBackIosIcon onClick={onClick} fontSize="large" className="RespIcon2"/>
}

const ourClients = () => {
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
  return (
    <div className="OurClients">
      <h2 className="Heading2">Kind words from our clients</h2>
      <div className="SliderWrap">
        <Slider {...settings} className="SliderResp">
          <div>
            <div className="Img">
              <img src={OurClientsImg} alt="bla" width="16%" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloremque asperiores reprehenderit perspiciatis nihil saepe ipsa sapiente suscipit dignissimos.</p>
            <p>Yuri Markov <br /> 
                Marketing Director @
                <span>
                  FoFor
                </span>
            </p>
          </div>
          <div>
            <div className="Img">
                <img src={OurClientsImg} alt="bla" width="16%" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloremque asperiores reprehenderit perspiciatis nihil saepe ipsa sapiente suscipit dignissimos.</p>
            <p>Yuri Markov <br /> 
                Marketing Director @
                <span>
                  FoFor
                </span>
            </p>
          </div>
          <div>
            <div className="Img">
              <img src={OurClientsImg} alt="bla" width="16%" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio doloremque asperiores reprehenderit perspiciatis nihil saepe ipsa sapiente suscipit dignissimos.</p>
            <p>Yuri Markov <br /> 
                Marketing Director @
                <span>
                  FoFor
                </span>
            </p>
          </div>
        </Slider>
      </div>
      <p className="AlignCenter">
        <button className="Link">
          Learn more
        </button>
      </p>
    </div>
  )
}

export default ourClients;