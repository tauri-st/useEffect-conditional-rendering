import "./styles.css";
import { useState, useEffect } from "react";

const WindowWidthTracker = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const trackWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", trackWindowWidth);
  }, []);

  return <p>The window is now {windowWidth}px wide!</p>;
};

export default WindowWidthTracker;
