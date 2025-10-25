import React, { useEffect, useState } from 'react'
import './Player.css'
import BackArrowIcon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    key: "",
    name: "",
    published_at: "",
    type: ""
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOTEwZjFjNThiYzI4ZjVhOWVjMTBmOTNiZjFmMzUzOSIsIm5iZiI6MTc2MTMxNjcwNS4wMTEwMDAyLCJzdWIiOiI2OGZiOGY2MDZiY2VkYWExNGYzYjEwOTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._iljpzK3JFZdm8_zEuKncLwRmh9bpiePtJKQCCpDUZM'
  }
};

useEffect(() => {
  setLoading(true);
  setError(null);

  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => {
    if(!res.ok) throw new Error("Failed to fetch data.")
    return res.json();
  })
  .then(res => {
    if(res.results && res.results.length > 0){
      setApiData(res.results[0])
    } else {
      setError("Something went wrong while fetching video data.");
    }
  })
  .catch(err => {
    console.error(err);
    setError("Something went wrong while fetching video data.")
  }).finally(() => setLoading(false));
}, [id])

  return (
    <div className='player'>
      <img src={BackArrowIcon} alt="" onClick={() => navigate(-1)} />
      
      {loading? 
        (<div className="loader">Loading...</div>) 
        : error?
        (<div className="error">{error}</div>)
        : (<>
              <iframe src={`https://www.youtube.com/embed/${apiData.key}`} frameborder="0" width="90%" height="90%" allowFullScreen title='Trailer Video'></iframe>
              <div className="player-info">
                <p>{apiData.published_at.slice(0,10)}</p>
                <p>{apiData.name}</p>
                <p>{apiData.type}</p>
              </div>
            </>)
      }
    </div>
  )
}

export default Player