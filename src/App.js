import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer/Index';
import Sidebar from './components/Sidebar/index';
import Users from './components/Users';
import Todos from './components/Todos';
import Album from './components/Album';
import Photo from './components/Photo';
import './assets/css/joeblog.css';
import Practice from './components/Practice';
import Counter from './components/Counter'


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/users' element={<Users />} />
          <Route path='/todos' element={<Todos />} />
          <Route path='/album' element={<Album />} />
          <Route path='/photo' element={<Photo />} />
          <Route path='/practice' element={<Practice />} />
          <Route path='/counter' element= {<Counter />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
