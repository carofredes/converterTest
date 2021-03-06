import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import TabContainer from './components/TabContainer';
import TableRates from './components/TableRates';
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
					<TableRates />
				</main>
			</BrowserRouter>
		</IntlProvider>
	);
}

export default App;
