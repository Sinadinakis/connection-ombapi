import React, { useState, useEffect } from "react";
import axios from "axios";

// CSS
import "./Info.scss";

// Components
import Image from "../../../../UI/Image";

// Image
import star from "../../../../assets/icons/star.svg";

/**
 * @param id - id of episode
 * @param title - title of episode
 */
const Info = ({ id, title }) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        axios
          .get(`/?apikey=22f2250&i=tt7366338&season=1&episode=${id}`)
          .then((res) => {
            setPost(res.data);
          });
      };
      fetchPost();
    }
  }, [id]);

  // Check if there is an id
  if (id) {
    return (
      <div className="info">
        <div className="info__title">
          <div className="header">
            Episode {id} - {post.Released}
          </div>
          <div className="rating">
            <Image
              url={star}
              title="rating-imdb"
              styles={{ width: "30px", height: "30px", marginRight: "10px" }}
            />
            <span>
              <b>{post.Ratings && post.imdbRating}</b> / 10
            </span>
          </div>
        </div>
        <div className="info__content">
          <h2>{title}</h2>
          <p>{post.Plot}</p>
        </div>
      </div>
    );
  }

  // If there is no episode
  return (
    <div className="info">
      <div className="info__title">Please select an Episode!</div>
    </div>
  );
};

export default Info;
