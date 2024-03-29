import React from 'react'

const CreateCircleButton = (props) => {
  return (
    <>
      <p>Click the below button to create circle</p>
      <button onClick={props.createCircle}>Click here</button>
    </>
  )
}

export default CreateCircleButton