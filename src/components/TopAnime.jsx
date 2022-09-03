import React from "react";
import '../styles/topanime.scss'

const TopAnime = ({ topAnime }) => {
  return (
    <div className="topanime-container">
      <nav>
        <h3>Top Anime</h3>
        {topAnime.map((anime) => (
          <a
            key={anime.mal_id}
            href={anime.url}
            target="_blank"
            rel="noreferrer"
          >
            {`${anime.rank}. ${anime.title}`}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default TopAnime;
