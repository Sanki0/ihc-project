import base64
import os
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Get the actual directory
dir_path = os.path.dirname(os.path.realpath(__file__))
print('Current directory:', dir_path)

@app.route('/recognize', methods=['POST'])
def recognize_handler():


    # Check if the request has the 'video' field
    if 'video' not in request.files:
        return 'No video found in the request', 400

    # Get the video file from the request
    video_file = request.files['video']

    # Save the video file to a temporary location
    video_path = os.path.join(dir_path, video_file.filename)
    video_file.save(video_path)

    # Show me the location of the temporary video file on my machine
    print('Temporary video file saved at:', video_path)
    

    # Process the video file using PyTorch
    # ...
    # Call your PyTorch model and perform the necessary operations on the video

    # # Remove the temporary video file
    # os.remove(temp_video_path)

    # Return the response
    return 'Video processed successfully'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)