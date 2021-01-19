import React, { useState } from 'react';
import PhotoCameraRoundedIcon from "@material-ui/icons/PhotoCameraRounded";

function Camera() {
  const [source, setSource] = useState("");

  const handleCapture = (target) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        setSource(newUrl);
      }
    }
  };

  return (
    <div >
      <h5>사진 올리기</h5>
      { source && 
        <video 
          controls width="250"
          src={source}
          type="video/webm"
          alt={"snap"}
          autoPlay="true"
        > 
          Sorry, your browser doesn't support embedded videos.
        </video> }
      <input
        accept="video/*"
        id="icon-button-file"
        type="file"
        capture="environment"
        onChange={(e) => handleCapture(e.target)}
      />
      <label htmlFor="icon-button-file" component="span">
          <PhotoCameraRoundedIcon fontSize="large" color="primary" />
      </label>
    </div>
  );
}

export default Camera;