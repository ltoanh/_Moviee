import Footer from 'components/footer';
import Header from 'components/header';
import Sidebar from 'components/sidebar';

import { BrowserRouter } from 'react-router-dom';
import Routes from 'routes/Routes';

import './App.scss';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Sidebar />
				<div className="wrapper">
					<div className="main">
						<Header />
						<Routes />
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
