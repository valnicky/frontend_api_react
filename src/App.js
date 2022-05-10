import React from 'react';
import './App.css';
import './styles/global.scss'
import ProductList from './ProductList/ProductList'

function App() {
  return (
    <div className="App">
     <p>Our Products  </p>
       <ProductList/>
    </div>
  );
}

export default App;
