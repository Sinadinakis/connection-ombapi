import React, { useRef } from "react";
import PropTypes from "prop-types";

// Components
import Slider from "../../../UI/Slider/Slider";
import Image from "../../../UI/Image";

// CSS
import "./MainContent.scss";

// Images
import arrowLeft from "../../../assets/icons/left-arrow.svg";
import arrowRight from "../../../assets/icons/right-arrow.svg";

const scrollOffset = 400;

const MainContent = ({ data, error, postSelectedHandler }) => {
  const inputSlider = useRef(null);

  const sliderEpisodes =
    data &&
    data.Episodes &&
    data?.Episodes.map((episode) => {
      return (
        <Slider
          key={episode.imdbID}
          id={episode.Episode}
          title={episode.Title}
          onClick={() => postSelectedHandler(episode.Episode)}
          error={error}
        />
      );
    });

  const perviousButtonHandler = () => {
    inputSlider.current.scrollLeft -= scrollOffset;
  };

  const nextButtonHandler = () => {
    inputSlider.current.scrollLeft += scrollOffset;
  };

  return (
    <>
      <div className="header">
        <div className="header__season">Season {data.Season}</div>
        <h1 className="header__title">{data.Title}</h1>
      </div>
      <div className="content">
        <div className="content__slider" ref={inputSlider}>
          {sliderEpisodes}
        </div>
        <div className="content__slider-buttons">
          <button id="prev" onClick={perviousButtonHandler}>
            <Image url={arrowLeft} styles={{ width: "28px", height: "18px" }} />
          </button>
          <button id="next" onClick={nextButtonHandler}>
            <Image
              url={arrowRight}
              styles={{ width: "28px", height: "18px" }}
            />
          </button>
        </div>
      </div>
    </>
  );
};

MainContent.propTypes = {
  data: PropTypes.object,
  error: PropTypes.bool,
  postSelectedHandler: PropTypes.func,
};

export default MainContent;
