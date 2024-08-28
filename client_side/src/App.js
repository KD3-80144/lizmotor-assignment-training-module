import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VideoLibrary from './components/videoLibrary';
import VideoPlayer from './components/videoPlayer';
import ProgressDashboard from './components/progressDashboard';
import axios from 'axios';

function App() {
  const [videos, setVideos] = useState([]);
  const [watchedVideos, setWatchedVideos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/videos')
      .then(response => setVideos(response.data))
      .catch(error => console.error('Error fetching video library:', error));
  }, []);

  const handleVideoCompletion = (videoId) => {
    if (!watchedVideos.includes(videoId)) {
      setWatchedVideos([...watchedVideos, videoId]);
    }
  };

  return (
    <Router>
      <div>
        {/* <ProgressDashboard completed={watchedVideos.length} total={videos.length} /> */}
        <Routes>
          <Route path="/" element={<VideoLibrary videos={videos} />} />
          <Route
            path="/video/:id"
            element={<VideoPlayer videos={videos} onVideoComplete={handleVideoCompletion} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
