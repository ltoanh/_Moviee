import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from 'pages/home';
import Category from 'pages/category';
import Detail from 'pages/detail';
import Login from 'pages/login';

function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route exact path="/:category" component={Category} />
			<Route path="/:category/:id" exact component={Detail} />

			{/* <Route path="/account/:id" component={Account} exact/> */}
		</Switch>
	);
}

export default Routes;
