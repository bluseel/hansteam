import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Buy from './pages/Buy';
import Team from './pages/team';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <Team />
    </>
  );
}

export default App;
