/* eslint-disable no-unused-vars */

import { useState } from "react";

import "./MovieRow.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function MovieRow({ title, items }) {
  const [scrollX, setScrollX] = useState(-400);

  const handleLeftArrow = () => {
    const scrollPosition = scrollX + Math.round(window.innerWidth / 2);
    if (scrollPosition > 0) {
      x = 0;
    }
    setScrollX(scrollPosition);
  };

  const handleRightArrow = () => {
    let scrollPosition = scrollX - Math.round(window.innerWidth / 2);
    const listW = items.results.length * 150;
    if (window.innerWidth - listW > scrollPosition) {
      scrollPosition = window.innerWidth - listW - 60;
    }
    setScrollX(scrollPosition);
  };

  return (
    <div className="movieRow">
      <h2>{title} </h2>
      <div className="movieRow--left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      <div className="movieRow--right" onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>

      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={{
            marginLeft: scrollX,
            width: items.results.length * 150,
          }}
        >
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className="movieRow--item">
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
