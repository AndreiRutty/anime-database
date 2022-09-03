import React from "react";

const Header = ({ toggle, isOpen }) => {
  return (
    <header>
      <h1>
        The <strong>Anime</strong> Database
      </h1>
      <div className="toggle-button" onClick={toggle}>
        {isOpen? 'CLOSE': 'Top Anime'}
      </div>
    </header>
  );
};

export default Header;
