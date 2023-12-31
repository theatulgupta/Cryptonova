import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import CoinDetails from './components/CoinDetails';
import Exchanges from './components/Exchanges';
import Coins from './components/Coins';
import Header from './components/Header';
import Footer from './components/Footer';

function App () {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={ "/" } element={ <Home /> } />
        <Route path={ "/coins" } element={ <Coins /> } />
        <Route path={ "/exchanges" } element={ <Exchanges /> } />
        <Route path={ "/coin/:id" } element={ <CoinDetails /> } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
