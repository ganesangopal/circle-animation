import { useEffect, useRef } from 'react';
import { useCircleDimension } from '../../hooks/circleDimensionHooks';
import '../circle/circle.css'

const Circle = () => {
  const circleRef = useRef(null);
  const { dimension, updateDimension, circleResize, isViewPortBoundReached } = useCircleDimension();

  const handleResize = (e) => {
    e.preventDefault();
    circleResize(circleRef);
  }

  const handleClick = (e) => {
    e.preventDefault();
    updateDimension(circleRef);
  }

  useEffect(() => {
    const [width, height] = dimension;
    circleRef.current.style.width = width + 'px';
    circleRef.current.style.height = height + 'px';
    if (isViewPortBoundReached) {
      circleRef.current.style.cursor = 'zoom-out'
    } else {
      circleRef.current.style.cursor = 'zoom-in'
    }
  }, [dimension])

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])
  return (
    <>
      <div id='circle' ref={circleRef} onClick={handleClick}>
      </div>
    </>
  )
}

export default Circle;