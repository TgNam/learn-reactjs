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
import HomePage from './components/home/HomePage';
import ManageUser from './components/admin/Content/ManageUser';
import DashBoard from './components/admin/Content/DashBoard';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<HomePage />} />
        <Route path='users' element={<User />} />
      </Route>
      <Route path='/admins' element={<Admin />} >
        <Route index element={<DashBoard />} />
        <Route path='manage-users' element={<ManageUser />} />
      </Route>
    </Routes>
  </BrowserRouter>

  // </React.StrictMode>
);


