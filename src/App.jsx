/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/Header";
import HighlightedMovie from "./components/HighlightedMovie";
import MovieRow from "./components/MovieRow";
import Tmdb from "./Tmdb";

export default function App() {
  const [movieList, setMovieList] = useState([]);
  const [HighlightedData, setHighlightedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      // getting all the listStyle:
      const list = await Tmdb.getHomeList();

      // getting highlighted movie:
      const originals = list.filter((item) => item.slug === "originals");
      const randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1),
      );
      const chosen = originals[0].items.results[randomChosen];
      const chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
      setHighlightedData(chosenInfo);

      setMovieList(list);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />

      {HighlightedData && <HighlightedMovie item={HighlightedData} />}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        <p>
          developed by
          <span>
            <a href="https://github.com/born3am"> born3am</a>
          </span>{" "}
          - 2021
        </p>

        <p>
          Image rights reserved to
          <span>
            <a href="https://www.netflix.com"> Netflix</a>
          </span>
        </p>

        <p>
          Data source:
          <span>
            {" "}
            <a href="https://www.themoviedb.org"> TMDB</a>
          </span>
        </p>
      </footer>

      {movieList.length <= 0 && (
        <div className="loading">
          <img
            src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"
            alt="loading"
          />
        </div>
      )}
    </div>
  );
}
