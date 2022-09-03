import React from "react";
import AnimeCard from "./AnimeCard";
import TopAnime from "./TopAnime";

const MainContent = ({
  handleSearch,
  search,
  animeList,
  setSearch,
  isOpen,
  topAnime,
}) => {
  return (
    <main>
      <div className="main-head">
        {!isOpen ? (
          <form className="search-box" onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="Search for an anime..."
              required
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        ) : (
          <TopAnime topAnime={topAnime} />
        )}
      </div>
      <div className="anime-list">
        {animeList.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </main>
  );
};

export default MainContent;
