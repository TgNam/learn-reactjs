import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './components/user/User';
import Admin from './components/admin/Admin';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/users' element={<User />} />
        <Route path='/admins' element={<Admin />} />
      </Route>

    </Routes>
  </BrowserRouter>

  // </React.StrictMode>
);


