import { useState } from "react";
import Popular from "./Popular";
import Suggest from "./Suggest";


export default function FlightSwitcher() {
  const [currentComponent, setCurrentComponent] = useState("Popular");

  const toggleComponent = () => {
    setCurrentComponent((prev) =>
      prev === "Popular" ? "Suggest" : "Popular"
    );
  };

  return (
    <div>
      {currentComponent === "Popular" ? (
        <Popular onSwitch={toggleComponent} />
      ) : (
        <Suggest onSwitch={toggleComponent} />
      )}
    </div>
  );
}
