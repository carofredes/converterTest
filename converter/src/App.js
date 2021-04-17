import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import TabContainer from './Components/TabContainer/TabContainer';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Header />
				<TabContainer />
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
