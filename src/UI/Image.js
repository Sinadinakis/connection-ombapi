import React from "react";
import PropTypes from "prop-types";

const Image = ({ url, title, styles }) => {
  return <img src={url} alt={title} style={styles} />;
};

Image.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  styles: PropTypes.object,
};

export default Image;
