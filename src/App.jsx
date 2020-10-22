import React from 'react';
import { HashRouter as Router } from 'react-router-dom';


import { Header } from './cmps/Header'
import { MyDetailes } from './cmps/MyDetailes'
import { Education } from './cmps/Education'
import { Skilles } from './cmps/Skilles'
import { Project } from './pages/Project'
import { Footer } from './cmps/Footer'

export function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <MyDetailes />
        <Education />
        <Skilles />
        <Project />
        <Footer />
      </div>
    </Router>
  );
}

