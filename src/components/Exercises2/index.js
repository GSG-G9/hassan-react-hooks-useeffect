import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
export default function Exercises2() {
	return (
		<div className='exercises-container'>
			<Link className='button' to='/'>
				Home
			</Link>
		</div>
	);
}
