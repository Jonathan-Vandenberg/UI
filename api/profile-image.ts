// Capture and send image from front-facing mobile camera
export const captureAndSendImage = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user" },
      audio: false,
    });

    // Create a video element to display the video stream
    const video = document.createElement("video");
    video.srcObject = stream;
    video.autoplay = true;

    // Wait for the video to be loaded and ready
    await new Promise((resolve) => {
      video.addEventListener("loadedmetadata", resolve);
    });

    // Create a canvas element to draw the video frame
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw the video frame onto the canvas
    const context = canvas.getContext("2d");
    context?.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Get the image data from the canvas
    const imageData = canvas.toDataURL("image/jpeg");

    // Create a data object to send in the request body
    const data = {
      useCamera: true,
      imageData: imageData,
    };

    // Send the captured image data to the API route
    fetch("https://www.cutout.pro/api/v1/matting?mattingType=6", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        APIKEY: "e1fb48b8a9a24ea9988a01b299ead5d6",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // Process the response data
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });

    // Clean up the resources
    stream.getVideoTracks().forEach((track) => track.stop());
    video.remove();
    canvas.remove();
  } catch (error) {
    // Handle any errors related to accessing the camera
    console.error(error);
  }
};

// Call the function to capture and send the image
captureAndSendImage();
