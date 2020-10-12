import React from "react";
import PropTypes from "prop-types";

// SCSS
import "./Poster.scss";

// Load Images
import noImage from "../../../../assets/images/no-image.jpg";
import episode1 from "../../../../assets/images/episode1.jpg";
import episode2 from "../../../../assets/images/episode2.jpg";
import episode3 from "../../../../assets/images/episode3.jpg";
import episode4 from "../../../../assets/images/episode4.jpg";
import episode5 from "../../../../assets/images/episode5.jpg";

// Poster images taken from endpoints - Use now only in another component (Keep there here)
export const posters = {
  1: "https://m.media-amazon.com/images/M/MV5BN2Q5ZjE0NzMtNDZhZC00N2RiLWFjMjgtOGIxZGJhM2NmY2ViXkEyXkFqcGdeQXVyMjIyMTc0ODQ@._V1_SX300.jpg",
  2: "https://m.media-amazon.com/images/M/MV5BYWM2ODBmN2UtZWQ5OC00MWNjLWFhODItZmI4NDE2YjQzZjczXkEyXkFqcGdeQXVyMjI0Mjg2NzE@._V1_SX300.jpg",
  3: "https://m.media-amazon.com/images/M/MV5BYWFjYzRiZmYtNDNjNC00MTRiLWI1NGUtMDhkMTM5NDM3YjlmXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_SX300.jpg",
  4: "https://m.media-amazon.com/images/M/MV5BYjE1NDhkNTYtY2UwYi00MzQyLTlhNTUtM2NiN2Y5Mjk4MzI1XkEyXkFqcGdeQXVyNzIwNDA4NzI@._V1_SX300.jpg",
  5: "https://m.media-amazon.com/images/M/MV5BZTNiMTUxNGEtZWRkNS00ZTFlLThiYTItMDZhNzA5NDUwNDBhXkEyXkFqcGdeQXVyODc0NjQ1MTY@._V1_SX300.jpg",
};

// HD poster images ( Used in this component )
export const postersHD = {
  episode1,
  episode2,
  episode3,
  episode4,
  episode5,
};

const Poster = ({ id, title }) => {
  return (
    <div className="poster">
      <img
        src={id ? postersHD[`episode${id}`] : noImage}
        alt={title}
        className="poster__image"
      />
    </div>
  );
};

Poster.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
};

export default Poster;
