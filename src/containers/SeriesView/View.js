import React, { useState, useEffect } from "react";
import axios from "axios";
import {Helmet} from "react-helmet";

// Components
import MainContent from "../../components/Series/MainContent/MainContent";
import Poster from "../../components/Series/Aside/Poster/Poster";
import Info from "../../components/Series/Aside/Info/Info";

// SCSS
import "./View.scss";

// Image
import backgroundImg from "../../assets/images/background.jpg";

const apiKey = '22f2250'; // Api key taken from omdbapi 
const serieKey = 'tt7366338' // Chernobyl key

const View = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [postId, setPostId] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`?apikey=${apiKey}&i=${serieKey}&season=1`)
        .then((res) => {
          setData(res.data);
          setEpisodes(res.data.Episodes);
        })
        .catch(() => {
          setError(true);
        });
    };
    fetchData();
  }, []);

  const postSelectedHandler = (id) =>  setPostId(id);

  return (
    <main className="container">
       <Helmet>
          <meta charSet="utf-8" />
          <title>Chernobyl Season 1</title>
      </Helmet>
      <section
        className="content-main"
        style={{
          background: `url(${backgroundImg}) no-repeat center top`,
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
        }}
      >
        <MainContent
          data={data}
          error={error}
          postSelectedHandler={postSelectedHandler}
        />
      </section>
      <aside className="content-aside">
        <Poster id={postId} title={episodes[postId]?.Title} />
        <Info id={postId} title={episodes[postId]?.Title} />
      </aside>
    </main>
  );
};

export default View;
