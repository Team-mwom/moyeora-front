import React from 'react';
import Router from 'Router';
import Header from 'components/site/header/Header';
import Footer from 'components/site/footer/Footer';

//css
import 'App.css';
import 'styles/site/base/reset.css'
import 'styles/site/header/header.css'
import 'styles/site/footer/footer.css'

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






