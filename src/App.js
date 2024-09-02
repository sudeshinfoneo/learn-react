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
import './assets/css/joeblog.css';
import Filter from './components/Filter';
import Counter from './components/Counter'
import Product from './components/Product';
import Category from './components/Category';
import AdminProduct from './components/Admin/Product';

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
          <Route path='/filter' element={<Filter />} />
          <Route path='/counter' element= {<Counter />} />
          <Route path='/product' element={<Product />} />
          <Route path='/category' element={<Category />} />
          <Route path='/admin/product' element={<AdminProduct />} />
          
          {/* <Route path="*" element={<h1>404 Not Found</h1>} /> */}

        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
