import React, { useState } from 'react';

function VideoUploader() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('video', selectedFile);

      fetch('http://localhost:8080/recognize', {
        method: 'POST',
        body: formData
      })
        .then(response => response.text())
        .then(result => {
          // Handle the recognition result
          console.log(result);
        })
        .catch(error => {
          // Handle error
          console.error(error);
        });
    }
  };

  return (
    <div>
      <input type="file" accept="video/*" onChange={handleFileSelect} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default VideoUploader;
