import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from 'pages/home'
import Catalog from 'pages/catalog'
import Account from 'pages/account'

function Routes() {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
      <Route path="/:category" component={Catalog} />

      <Route path="/user/:id" component={Account} />
		</Switch>
	)
}

export default Routes
