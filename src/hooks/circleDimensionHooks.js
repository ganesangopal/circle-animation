import { useState } from "react";
import { config } from "../../config";

export const useCircleDimension = () => {
  let minWidthThreshold = config.REACT_APP_CIRCLE_MIN_WIDTH;
  let minHeightThreshold = config.REACT_APP_CIRCLE_MIN_HEIGHT;
  const [dimension, setDimension] = useState([minWidthThreshold, minHeightThreshold]);
  const [isViewPortBoundReached, setIsViewPortBoundReached] = useState(false);
  const updateDimension = (circleRef) => {
    if (isViewPortBoundReached) {
      let computedWidth = circleRef.current.clientWidth / 2;
      let computedHeight = circleRef.current.clientHeight / 2 ;
      setDimension([computedWidth, computedHeight]);
      if (computedWidth === minWidthThreshold && computedHeight === minHeightThreshold) {
        setIsViewPortBoundReached(false);
      }
    } else {
      let computedWidth = circleRef.current.clientWidth * 2;
      let computedHeight = circleRef.current.clientHeight * 2 ;
      setDimension([computedWidth, computedHeight]);
      if (computedWidth * 2 > window.innerWidth || computedHeight * 2 > window.innerHeight) {
        setIsViewPortBoundReached(true);
      }
    }
  }

  const circleResize = (circleRef) => {
    let circle = circleRef.current;
    if (circle.clientWidth > window.innerWidth || circle.clientHeight > window.innerHeight) {
      let computedWidth = circle.clientWidth / 2;
      let computedHeight = circle.clientHeight / 2 ;
      setDimension(computedWidth, computedHeight);
    }
  }

  return {
    dimension,
    updateDimension,
    circleResize,
    isViewPortBoundReached
  };
}