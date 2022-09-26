import { Carousel } from 'antd';
import React from 'react';
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#ADD8E6',
};

const Reservation = () => (
  <Carousel autoplay>
    <div>
      <h2 style={contentStyle}>Reserver son billet en un clic avec FlyAIR! 😇 </h2>
    </div>
    <div>
      <h2 style={contentStyle}>Resrvation en ligne parfaitement sécurisée! 👌 </h2>
    </div>Z
  </Carousel>
);

export default Reservation;