import { useState } from "react";
import { dataBaby } from './dataBaby';
import { dataToddler } from './dataToddler';
import { dataPreschool } from './dataPreschool';
import Carousel from "./Carousel";
import './App.css';


function App() {

  const [visible, setVisible] = useState(true);

  const removeAll = () => {
    setVisible((allCarousels) => !allCarousels);
  };

  return (

    <div>

      <div className="h1Style">
        <h1>Take a glance at some ideas to keep your little one busy!</h1>
      </div>

      <div>
        {visible && (

          <div className="allThreeCarousels">

            <Carousel data={ dataBaby } ageGroup="1-2" />
            <Carousel data={ dataToddler } ageGroup="2-3" />
            <Carousel data={ dataPreschool } ageGroup="3-5" />

          </div>
        )}
      </div>

      <div className="removeAllBtnPosition">
        <button onClick={removeAll} className="removeAll">
          {visible ? "Remove all" : "Return all age categories"}
        </button>
      </div>

      </div>
  );
}

export default App;
