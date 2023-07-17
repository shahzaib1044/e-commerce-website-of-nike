import React, { useState, useEffect } from "react";
import home1 from "./home1.jpg";
import home2 from "./home2.jpg";
import home3 from "./home3.jpg";

const images = [home1, home2, home3];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "calc(100vh - 100px)", // Adjust the value based on your header and footer height
    position: "relative",
    marginTop: "0px", // Adjust the value based on your header height
    marginBottom: "50px", // Adjust the value based on your footer height
  };

  const imageStyle = {
    width: "100%", // Adjust the desired width
    height: "auto", // Adjust the desired height or remove this line to maintain the aspect ratio
    objectFit: "contain",
  };

  const arrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "2rem",
    cursor: "pointer",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "0.5rem",
    
  };

  const buyNowButtonStyle = {
    position: "absolute",
    bottom: "1rem",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "0.75rem 1.5rem",
    fontSize: "1.25rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    backgroundColor: "#e50914",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    textDecoration: "none",
  };

  const handleForwardClick = () => {
    const currentIndex = images.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImage(images[nextIndex]);
  };

  const handleBackwardClick = () => {
    const currentIndex = images.indexOf(currentImage);
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentImage(images[previousIndex]);
  };

  return (
    <div style={containerStyle}>
      {currentImage && (
        <>
          <img
            src={currentImage}
            alt="A random image of a home"
            style={imageStyle}
          />
          <div
            onClick={handleBackwardClick}
            style={{ ...arrowStyle, left: "1rem" }}
          >
            &#8249;
          </div>
          <div
            onClick={handleForwardClick}
            style={{ ...arrowStyle, right: "1rem" }}
          >
            &#8250;
          </div>
          <button style={buyNowButtonStyle}> <a href="/Products">Buy Now</a></button>
        </>
      )}
    </div>
  );
};

export default Home;
