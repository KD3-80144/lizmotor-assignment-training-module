import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

function VideoLibrary() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/videos')
      .then(response => {
        console.log('Fetched videos:', response.data);
        setVideos(response.data);
      })
      .catch(error => console.error('Error fetching video library:', error));
  }, []);

  return (
    <div className="container">
      <div className="innerContainer">
        <h1>Video Library</h1>
        <ul className="list">
          {videos.map(video => (
            <li key={video._id} className="listItem">
              <Link to={`/video/${video._id}`} className="link">{video.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default VideoLibrary;
