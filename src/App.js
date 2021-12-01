import React, {useEffect, useState} from 'react'
import Tmdb from './Tmdb'

export default function App() {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
// getting all the listStyle:
let list = await Tmdb.getHomeList()
console.log(list);
setMovieList(list)    }

    loadAll();
  }, [])

  return (
    <div className="page">
      


    </div>
  )
}
