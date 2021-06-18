import { useState } from 'react'
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  // while(colorName.indexOf(/[A-Z]/))
  // console.log(colorName.indexOf(/([A-Z])/i))
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  // const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';
  const [btnDisabled , setBtnDisabled] = useState(false)

  return (
    <div>
      <button
        style={{ backgroundColor: !btnDisabled ? buttonColor : 'gray' }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={btnDisabled}
        >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <input
        type='checkbox'
        id='disable-button-checkbox'
        defaultChecked={btnDisabled}
        aria-checked={btnDisabled}
        onChange={(e)=> setBtnDisabled(e.target.checked)} />
        <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
