import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function VideoPlayer({ videos, onVideoComplete }) {
  const { id } = useParams(); 
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchVideoData = () => {
      const video = videos.find((v) => v._id === id);
      if (video) {
        setVideoData(video);
        setLoading(false);
      } else {
        setError('Video not found');
        setLoading(false);
      }
    };

    fetchVideoData();
  }, [id, videos]);

  const handleVideoEnd = () => {
    onVideoComplete(id);

    
    const currentIndex = videos.findIndex((v) => v._id === id);
    if (currentIndex !== -1 && currentIndex + 1 < videos.length) {
      const nextVideoId = videos[currentIndex + 1]._id;
      navigate(`/video/${nextVideoId}`);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{videoData.title}</h1>
      <video
        src={videoData.url}
        controls
        autoPlay
        onLoadedMetadata={(e) => {
          const videoElement = e.target;
          const lastPlayedPosition = localStorage.getItem(`video-${id}`);
          if (lastPlayedPosition) {
            videoElement.currentTime = lastPlayedPosition;
          }
        }}
        onTimeUpdate={(e) => {
          const videoElement = e.target;
          localStorage.setItem(`video-${id}`, videoElement.currentTime);
        }}
        onEnded={handleVideoEnd} 
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
