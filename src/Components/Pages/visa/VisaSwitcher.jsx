import { useState } from "react";
import AllVisa from "./AllVisa";
import VisaSteps from "./VisaSteps";


export default function VisaSwitcher() {
  const [currentComponent, setCurrentComponent] = useState("AllVisa");

  const toggleComponent = () => {
    setCurrentComponent((prev) =>
      prev === "AllVisa" ? "VisaSteps" : "AllVisa"
    );
  };

  return (
    <div >
      {currentComponent === "VisaSteps" ? (
        <AllVisa onSwitch={toggleComponent} />
      ) : (
        <VisaSteps onSwitch={toggleComponent} />
      )}
    </div>
  );
}
