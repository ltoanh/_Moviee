import Footer from 'components/footer';
import Header from 'components/header';
import Sidebar from 'components/sidebar';
import Widgets from 'components/widgets';

import { BrowserRouter } from 'react-router-dom';
import Routes from 'routes/Routes';

import './App.scss';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Sidebar />
				<div className="main">
					<Header />
					<Routes />
					<Footer />
				</div>
				<Widgets />
			</div>
		</BrowserRouter>
	);
}

export default App;
