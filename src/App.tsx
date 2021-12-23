import "./styles.css";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ background: "#fff" }} onClick={onClick}>
      <img
        style={{ width: "40px" }}
        src="https://www.pngfind.com/pngs/m/302-3023323_arrow-pointing-to-right-comments-right-arrow-png.png"
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ background: "#fff" }} onClick={onClick}>
      <img
        style={{ width: "40px" }}
        src="https://toppng.com/uploads/preview/arrow-pointing-to-the-left-115501167743epfu1fapc.png"
      />
    </div>
  );
}

export default class App extends Component {
  render() {
    var settings = {
      className: "center",
      centerMode: true,
      centerPadding: "60px",
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      //slidesToScroll: 5,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            //slidesToScroll: 3,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            //slidesToScroll: 2,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            //slidesToScroll: 1,
            dots: true
          }
        }
      ]
    };
    return (
      <div className="App">
        <div>
          <h2> Responsive </h2>
          <Slider {...settings}>
            <div>
              <h3
                style={{
                  backgroundColor: "red",
                  minHeight: "70px",
                  color: "#fff"
                }}
              >
                1
              </h3>
            </div>
            <div>
              <h3
                style={{
                  backgroundColor: "red",
                  minHeight: "70px",
                  color: "#fff"
                }}
              >
                2
              </h3>
            </div>
            <div>
              <h3
                style={{
                  backgroundColor: "red",
                  minHeight: "70px",
                  color: "#fff"
                }}
              >
                3
              </h3>
            </div>
            <div>
              <h3
                style={{
                  backgroundColor: "red",
                  minHeight: "70px",
                  color: "#fff"
                }}
              >
                4
              </h3>
            </div>
            <div>
              <h3
                style={{
                  backgroundColor: "red",
                  minHeight: "70px",
                  color: "#fff"
                }}
              >
                5
              </h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
            <div>
              <h3>7</h3>
            </div>
            <div>
              <h3>8</h3>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
