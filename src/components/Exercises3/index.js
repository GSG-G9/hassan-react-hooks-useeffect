import { Link } from 'react-router-dom';
import { Promise } from 'bluebird';
import './style.css';
import { useState, useEffect } from 'react';
Promise.config({ cancellation: true });
export default function Exercises4() {
	const [inputText, setInputText] = useState('code');
	const [imgs, setImgs] = useState([]);

	useEffect(() => {
		const fetchUser = (queryText) =>
			new Promise((resolve, reject) => {
				fetch(
					`https://api.giphy.com/v1/gifs/search?api_key=f9d7wzeXCo0Xy18AllwGubAe4VXYqf4w&q=${queryText}&limit=25&offset=0&rating=g&lang=en`
				)
					.then((res) => res.json())
					.then(({ data }) => resolve(data))
					.catch((err) => reject(err));
			});
		const promise = fetchUser(inputText)
			.then((data) => setImgs(data))
			.catch(() => setImgs([]));
		return () => {
			promise.cancel();
			setImgs([]);
		};
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
						onChange={({ target: { value } }) => setInputText(value)}
					/>
				</label>
				<div className='images-div'>
					{imgs.map(({ embed_url }, index) => (
						<iframe
							key={index}
							title={index}
							className='image-gif'
							src={embed_url}
							alt=''
						/>
					))}
				</div>
			</div>
		</div>
	);
}
