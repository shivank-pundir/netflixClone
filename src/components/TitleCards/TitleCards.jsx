import React, { useState, useEffect } from "react";
import "./titleCards.css";
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjhmYzdlZTA2YThmMGUzY2RkYWMzZTk1NjVlYzgxOCIsIm5iZiI6MTc1NTUxODY0MS4zNjA5OTk4LCJzdWIiOiI2OGEzMTZiMTkzZjM0NWYyN2U2MWM1MWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.pNgqdC8lm5-xTJ25kH-_kEkY7w6g_fKATVmv6x5Y-Ow",
    },
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
      .then((res) => res.json())
      .then((res) => setApiData(res.results || []))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="Card-title">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list">
        {apiData.map((card, idx) => (
          <Link to={`/player/${card.id}`} key={idx} className="card">
            <img
              src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
              alt={card.title}
            />
            <p>{card.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
