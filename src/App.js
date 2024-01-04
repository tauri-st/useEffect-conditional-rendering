import { useState } from "react";
import WindowWidthTracker from "./WindowWidthTracker";

const App = () => {
  const [showWindowTracker, setShowWindowTracker] = useState(true);

  const toggleTracker = () => {
    setShowWindowTracker(!showWindowTracker);
  };
  return (
    <div className="App">
      <h2> Hello there! </h2>
      {showWindowTracker && <WindowWidthTracker />}
      <button onClick={toggleTracker}>Toggle Tracker</button>
    </div>
  );
};

export default App;
