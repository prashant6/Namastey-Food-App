import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from "./Redux/Store";
import AuthProvider from './Context/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </AuthProvider>

);
