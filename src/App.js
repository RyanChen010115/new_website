import React from 'react';
import {Footer, Blog, Header, Features} from './containers';
import { Article, Navbar, Intro } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
            <Navbar />
            <Header />
        </div>
        <Intro />
        <Features />
        <Article />
        <Blog />
        <Footer />
    </div>
  );
}

export default App
