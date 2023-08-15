import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import { ProductsProvider } from './context/productcontext.jsx';
import { FilterProvider } from './context/filtercontext.jsx';
import { CartProvider } from './context/cartcontext.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
import { UserProvider } from './context/usercontext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-a4ppr4r0zsxug0nn.eu.auth0.com"
    clientId="uKxqY8sOIt9v4Zwlr2jmlMeeqQ76mMEX"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    cacheLocation='localstorage'
  >
    <React.StrictMode>
        <BrowserRouter>
          <UserProvider>
            <ProductsProvider>
              <FilterProvider>
                <CartProvider>
                  <App />
                </CartProvider>
              </FilterProvider>
            </ProductsProvider>
          </UserProvider>
        </BrowserRouter>
    </React.StrictMode>
  </Auth0Provider>,
)
