import Home from './components/Home';
import Exercises1 from './components/Exercises1';
import Exercises2 from './components/Exercises2';
import Exercises3 from './components/Exercises3';
import Exercises4 from './components/Exercises4';
import Exercises5 from './components/Exercises5';

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
export default function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path='/' component={Home}></Route>
					<Route exact path='/exercises1' component={Exercises1}></Route>
					<Route exact path='/exercises2' component={Exercises2}></Route>
					<Route exact path='/exercises3' component={Exercises3}></Route>
					<Route exact path='/exercises4' component={Exercises4}></Route>
					<Route exact path='/exercises5' component={Exercises5}></Route>
					<Redirect to='/'></Redirect>
				</Switch>
			</Router>
		</>
	);
}
