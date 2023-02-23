import { useState } from "react";
import './App.css';


export default function Carousel(props) {

  const data = props.data;
  const ageGroup = props.ageGroup;
  const [photoPosition, setPhotoPosition] = useState(0);
  const {thePhotos, description} = data[photoPosition];

  const previousPhoto = () => {
    setPhotoPosition((photoPosition => {
      photoPosition --;
      if (photoPosition <0) {
        photoPosition = data.length -1;
      }
      return photoPosition;
    }))
  }

  const nextPhoto = () => {
    setPhotoPosition((photoPosition => {
      photoPosition ++;
      if (photoPosition > data.length -1) {
        photoPosition = 0
      }
      return photoPosition;
    }))
  }

  const [visible, setVisible] = useState(true);
  const removeOne = () => {
    setVisible((carousel) => !carousel)
  }


  return (
    <div>

      <div className="allThreeCarousels">

        {visible &&

          <div className="wrapper">

            <div className="container">
              <h2>Age: {ageGroup} years old</h2>
            </div>
            <div className="container">
              <button onClick={previousPhoto} className="buttonBack">Back</button>
              <img src={thePhotos} width="350px" alt="project" />
              <button onClick={nextPhoto} className="buttonNext">Next</button>
            </div>
            <div className="container">
              <p>{description}</p>
            </div>
            <div className="container">
              <button onClick={removeOne} className="removeOne">Not my age category</button>
            </div>

          </div>
        }

      </div>

    </div>
  );
}
