import React from "react";

const Sidebar = ({ topAnime }) => {
  return (
    <aside>
      <nav>
        <h3>Top Anime</h3>
        {topAnime.map((anime) => (
          <a key={anime.mal_id} href= {anime.url} target="_blank" rel="noreferrer">
            {`${anime.rank}. ${anime.title}`}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
