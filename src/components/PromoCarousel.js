import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { data } from '../data';


export default class extends React.Component {
  render() {
    return (
      <Carousel autoPlay='true'
        interval={2000}
        width='50%'
        infiniteLoop='true'
      >
        {data.map((product) =>
          <div>
            <img src={product.img} alt={product.nameProduct} />
          </div>
        )}
      </Carousel>
    );
  }
}

