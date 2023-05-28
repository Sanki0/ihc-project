// // create a simple web server with recognize endpoint that receives a POST request with an image and returns the recognized text.
// // The server will be running on port 8080.

// package main

// import (
// 	"bytes"
// 	"encoding/json"
// 	"fmt"
// 	"io/ioutil"
// 	"log"
// 	"net/http"
// 	"os"
// 	"path/filepath"
// )

// // RecognizeRequest is the request body for the recognize endpoint.
// type RecognizeRequest struct {
// 	Image string `json:"image"`
// }

// // RecognizeResponse is the response body for the recognize endpoint.
// type RecognizeResponse struct {
// 	Text string `json:"text"`
// }

// // RecognizeHandler is the handler for the recognize endpoint.
// func RecognizeHandler(w http.ResponseWriter, r *http.Request) {
// 	// Read request body.
// 	body, err := ioutil.ReadAll(r.Body)
// 	if err != nil {
// 		log.Println("error reading request body:", err)
// 		http.Error(w, "error reading request body", http.StatusBadRequest)
// 		return
// 	}

// 	// Parse request body.
// 	var req RecognizeRequest
// 	if err := json.Unmarshal(body, &req); err != nil {
// 		log.Println("error parsing request body:", err)
// 		http.Error(w, "error parsing request body", http.StatusBadRequest)
// 		return
// 	}

// 	// Decode image.
// 	img, err := decodeImage(req.Image)
// 	if err != nil {
// 		log.Println("error decoding image:", err)
// 		http.Error(w, "error decoding image", http.StatusBadRequest)
// 		return
// 	}

// 	// Recognize text.
// 	text, err := recognizeText(img)
// 	if err != nil {
// 		log.Println("error recognizing text:", err)
// 		http.Error(w, "error recognizing text", http.StatusInternalServerError)
// 		return
// 	}

// 	// Send response.
// 	res := RecognizeResponse{
// 		Text: text,
// 	}
// 	if err := json.NewEncoder(w).Encode(res); err != nil {
// 		log.Println("error sending response:", err)
// 		http.Error(w, "error sending response", http.StatusInternalServerError)
// 		return
// 	}
// }

// // decodeImage decodes the given base64 encoded image.
// func decodeImage(img string) ([]byte, error) {
// 	// Decode base64 image.
// 	data, err := decodeBase64(img)
// 	if err != nil {
// 		return nil, fmt.Errorf("error decoding base64 image: %v", err)
// 	}

// 	// Write image to file.
// 	f, err := os.Create(filepath.Join("tmp", "image.jpg"))
// 	if err != nil {
// 		return nil, fmt.Errorf("error creating image file: %v", err)
// 	}
// 	defer f.Close()
// 	if _, err := f.Write(data); err != nil {
// 		return nil, fmt.Errorf("error writing image file: %v", err)
// 	}

// 	// Read image file.
// 	data, err = ioutil.ReadFile(f.Name())
// 	if err != nil {
// 		return nil, fmt.Errorf("error reading image file: %v", err)
// 	}

// 	return data, nil
// }

// // recognizeText recognizes the text in the given image.
// func recognizeText(img []byte) (string, error) {
// 	// Send request to tesseract server.
// 	req, err := http.NewRequest("POST", "http://tesseract:8080/recognize", bytes.NewBuffer(img))
// 	if err != nil {
// 		return "", fmt.Errorf("error creating request: %v", err)
// 	}
// 	req.Header.Set("Content-Type", "image/jpeg")
// 	res, err := http.DefaultClient.Do(req)
// 	if err != nil {
// 		return "", fmt.Errorf("error sending request: %v", err)
// 	}
// 	defer res.Body.Close()

// 	// Read response body.
// 	body, err := ioutil.ReadAll(res.Body)
// 	if err != nil {
// 		return "", fmt.Errorf("error reading response body: %v", err)
// 	}

// 	// Parse response body.
// 	var resp RecognizeResponse
// 	if err := json.Unmarshal(body, &resp); err != nil {
// 		return "", fmt.Errorf("error parsing response body: %v", err)
// 	}

// 	return resp.Text, nil
// }

// func main() {
// 	// Create tmp directory.
// 	if err := os.MkdirAll("tmp", os.ModePerm); err != nil {
// 		log.Fatal(err)
// 	}

// 	// Register handlers.
// 	http.HandleFunc("/recognize", RecognizeHandler)

//		// Start server.
//		log.Println("starting server on port 8080")
//		log.Fatal(http.ListenAndServe(":8080", nil))
//	}
// package main

// import (
// 	"encoding/base64"
// 	"fmt"
// 	"log"
// 	"net/http"
// 	"os"
// 	"os/exec"
// )

// // RecognizeHandler handles the gesture recognition API endpoint
// func RecognizeHandler(w http.ResponseWriter, r *http.Request) {
// 	// Check if the request method is POST
// 	if r.Method != http.MethodPost {
// 		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
// 		return
// 	}

// 	// Read the image data from the request payload
// 	imageData := r.FormValue("image")

// 	// Decode the base64 image data
// 	imageBytes, err := base64.StdEncoding.DecodeString(imageData)
// 	if err != nil {
// 		http.Error(w, "Invalid image data", http.StatusBadRequest)
// 		return
// 	}

// 	// Save the image data to a file
// 	imageFile, err := os.Create("temp_image.jpg")
// 	if err != nil {
// 		http.Error(w, "Failed to save image", http.StatusInternalServerError)
// 		return
// 	}
// 	defer imageFile.Close()
// 	imageFile.Write(imageBytes)

// 	// Execute the PyTorch model script as a separate process
// 	cmd := exec.Command("python", "path/to/your/model_script.py", "temp_image.jpg")
// 	output, err := cmd.Output()
// 	if err != nil {
// 		http.Error(w, "Failed to execute model script", http.StatusInternalServerError)
// 		return
// 	}

// 	// Remove the temporary image file
// 	os.Remove("temp_image.jpg")

// 	// Send the recognition result as the response
// 	result := string(output)
// 	fmt.Fprint(w, result)
// }

// func main() {
// 	http.HandleFunc("/recognize", RecognizeHandler)

// 	// Start the server
// 	log.Println("Server started on http://localhost:8000")
// 	log.Fatal(http.ListenAndServe(":8000", nil))
// }

package main

import (
	"encoding/base64"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/exec"
	"path/filepath"
	"time"
)

// RecognizeHandler handles the gesture recognition API endpoint
func RecognizeHandler(w http.ResponseWriter, r *http.Request) {
	// Set the response header to allow cross-origin requests
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	// Check if the request method is POST
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	// Read the video data from the request payload
	videoData := r.FormValue("video")

	// Decode the base64 video data
	videoBytes, err := base64.StdEncoding.DecodeString(videoData)
	if err != nil {
		http.Error(w, "Invalid video data", http.StatusBadRequest)
		return
	}

	// Create a temporary video file
	videoFile, err := os.Create("temp_video.mp4")
	if err != nil {
		http.Error(w, "Failed to save video", http.StatusInternalServerError)
		return
	}
	defer videoFile.Close()
	videoFile.Write(videoBytes)

	// Extract frames from the video
	err = extractFrames("backend/temp_video.mp4")
	if err != nil {
		http.Error(w, "Failed to extract frames", http.StatusInternalServerError)
		fmt.Println(err)
		return
	}

	// Execute the PyTorch model script on each frame
	output, err := processFrames()
	if err != nil {
		http.Error(w, "Failed to process frames", http.StatusInternalServerError)
		return
	}

	fmt.Println("output", output)

	// Remove the temporary video file and frames
	os.Remove("backend/temp_video.mp4")
	os.RemoveAll("frames")

	fmt.Fprint(w, output)
}

// Extract frames from the video
func extractFrames(videoPath string) error {
	fmt.Println("extracting frames")
	// Get the exact video path according to the OS
	videoPath, err := filepath.Abs(videoPath)
	if err != nil {
		return err
	}

	fmt.Println("videoPath", videoPath)

	// Create a directory to store the frames
	err = os.MkdirAll("frames", os.ModePerm)
	if err != nil {
		fmt.Println("error creating frames directory")
		return err
	}
	// Execute the ffmpeg command to extract frames from the video
	cmd := exec.Command("ffmpeg", "-i", videoPath, "frames/frame%d.jpg")
	err = cmd.Run()
	if err != nil {
		fmt.Println("error extracting frames")
		fmt.Println(err)
		return err
	}
	return nil
}

// Process frames using the PyTorch model
func processFrames() (string, error) {
	files, err := os.ReadDir("frames")
	if err != nil {
		return "", err
	}

	// Create a variable to store all the output text
	var outputText string

	for _, file := range files {
		if file.IsDir() {
			continue
		}

		filePath := "frames/" + file.Name()

		// Execute the PyTorch model script on each frame and expect a text output
		cmd := exec.Command("python", "path/to/your/model_script.py", filePath)
		output, err := cmd.Output()
		if err != nil {
			return "error on frame " + file.Name(), err
		}

		// // Remove the frame
		// os.Remove(filePath)

		// Print the text output
		fmt.Println(string(output))

		// Append the text output to the variable
		outputText += string(output)

		// Simulate processing delay (replace with actual model processing time)
		time.Sleep(1 * time.Second)
	}

	// Print the final output
	fmt.Println(outputText)

	return outputText, nil
}

func main() {
	http.HandleFunc("/recognize", RecognizeHandler)

	// Start the server
	log.Println("Server started on http://localhost:8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
