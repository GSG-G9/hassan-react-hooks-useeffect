import { Link } from 'react-router-dom';
import Loading from '../Loading';
import './style.css';
import { useState, useEffect } from 'react';
export default function Exercises5() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [date, setDate] = useState('');
	const [password, setPassword] = useState('');
	const [address, setAddress] = useState('');
	const [phone, setPhone] = useState('');
	const [image, setImage] = useState('');
	const [profileText, setProfileText] = useState('');
	const [inputIndex, setInputIndex] = useState();
	const [requestNewUser, setRequestNewUser] = useState(0);
	const [loadingDisplay, setLoadingDisplay] = useState(false);
	const [error, setError] = useState('');
	const [showText, setShowText] = useState(false);
	const obj = {
		name: setName,
		email: setEmail,
		date: setDate,
		password: setPassword,
		address: setAddress,
		phone: setPhone,
	};
	useEffect(() => {
		fetch('https://randomuser.me/api/')
			.then((res) => res.json())
			.then(
				({
					results: [
						{
							name: { title, first, last },
							location: {
								street: { name: streetName, number: streetNumber },
								city,
								state,
							},
							email,
							phone,
							dob: { date },
							login: { password },
							picture: { large },
						},
					],
				}) => {
					setError('');
					setLoadingDisplay(false);
					setName(`${title} ${first}  ${last}`);
					setAddress(`${streetNumber} ${streetName} ${city} ${state}`);
					setEmail(email);
					setPhone(phone);
					setDate(new Date(date).toDateString());
					setImage(large);
					setPassword(password);
				}
			)
			.catch((e) => {
				setLoadingDisplay(false);
				setError(e.message);
				setName('');
				setAddress('');
				setEmail('');
				setPhone('');
				setDate('');
				setImage('');
				setPassword('');
			});
	}, [requestNewUser]);

	const handleGetRandomUser = () => {
		setLoadingDisplay(true);
		setRequestNewUser(requestNewUser + 1);
	};

	return (
		<div className='exercises-container'>
			<Link className='button' to='/'>
				Home
			</Link>
			{loadingDisplay ? <Loading /> : null}
			<button className='button' onClick={handleGetRandomUser}>
				GET Random User
			</button>
			<div className='profile-card'>
				<div className='image-container'>
					<img className='profile-image' src={image} alt='' />
				</div>
				{error ? (
					<p className='fetch-error'>{error}</p>
				) : (
					<>
						<div className='profile-data'>
							{showText ? (
								<>
									<p>My {inputIndex} is :-</p>
									<span>
										<i className='fas fa-pen-fancy'></i>
									</span>
								</>
							) : null}
							<input
								className='input'
								type='text'
								value={profileText}
								id={inputIndex}
								onChange={({ target: { value, id } }) => {
									obj[id](value); //setName
									setProfileText(() => value);
								}}
							/>
						</div>
						<div className='profile-buttons'>
							<button
								onMouseEnter={() => {
									setProfileText(name);
									setInputIndex('name');
									setShowText(true);
								}}
								className='profile-button'
							>
								<i className='far fa-user'></i>
							</button>
							<button
								className='profile-button'
								onMouseEnter={() => {
									setProfileText(email);
									setInputIndex('email');
									setShowText(true);
								}}
							>
								<i className='far fa-envelope'></i>
							</button>
							<button
								className='profile-button'
								onMouseEnter={() => {
									setProfileText(date);
									setInputIndex('date');
									setShowText(true);
								}}
							>
								<i className='far fa-calendar-alt'></i>
							</button>
							<button
								className='profile-button'
								onMouseEnter={() => {
									setProfileText(address);
									setInputIndex('address');
									setShowText(true);
								}}
							>
								<i className='far fa-map'></i>
							</button>
							<button
								className='profile-button'
								onMouseEnter={() => {
									setProfileText(password);
									setInputIndex('password');
									setShowText(true);
								}}
							>
								<i className='fas fa-key'></i>
							</button>
							<button
								className='profile-button'
								onMouseEnter={() => {
									setProfileText(phone);
									setInputIndex('phone');
									setShowText(true);
								}}
							>
								<i className='fas fa-phone-square-alt'></i>
							</button>
						</div>
					</>
				)}
			</div>
		</div>
	);
}
