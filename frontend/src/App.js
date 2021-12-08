import './App.css';
import React from 'react';
import {HashRouter as Router, Route, Routes } from 'react-router-dom';

import LoveLanguagePage from './pages/1-love-language/LoveLanguagePage';
import FrequentWordsPage from './pages/2-frequent-words/FrequentWordsPage';
import HappyBirthdayPage from './pages/3-happy-birthday/HappyBirthdayPage';
import TrackRecordPage from './pages/4-track-record/TrackRecordPage';

import HomePage from './pages/info/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/love-language' element={<LoveLanguagePage />}/>
        <Route path='/frequent-words' element={<FrequentWordsPage />}/>
        <Route path='/happy-birthday' element={<HappyBirthdayPage />}/>
        <Route path='/track-record' element={<TrackRecordPage />}/>
        <Route path='/' element={<HomePage />}/>
      </Routes>
    </Router>
  );
}

export default App;
