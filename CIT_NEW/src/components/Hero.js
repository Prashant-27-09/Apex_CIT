import pic from "./../assets/images/Heroimage.JPG";
function Hero(props) {
  return (
    <div className="relative h-screen ">
      <img
        alt="heroimage"
        src={pic}
        className="w-full h-full object-cover bg-fixed"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="p-4 bg-white bg-opacity-50 rounded">
          <h1
            className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-blue-500 pr-5 text-5xl font-bold text-blue-800 shadow-xl"
            style={{ textShadow: "2px 2px white" }}
          >
            Welcome To CIT
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
