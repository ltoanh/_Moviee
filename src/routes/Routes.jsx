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
			<Route
				path="/:category"
				render={(props) => {
					if(props.location.pathname !== '/login'){
						return <Category />
					} else {
						return <Login />
					}
				}}
			/>
			<Route path="/:category/:id" component={Detail} />

			{/* <Route path="/account/:id" component={Account} exact/> */}
		</Switch>
	);
}

export default Routes;
