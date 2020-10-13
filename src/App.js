import React, { useState } from 'react';
import ColorChangeButton from './ColorChangeButton'
import './App.css';

function App() {
	const [color, setColor] = useState('')
	console.log(color, setColor)
  return (
		<div className={'react-root ' + color}>
			<div className="centered">
				<h1>Color Picker</h1>
				<ColorChangeButton color="red"/>
				<ColorChangeButton color="blue"/>
				<ColorChangeButton color="yellow"/>
				<button className="red" onClick={() => setColor('red')}>Red</button>
				<button className="blue" onClick={() => setColor('blue')}>Blue</button>
				<button className="yellow" onClick={() => setColor('yellow')}>Yellow</button>
			</div>
		</div>
  );
}

export default App;
