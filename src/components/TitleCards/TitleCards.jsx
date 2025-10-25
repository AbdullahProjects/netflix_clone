import React, { useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'

const TitleCards = ({title, category}) => {
  const [apiData, setApiData] = useState([]);

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTEwZjFjNThiYzI4ZjVhOWVjMTBmOTNiZjFmMzUzOSIsIm5iZiI6MTc2MTMxNjcwNS4wMTEwMDAyLCJzdWIiOiI2OGZiOGY2MDZiY2VkYWExNGYzYjEwOTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._iljpzK3JFZdm8_zEuKncLwRmh9bpiePtJKQCCpDUZM'
  }
  };

  fetch(`https://api.themoviedb.org/3/movie/${category? category : 'now_playing'}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results.slice(1)))
  .catch(err => console.error(err));


  return (
    <div className='title-cards'>
      <h2>{title? title : "Popular on Netflix"}</h2>
      <div className="card-list">
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className="card-item" key={index}>
            <img src={'https://image.tmdb.org/t/p/w500' + card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards