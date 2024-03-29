import { useState } from 'react';
import './App.css'
import Circle from './components/circle/Circle'
import CreateCircleButton from './components/circle/CreateCircleButton';

function App() {
  const [step, setStep] = useState('start');
  
  return (
    <div>
      {step === 'start' && (
        <CreateCircleButton createCircle={() => setStep('create-circle')} />
      )}
      { step === 'create-circle' && (
        <Circle />
      )}
    </div>
  )
}

export default App
