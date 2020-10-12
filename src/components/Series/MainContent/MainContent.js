import React, { useRef } from "react";
import PropTypes from "prop-types";

// Components
import Slider from "../../../UI/Slider/Slider";
import Image from "../../../UI/Image";

// CSS
import "./MainContent.scss";

// Images
import arrowLeft from "../../../assets/icons/left-arrow.png";
import arrowRight from "../../../assets/icons/right-arrow.png";

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
        <p>Season {data.Season}</p>
        <h1>{data.Title}</h1>
      </div>
      <div className="content">
        <div className="content__images" ref={inputSlider}>
          {sliderEpisodes}
        </div>
        <div className="content__buttons">
          <button id="prev" onClick={perviousButtonHandler}>
            <Image url={arrowLeft} styles={{ width: "30px", height: "30px" }} />
          </button>
          <button id="next" onClick={nextButtonHandler}>
            <Image
              url={arrowRight}
              styles={{ width: "30px", height: "30px" }}
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
