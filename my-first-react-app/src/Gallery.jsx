import { useState } from "react";
import { imageData } from "./image_data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";

function Gallery() {
  const [index, setIndex] = useState(0);
  let hasPrev = index > 0;
  let hasNext = index < imageData.length - 1;

  function handleClickNext() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  function handleClickPrev() {
    if (hasPrev) {
      setIndex(index - 1);
    } else {
      setIndex(imageData.length - 1);
    }
  }

  function handleClickPreview(imageindex) {
    setIndex(imageindex);
  }

  let Heroimage = imageData[index];

  const images = imageData.map((image, imageindex) => (
    <div
      key={imageindex}
      onClick={() => handleClickPreview(imageindex)}
      className="imagescroll"
    >
      <img src={image} alt="" />
    </div>
  ));

  return (
    <div id="mz-gallery">
      <div className="gallery-container">
        <div className="hero-image">
          <button
            className="prev-button"
            onClick={handleClickPrev}
            disabled={!hasPrev}
          >
            <FontAwesomeIcon size="2x" icon={faChevronCircleLeft} />
          </button>
          <img src={Heroimage} alt="" />
          <button
            className="next-button"
            onClick={handleClickNext}
            disabled={!hasNext}
          >
            <FontAwesomeIcon size="2x" icon={faChevronCircleRight} />
          </button>
        </div>
        <div className="imageScroller">{images}</div>
      </div>
    </div>
  );
}

export default Gallery;
