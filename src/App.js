import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Filter from './component/Filter';
import Countries from './component/Countries';
import './App.css';
import Error from './component/Error';
import SingleCountry from './component/SingleCountry';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Filter />
        <Routes>
          <Route path='/' element={<Countries />} />
          <Route path='/:name' element={<SingleCountry />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
