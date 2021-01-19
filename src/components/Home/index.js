import { Link } from 'react-router-dom';
import './style.css';
export default function Home() {
	return (
		<div className='home-container'>
			<Link className='button' to='/exercises1'>
				Exercises1
			</Link>
			<Link className='button' to='/exercises2'>
				Exercises2
			</Link>
			<Link className='button' to='/exercises3'>
				Exercises3
			</Link>
			<Link className='button' to='/exercises4'>
				Exercises4
			</Link>
			<Link className='button' to='/exercises5'>
				Exercises5
			</Link>
		</div>
	);
}
