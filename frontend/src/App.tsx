import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Buy from './pages/Buy';
import Team from './pages/team';
import Sale from './pages/Sale';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <Home />
    </>
  );
}

export default App;
