import "./styles.css";
import { useState, useEffect } from "react";

const WindowWidthTracker = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const trackWindowWidth = () => {
      setWindowWidth(window.innerWidth);
      console.log(window.innerWidth);
    };

    // 1. the event listener on our window object creates a long running 
    // process that is outside the scope of our WindowWidthTracker 
    // component. It will keep on running whether the WindowWidthTracker
    // component still exists or not. And with every ‘re’-toggling of 
    // the WindowWidthTracker, we create another resize event listener 
    // attached to the window object.
    window.addEventListener("resize", trackWindowWidth);

    // 2. Add cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", trackWindowWidth);
    };
  }, []);

  return <p>The window is now {windowWidth}px wide!</p>;
};

export default WindowWidthTracker;
