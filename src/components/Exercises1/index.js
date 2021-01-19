import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
export default function Exercises1() {
	const [count, setCount] = useState(0);
	const incrementCount = () => {
		setCount((ct) => ct + 1);
	};

	useEffect(() => {
		document.addEventListener('mousedown', incrementCount);
		return () => {
			document.removeEventListener('mousedown', incrementCount);
		};
	}, [count]);
	return (
		<div className='exercises-container'>
			<Link className='button' to='/'>
				Home
			</Link>
			<p>{count}</p>
			<div>
				<button className='button'>Add</button>
			</div>
		</div>
	);
}
