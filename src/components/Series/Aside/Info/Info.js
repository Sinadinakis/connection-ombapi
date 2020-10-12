import React, { useState, useEffect } from "react";
import axios from "axios";

// CSS
import "./Info.scss";

// Components
import Image from "../../../../UI/Image";

// Image
import star from "../../../../assets/icons/star.png";

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

  // If there is an episode return this
  if (id) {
    return (
      <div className="info">
        <div className="info__title">
          <h1>
            Episode {id} - {post.Released}
          </h1>
          <div styles={{ display: "flex" }}>
            <Image
              url={star}
              title="rating-imdb"
              styles={{ width: "20px", height: "20px", marginRight: "10px" }}
            />
            {post.Ratings && post.Ratings[0]?.Value}
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
