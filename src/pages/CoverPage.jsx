import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import help from "../assets/Man-Woman.png";
import man from "../assets/Man.png";
import woman from "../assets/woman.png";

const CoverPage = () => {
  const homeImages = [help, man, woman];

  //state to track the index of the current image being displayed
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // state to control wether the transition effect is action is active
  const [isTransitioning, setIsTransitioning] = useState(false);

  // useEffect hook to handle the image transition logic
  useEffect(() => {
    // set up an interval to change the images 2.5secs
    const animation = setInterval(() => {
      setIsTransitioning(true); // start the transitin effect

      // after  2secs, updates the current image index and stop the transitioning effect
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => {
          // calculate the next image index (loop back to the first image if at the end)
          return (prevIndex + 1) % homeImages.length;
        });
        setIsTransitioning(false); // End the transition effect
      }, 500);
    }, 2500);
    // clean up function of setInterval when the component unmounts
    return () => {
      clearInterval(animation);
    };
  }, [homeImages.length]); // Dependency array to re-run the effect if the length of homeImages changes

  return (
    <main className="homepage-con ">
      <div className=" home-content">
        <div className="text-start home-text">
          <h1 className="m-0">
            Manage your Tasks on <span>TaskDuty</span>
          </h1>
          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus,
            sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea
            tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl
            semper porttitor. Nec accumsan.
          </p>
          <Link className="home-a" to="/tasks">
            Go to My Tasks
          </Link>
        </div>
        {/* ============ */}
        <div className="home-img">
          <img
          // Applying the chane className if transitioning is true and remoing change when its false
            className={`illu ${isTransitioning ? "change" : ""}`}
            src={homeImages[currentImageIndex]}
            alt=""
            style={{
              opacity: isTransitioning ? 0 : 1,
            transition: "opacity  0.7s ease-in-out"}}
          
          />
        </div>
      </div>
    </main>
  );
};

export default CoverPage;
