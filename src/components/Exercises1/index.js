import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
export default function Exercises1() {
	return (
		<div className='exercises-container'>
			<Link className='button' to='/'>
				Home
			</Link>
		</div>
	);
}
