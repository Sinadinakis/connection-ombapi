import React, { useState, useEffect, useRef } from "react";
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
  const [episode, setEpisode] = useState({});
  const cache = useRef({});
  const url = `/?apikey=22f2250&i=tt7366338&season=1&episode=${id}`;

  const fomrtaDate = (date) => {
    let day = date.getDate();
    let month = date.getMonth() + 1; //Month from 0 to 11
    let year = date.getFullYear();
    return `${year}-${month<=9 ? '0' + month : month}-${day <= 9 ? '0' + day : day}`;
  }


  useEffect(() => {
    if (id) {
      const fetchEpisode = async () => {
        // Use cache to avoid fetching the same api more than ones
        if (cache.current[url]) {
          const data = cache.current[url];
          setEpisode(data);
        } else {
          await axios.get(url).then((res) => {
            setEpisode(res.data);
            cache.current[url] = { ...res.data, title, id };
          });
        }
      };
      fetchEpisode();
    }
  }, [id]);

  // Check if there is an id
  if (id) {
    return (
      <div className="info">
        <div className="info__title">
          <div className="info__title-header">
            Episode {id} - {fomrtaDate(new Date(episode.Released))}
          </div>
          <div className="info__title-rating">
            <Image
              url={star}
              title="rating-imdb"
              styles={{ width: "30px", height: "30px", marginRight: "17px" }}
            />
            <span>
              <b>{episode.Ratings && episode.imdbRating}</b>/10
            </span>
          </div>
        </div>
        <div className="info__content">
          <h2>{title ?? "Sadly - There is no title"}</h2>
          <p>{episode.Plot}</p>
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
