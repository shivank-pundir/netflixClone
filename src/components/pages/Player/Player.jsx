import React, { useEffect, useState } from 'react'
import "./player.css"
import back_arrow_icon from "../../../assests/back_arrow_icon.png"
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../../../contexts/AuthContext'

const Player = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user, isAuthenticated } = useAuth();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjhmYzdlZTA2YThmMGUzY2RkYWMzZTk1NjVlYzgxOCIsIm5iZiI6MTc1NTUxODY0MS4zNjA5OTk4LCJzdWIiOiI2OGEzMTZiMTkzZjM0NWYyN2U2MWM1MWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.pNgqdC8lm5-xTJ25kH-_kEkY7w6g_fKATVmv6x5Y-Ow'
    }
  };

  useEffect(() => {
    // Only fetch video data if user is authenticated
    if (isAuthenticated) {
      fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        .then(res => res.json())
        .then(res => setApiData(res.results[0]))  
        .catch(err => console.error(err));
    }
  }, [isAuthenticated, id]);

  // If not authenticated, show login prompt with redirect
  if (!isAuthenticated) {
    return (
      <div className='player'>
        <img src={back_arrow_icon} alt="back" onClick={() => {navigate('/')}} />
        <div className="login-required">
          <h2>Login Required</h2>
          <p>You need to be logged in to watch this video.</p>
          <button 
            className="login-btn"
            onClick={() => navigate(`/login?redirect=/player/${id}`)}
          >
            Login to Watch
          </button>
        </div>
      </div>
    );
  }

  // If authenticated, show video player
  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="back" onClick={() => {navigate('/')}} />
      {apiData.key ? (
        <iframe
          width='90%' height='90%'
          src={`https://www.youtube.com/embed/${apiData.key}`}
          title='Video Player'
          frameBorder='0'
          allowFullScreen
        ></iframe>
      ) : (
        <div className="loading-video">
          <p>Loading video...</p>
        </div>
      )}
      <div className="player_info">
        <p>{apiData.published_at ? apiData.published_at.slice(0,10) : ''}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player;
