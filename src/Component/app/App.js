import { BrowserRouter as Router } from 'react-router-dom';
import AppHeader from '../appheader/Appheader';
import './App.sass';
function App() {
	return (
		<Router>
			<div className='App'>
				<AppHeader />
			</div>
		</Router>
	);
}

export default App;
