import React from 'react'
import './HighlightedMovie.css'

export default function HighlightedMovie({ item }) {

    console.log('====================================');
    console.log(item);
    console.log('====================================');

    let firstDate = new Date(item.first_air_date);
    let shortMonth = firstDate.toLocaleString('en-us', { month: 'short' }); /* Jun */

    let genres = [];

    for (let i in item.genres) {
        genres.push(item.genres[i].name);
    }




    return (
        <section className="highlighted" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`
        }} >
            <div className="highlighted--vertical">
                <div className="highlighted--horizontal">
                    <div className="highlighted--name"> {item.name} </div>
                    <div className="highlighted--info" >
                        <div className="highlighted--points"> {item.vote_average} points</div>
                        <div className="highlighted--year"> {` ${shortMonth}-${firstDate.getFullYear()}`} </div>
                        <div className="highlighted--seasons"> {item.number_of_seasons} season{item.number_of_seasons !== 1 ? "s" : ""}  </div>
                    </div>
                    <div className="highlighted--description"> {item.overview} </div>
                    <div className="highlighted--buttons">
                        <a href={`watch/${item.id} `} className="highlighted--watch-button" > &#x25b6; Watch</a>
                        <a href={`list/add/${item.id}`} className="highlighted--list-button" > + My List </a>
                    </div>

                    <div className="highlighted--genres">
                        <strong>Genres: </strong> {genres.join(', ')}
                    </div>

                </div>

            </div>


        </section>
    )
}
