import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import TabContainer from './Components/TabContainer';
import { IntlProvider } from 'react-intl';
import { getCurrentLocale } from './languageProvider/languageProvider';

function App() {
	const currentAppLocale = getCurrentLocale();
	return (
		<IntlProvider locale={currentAppLocale.locale} messages={currentAppLocale.messages} textComponent={React.Fragment}>
			<BrowserRouter>
				<main className='App'>
					<Header />
					<div className='background-gradient'></div>
					<TabContainer />
				</main>
			</BrowserRouter>
		</IntlProvider>
	);
}

export default App;
