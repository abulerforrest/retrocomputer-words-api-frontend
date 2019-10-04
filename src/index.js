import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import * as serviceWorker from './serviceWorker';

import {
	Route,
	BrowserRouter as Router
} from "react-router-dom";

require('dotenv').config();

const routing = (
	<Router>
		<div>
			<Route path="/" exact component={App} />
			<Route path="/api" />
		</div>
	</Router>
  );

ReactDOM.render(routing, document.getElementById('root'))

serviceWorker.unregister();