import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from 'pages/home'
import Category from 'pages/category'
import Account from 'pages/account'

function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/:category" component={Category} />

			<Route path="/account/:id" component={Account} />
		</Switch>
	)
}

export default Routes
