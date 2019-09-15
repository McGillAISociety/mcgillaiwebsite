import React from 'react';
import ReactDOM from 'react-dom';
import {Route, NavLink, BrowserRouter as Router, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './assets/css/app.css';
import './assets/css/fontello.css';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NavBar from './components/navbar/navbar.js'
import Home from './components/home/home.js';
import OurTeam from './components/execs/Exec.js';
import Mais202 from './components/mais202/mais202.js';
import Faq from './components/faq/faq.js';
import Footer from './components/footer/footer.js'
import NotFound from './components/notfound/notfound.js';

const route = (
	<Router>
		<div>
			<NavBar></NavBar>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/ourteam" component={OurTeam} />
				<Route path="/mais202" component={Mais202} />
				<Route path="/contact" component={Faq} />
				<Route component={NotFound} />
			</Switch>
			<Footer></Footer>
		</div>
	</Router>
)

ReactDOM.render(route, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
