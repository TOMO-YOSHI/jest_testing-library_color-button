import { useState } from 'react'
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  const [btnDisabled , setBtnDisabled] = useState(false)

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={btnDisabled}
        >
        Change to {newButtonColor}
      </button>
      <input
        type='checkbox'
        id='enable-button-checkbox'
        defaultChecked={btnDisabled}
        aria-checked={btnDisabled}
        onChange={(e)=> setBtnDisabled(e.target.checked)} />
    </div>
  );
}

export default App;
