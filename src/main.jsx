import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import { ProductsProvider } from './context/productcontext.jsx';
import { FilterProvider } from './context/filtercontext.jsx';
import { CartProvider } from './context/cartcontext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
