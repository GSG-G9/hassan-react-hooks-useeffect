import { Link } from 'react-router-dom';
import './style.css';
import { useState, useEffect } from 'react';
export default function Exercises4() {
	const [inputText, setInputText] = useState('cat');
	const [img, setImg] = useState('');
	useEffect(() => {
		setImg(`https://robohash.org/${inputText}`);
	}, [inputText]);
	return (
		<div className='exercises-container'>
			<Link className='button' to='/'>
				Home
			</Link>
			<div className='images-randoms-text'>
				<label htmlFor='image-text'>
					Enter Any Text
					<input
						id='image-text'
						className='image-text'
						type='text'
						onKeyDown={({ key, target: { value } }) => {
							if (key === 'Enter') {
								setInputText(value);
							}
						}}
					/>
				</label>
				<div className='image-div'>
					<img className='image' src={`${img}.png`} alt='' />
				</div>
			</div>
		</div>
	);
}
