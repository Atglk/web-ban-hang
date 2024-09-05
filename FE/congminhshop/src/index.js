import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './pages/users/homepage';
import { BrowserRouter } from 'react-router-dom';
import RouterCustom from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <RouterCustom></RouterCustom>
  </BrowserRouter>
);


