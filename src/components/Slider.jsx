import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import { sliderProducts } from "../backend/db/slider";
import "./slider.css"
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <div className="Container">
      <div className="Arrow" direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </div>
      <div className="Wrapper" slideIndex={slideIndex}>
        {sliderProducts.map((item) => (
          <div className="Slide" bg={item.bg} key={item.id}>
            <div className="ImgContainer">
              <img src={item.img} />
            </div>
            <div className="InfoContainer">
              <h1 className="TitleBox"> {item.title} </h1>
              <h2 className="Desc"> {item.desc} </h2>
              <button className="Button">SHOP NOW</button>
            </div>
          </div>
        ))}
        ;
      </div>
      <div className="Arrow" direction="right" onClick={() => handleClick()}>
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default Slider;
