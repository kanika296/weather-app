import React from 'react'
import Weather from './components/Weather'
import CustomButton from './common/Confetti';
const App = () => {
  return (
    <div className='app'>
      <Weather /> 
      <CustomButton/>
    </div>
  )
}

export default App