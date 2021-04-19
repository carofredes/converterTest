import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import TabContainer from './components/TabContainer';

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
