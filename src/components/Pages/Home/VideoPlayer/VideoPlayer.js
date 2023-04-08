import React from "react";
import ReactPlayer from 'react-player/lazy'

const VideoPlayer = () => {
  return (
    <div className="mx-16 flex">
      <ReactPlayer className='mx-5' url='https://www.youtube.com/watch?v=WC-g0JtEIwM&t=347s' />
      <ReactPlayer className='mx-5' url='https://www.youtube.com/watch?v=BtCGiEHzdfk&t=2966s' />
    </div>
  );
};

export default VideoPlayer;
