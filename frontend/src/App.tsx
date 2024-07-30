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

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<NotFound />} /> {/* Add the NotFound route */}
      </Routes>
    </Router>
  );
}

export default App;
