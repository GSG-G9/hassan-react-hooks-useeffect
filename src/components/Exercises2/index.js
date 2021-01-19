import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
export default function Exercises2() {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const [background, setBackground] = useState('red');

	useEffect(() => {
		const width = window.innerWidth;
		const handleMouseMove = ({ clientX, clientY }) => {
			setX(clientX);
			setY(clientY);
			setBackground(clientX < width / 2 ? 'blue' : 'tomato');
		};
		document.addEventListener('mousemove', handleMouseMove);
		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
		};
	}, [x, y]);
	return (
		<div
			className='exercises-container'
			style={{ backgroundColor: background }}
		>
			<Link className='button' to='/'>
				Home
			</Link>
			<div>
				<p>
					I am now on X:{x} , Y:{y}
				</p>
			</div>
		</div>
	);
}
