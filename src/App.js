import { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const getTopAnime = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v4/top/anime`
    ).then((res) => res.json());
    const topAnimeArray = temp.data.slice(0,10)
     setTopAnime(topAnimeArray);
  };

  const fetchAnime = async (query) => {
    const temp = await fetch(
      `https://api.jikan.moe/v4/anime?q=${query}&sfw`
    ).then((res) => res.json());
    SetAnimeList(temp.data);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchAnime(search);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    getTopAnime();
  }, []);

  return (
    <div className="App">
      <Header toggle={toggle} isOpen={isOpen} />
      <div className="content-wrap">
        <Sidebar topAnime={topAnime} />
        <MainContent
          handleSearch={handleSearch}
          search={search}
          animeList={animeList}
          setSearch={setSearch}
          isOpen={isOpen}
          topAnime={topAnime}
        />
      </div>
    </div>
  );
}

export default App;
