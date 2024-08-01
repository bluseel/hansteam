import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Buy from './pages/Buy';
import Sell from './pages/Sell';
import Contact from './pages/Contact';
import Team from './pages/team';
import NotFound from './pages/NotFound'; // Import the NotFound component
import RealEstatePage from './pages/cities page/toronto';


import Angus from './pages/cities page/angus'; 
import Barrie from './pages/cities page/barrie';
import Innisfil from './pages/cities page/innisfil';
import NewMarket from './pages/cities page/newmarket';
import Bradford from './pages/cities page/bradford';
import Richmondhill from './pages/cities page/richmondhill';
import WestGwillimbury from './pages/cities page/westgwillimbury';
import EastGwillimbury from './pages/cities page/eastgwillimbury';
import Toronto from './pages/cities page/toronto';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/angus" element={<Angus />} />
        <Route path="/barrie" element={<Barrie />} />
        <Route path="/innisfil" element={<Innisfil />} />
        <Route path="/newmarket" element={<NewMarket />} />
        <Route path="/bradford" element={<Bradford />} />
        <Route path="/richmond-hill" element={<Richmondhill />} />
        <Route path="/west-gwillimbury" element={<WestGwillimbury />} />
        <Route path="/east-gwillimbury" element={<EastGwillimbury />} />
        <Route path="/toronto" element={<Toronto />} />
        
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
}

export default App;
