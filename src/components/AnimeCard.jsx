import React from "react";
import "../styles/animecard.scss";

const AnimeCard = ({ anime }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={anime.images.jpg.image_url} alt="" />
        </div>
        <div className="card-back">
          <h3>{anime.title}</h3>
          <div className="info">
            <p>{`type: ${anime.type}`}</p>
            <p>{`episodes: ${anime.episodes}`}</p>
            <p>{`score: ${anime.score}`}</p>
            <p>{`rated: '${anime.rated}'`}</p>
            <p>{`members: ${anime.members}`}</p>
          </div>
          <a href={anime.url} target="_blank" rel="noreferrer">
            More Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
