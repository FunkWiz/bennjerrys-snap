import React, { useState } from "react";
import WhatsappContainer from "./containers/WhatsappContainer";
import Facebook from "./components/Facebook";
import Loader from "./components/Loader";

const stageMap = {
  loader: Loader,
  start: Facebook,
  whatsapp: WhatsappContainer
};

function App() {
  const [stage, setStage] = useState("start");
  const handleNextStage = nextStage => {
    setStage(nextStage);
  };

  const StageComponent = stageMap[stage];
  return (
    <div className="App">
      <StageComponent onNext={handleNextStage} />
    </div>
  );
}

export default App;
