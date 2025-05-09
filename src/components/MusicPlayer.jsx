import { useState, useEffect } from 'react';
import { FaMusic, FaVolumeMute } from 'react-icons/fa';

const MusicPlayer = () => {
  const [audio] = useState(new Audio('/music/perfect.mp3'));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audio.loop = true;
    audio.volume = 0.4;

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-5 right-24 z-50 flex items-center gap-2">
      <button
        onClick={togglePlay}
        className={`flex items-center justify-center w-10 h-10 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
          isPlaying 
            ? 'bg-green-500 hover:bg-green-600' 
            : 'bg-tertiary hover:bg-secondary'
        }`}
        title={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? <FaVolumeMute size={20} className="text-white" /> : <FaMusic size={20} className="text-white" />}
      </button>
    </div>
  );
};

export default MusicPlayer;