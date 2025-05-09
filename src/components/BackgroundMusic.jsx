import { useState, useEffect } from 'react';
import { FaMusic, FaVolumeMute } from 'react-icons/fa';

const BackgroundMusic = () => {
  const [audio] = useState(new Audio('/music/perfect.mp3'));
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    audio.loop = true;
    audio.volume = 0.4; // Set initial volume to 40%

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
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
      <span className={`text-white text-sm font-medium ${isPlaying ? 'opacity-100' : 'opacity-70'}`}>
        {isPlaying ? 'Music On' : 'Music Off'}
      </span>
      <button
        onClick={togglePlay}
        className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
          isPlaying 
            ? 'bg-green-500 hover:bg-green-600' 
            : 'bg-tertiary hover:bg-secondary'
        }`}
        title={isPlaying ? 'Turn music off' : 'Turn music on'}
      >
        {isPlaying ? <FaVolumeMute size={24} className="text-white" /> : <FaMusic size={24} className="text-white" />}
      </button>
    </div>
  );
};

export default BackgroundMusic;