import { useState } from 'react';
import './Download.css';

  const Download = () => {
  const [isDownloding, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const handleClick = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      setIsDownloaded(true);
      setTimeout(() => {
        setIsDownloaded(false);
      },1700);
    }, 2000);
  };

  return (
    <button className='Downbtn'
    disabled={isDownloding || isDownloaded}
    onClick={handleClick}>
       <span> {isDownloding
        ? "PROCESSING"
        : isDownloaded
            ? "COMPLETE"
            : "DOWNLOAD"}</span>
    </button>
  );
};
export default Download;
