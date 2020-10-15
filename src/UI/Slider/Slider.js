import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// Images
import { posters } from "../../components/Series/Aside/Poster/Poster";

// SCSS
import "./Slider.scss";

/**
 * @param id - id of episode
 * @param title - title of episode
 * @param onClick - function check we click an episode in the slider
 * @param error - boolean to show some error msg
 */
const Slider = ({ id, title, onClick, error }) => {
  const cardRef = useRef(null);

  const executeScroll = () => cardRef.current.scrollIntoView();

  if (!error) {
    return (
      <article
        className="card"
        onClick={() => {
          onClick();
          executeScroll();
        }}
      >
        <div
          className="card__image"
          ref={cardRef}
          style={{
            background: `url(${posters[id]}) no-repeat center top`,
            backgroundSize: "cover",
          }}
        >
          <div className="number-episode">{id}</div>
        </div>
        <div className="card__content">{title}</div>
      </article>
    );
  }

  return <div className="slider">Something went wrong</div>;
};

Slider.propTypes = {
  episode: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
  error: PropTypes.bool,
};

export default Slider;
