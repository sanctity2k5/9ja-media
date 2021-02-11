import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Img1 from "../Portfolio/MicQueen1.jpeg";
import Img2 from "../Portfolio/MicQueen2.jpeg";
import Img3 from "../Portfolio/Entertainment.jpeg";
import Img4 from "../Portfolio/Sports.jpeg";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge'


function Advert(){
    
        let today = new Date();
        let options = {
            weekday:"long",
            day: "numeric",
            month:"long"
        };
        let day = today.toLocaleDateString("en-US", options);

    return(
        <div>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block Carousel"
      src= {Img1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block Carousel"
      src= {Img3}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block Carousel"
      src= {Img4}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block Carousel"
      src= {Img2}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>

<Button className = "recent" variant="success">
  Recent News <Badge variant="light">9</Badge><br/>
  {day}
</Button>
</div>


    )
}

export default Advert;
