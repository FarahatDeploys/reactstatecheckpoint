import { render } from "react-dom";
import "./App.css";
import React, { useState } from "react";

import Profile from "./profile";
// function ProfileRender(NameFinal, BioFinal, ImgsrcFinal, ProfessionFinal) {
//   return (
//     <>
//       <h1>{NameFinal || "Nothing to show"}</h1>
//       <h1>{BioFinal || "Nothing To show"}</h1>
//       <img src={ImgsrcFinal} alt="Nothing To Show" />
//       <h3>{ProfessionFinal || "Nothing to show"}</h3>
//     </>
//   );
// }
let HadyInstance = new Profile();
let {
  Name: NameFinal,
  Bio: BioFinal,
  Imgsrc: ImgsrcFinal,
  Profession: ProfessionFinal,
} = HadyInstance;

function App() {
  let [ButtonState, setState] = useState(false);
  function updatestate(Button) {
    Button = !ButtonState;
    setState(Button);
    console.log(Button);
    return Button;
  }

  return (
    <div className="">
      {ButtonState || (
        <div>
          <h1>{NameFinal || ButtonState}</h1>
          <h1>{BioFinal || ButtonState}</h1>
          <img src={ImgsrcFinal || ButtonState} alt="Nothing To Show" />
          <h3>{ProfessionFinal || ButtonState}</h3>
        </div>
      )}

      <button onClick={updatestate}>Show/Hide</button>
    </div>
  );
}

export default App;
