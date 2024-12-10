const API_KEY = import.meta.env.VITE_API_KEY;
const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

const Tmdb = {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Netflix Originals",
        items: await basicFetch(
          `/discover/tv?with_network=213?language=en-US&api_key=${API_KEY}`,
        ),
      },
      {
        slug: "trending",
        title: "People are talking about",
        items: await basicFetch(
          `/trending/movie/week?language=en-US&api_key=${API_KEY}`,
        ),
      },
      {
        slug: "top-rated",
        title: "Top Rated Movies",
        items: await basicFetch(
          `/movie/top_rated?language=en-US&api_key=${API_KEY}`,
        ),
      },
      {
        slug: "action",
        title: "Action Movies",
        items: await basicFetch(
          `/discover/movie?with_genres=28&language=en-US&api_key=${API_KEY}`,
        ),
      },
      {
        slug: "comedy",
        title: "Comedies",
        items: await basicFetch(
          `/discover/movie?with_genres=35&language=en-US&api_key=${API_KEY}`,
        ),
      },
      {
        slug: "thriller",
        title: "Thrillers",
        items: await basicFetch(
          `/discover/movie?with_genres=53&language=en-US&api_key=${API_KEY}`,
        ),
      },
      {
        slug: "science-fiction",
        title: "Science Fiction",
        items: await basicFetch(
          `/discover/movie?with_genres=878&language=en-US&api_key=${API_KEY}`,
        ),
      },
      {
        slug: "family",
        title: "Family",
        items: await basicFetch(
          `/discover/movie?with_genres=10751&language=en-US&api_key=${API_KEY}`,
        ),
      },
    ];
  },

  getMovieInfo: async (movieId, type) => {
    let movieInfo = {};
    if (type === "movie") {
      movieInfo = await basicFetch(
        `/movie/${movieId}?language=en-US&api_key=${API_KEY}`,
      );
    } else if (type === "tv") {
      movieInfo = await basicFetch(
        `/tv/${movieId}?language=en-US&api_key=${API_KEY}`,
      );
    }
    return movieInfo;
  },
};

export default Tmdb;
