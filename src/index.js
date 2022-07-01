import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { UserProvider } from './context/user.context';
import reportWebVitals from './reportWebVitals';
import { CategoriesProvider } from './context/CategoriesContext';
import { CartProvider } from './context/cart.context';
import { Provider } from 'react-redux';
import { Store } from './store/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
    <BrowserRouter>
      <UserProvider>
        < CategoriesProvider>
          <CartProvider>  <App />
          </CartProvider>
        </ CategoriesProvider>
      </UserProvider>
    </BrowserRouter></Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
