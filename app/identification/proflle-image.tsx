import CameraComponent from "../../components/ui/profile-selfie";

const Page = () => {
  const handleCapture = (imageData: any) => {
    // Handle the captured image data here
    console.log(imageData);
  };

  return (
    <div>
      <h1>Camera Example</h1>
      <CameraComponent onCapture={handleCapture} />
    </div>
  );
};

export default Page;
