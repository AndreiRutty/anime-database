import React from "react";

const Sidebar = ({ topAnime }) => {
  return (
    <aside>
      <nav>
        <h3>Top Anime</h3>
        <a href="#" target="_blank" rel="noreferrer">
          Attack on Titan
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          One Punch Man
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          Sword Art Online
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          Naruto
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
