import React from 'react';
import Router from 'Router';
import Header from 'components/main/Header';
import Footer from 'components/main/Footer';

//css
import 'styles/common/App.css';
import 'styles/common/reset.css'

const App = () => {
	return (
		
		<div className='App'>
			<Header/>
			<Router />
			<Footer/>
		</div>
	);
};

export default App;






