import Footer from 'components/footer';
import Header from 'components/header';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'routes/Routes';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
