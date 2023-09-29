import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components'

import Error from './pages/Error/';
import Home from './pages/Home/';

import Header from './components/Header/';
import Footer from './components/Footer/';
import HomeBG from './assets/HomeBG.gif'

const GlobalStyle = createGlobalStyle`
	* {
		font-family: 'Trebuchet MS', Helvetica, sans-serif;
		color: white;
	}

	body {
		background: url(${HomeBG});
		margin: 0;
	}`

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<Router>
			<GlobalStyle />
			<Header />
			<Routes>
				<Route path="*" element={<Error />} />
				<Route path="/" element={<Home />} />
			</Routes>
			<Footer />
		</Router>
	</React.StrictMode>
);
