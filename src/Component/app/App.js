import { BrowserRouter as Router } from 'react-router-dom';
import AppHeader from '../appheader/Appheader';
import Slider from '../slider/Slider';
import InitialPicture from '../headerinitialpicture/InitialPicture';

import weestepChildren from "../../resources/img/weestepChildren.png"


import './App.sass';
function App() {
	return (
		<Router>
			<div className='App'>
				<AppHeader />
				<InitialPicture/>
				<Slider/>
			</div>
		</Router>
	);
}

export default App;
