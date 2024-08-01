import React from 'react';
import { Route, Routes, Link, useParams } from 'react-router-dom';

const LocationDetail = ({ item }) => {
  const { location, Detail, Agent } = item;
  return (
    <div>
      <h2>{location}</h2>
      <p>{Detail}</p>
      <h3>Agents:</h3>
      <ul>
        {Agent.map((agent, index) => (
          <li key={index}>
            {agent.name} - {agent.Phone} - {agent.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

const LocationList = ({ locations }) => {
  return (
    <div>
      {locations.map((item, index) => (
        <Link to={`/l/${item.location}`} key={index} className='bg-neutral-white text-primary-blue py-2 px-4 rounded m-2'>
          {item.location}
        </Link>
      ))}
    </div>
  );
};

const Locations = () => {
  const locations = [
    {
      location: "Barrie",
      Agent: [{ name: "Ahmad", Phone: "324", email: "ahmad@example.com" }],
      Detail: "Detail about Barrie as a real estate broker company"
    },
    {
      location: "Innisfil",
      Agent: [{ name: "John", Phone: "123", email: "john@example.com" }],
      Detail: "Detail about Innisfil as a real estate broker company"
    },
    {
      location: "NewMarket",
      Agent: [{ name: "Jane", Phone: "456", email: "jane@example.com" }],
      Detail: "Detail about NewMarket as a real estate broker company"
    },
    {
      location: "Angus",
      Agent: [{ name: "Doe", Phone: "789", email: "doe@example.com" }],
      Detail: "Detail about Angus as a real estate broker company"
    },
    {
      location: "Bradford",
      Agent: [{ name: "Smith", Phone: "321", email: "smith@example.com" }],
      Detail: "Detail about Bradford as a real estate broker company"
    },
    {
      location: "Richmond Hill",
      Agent: [{ name: "Emily", Phone: "654", email: "emily@example.com" }],
      Detail: "Detail about Richmond Hill as a real estate broker company"
    },
    {
      location: "West Gwillimbury",
      Agent: [{ name: "Michael", Phone: "987", email: "michael@example.com" }],
      Detail: "Detail about West Gwillimbury as a real estate broker company"
    },
    {
      location: "East Gwillimbury",
      Agent: [{ name: "Sarah", Phone: "741", email: "sarah@example.com" }],
      Detail: "Detail about East Gwillimbury as a real estate broker company"
    },
    {
      location: "Toronto",
      Agent: [{ name: "Ahmad", Phone: "324", email: "ahmad@example.com" }],
      Detail: "Detail about Toronto as a real estate broker company"
    }
  ];

  const { locationName } = useParams();

  const selectedLocation = locations.find(location => location.location === locationName);

  return (
    <div className='p-8 flex gap-10 flex-col pt-24 bg-primary-blue text-neutral-white text-2xl max-[600px]:text-lg max-[600px]:leading-tight font-normal'>
      <h1>Locations</h1>
      {selectedLocation ? (
        <LocationDetail item={selectedLocation} />
      ) : (
        <LocationList locations={locations} />
      )}
    </div>
  );
};

export default Locations;


//  app tsx --------------------------
/*

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
import Locations from './pages/allLocations'

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/l/" element={<Locations />} />
        <Route path="/l/:locationName" element={<Locations />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<NotFound />} /> {/* Add the NotFound route }
        </Routes>
        </Router>
      );
    }
    
    export default App;
    
*/