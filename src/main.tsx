import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './utils/styles/GlobalStyle.tsx'
import Header from './components/Header/';
import Error from './pages/Error/';
import Home from './pages/Home/';
import Game from './pages/Game/';
import Chat from './pages/Chat/';
import Profile from './pages/Profile/';
import Footer from './components/Footer/';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<Router>
			<GlobalStyle />
			<Header />
			<Routes>
				<Route path="*" element={<Error />} />
				<Route path="/" element={<Home />} />
				<Route path="/game" element={<Game />} />
				<Route path="/chat" element={<Chat />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
			<Footer />
		</Router>
	</React.StrictMode>
);
