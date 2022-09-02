import React from "react";
import AnimeCard from "./AnimeCard";

const MainContent = ({ handleSearch, search, animeList, setSearch }) => {
  return (
    <main>
      <div className="main-head">
        <form className="search-box" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Search for an anime..."
            required
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
      <div className="anime-list">
        {animeList.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime}/>
        ))}
      </div>
    </main>
  );
};

export default MainContent;
