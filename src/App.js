import logo from './logo.svg';
import { createBrowserHistory } from 'history';
import './App.css';
import React from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './pages/Navbar';
import Home from './pages/Home';
import RegistrationSuccess from './pages/RegistrationSuccess';
import Dashboard from './pages/Dashboard';
import Deposit from './pages/Deposit';
import Withdraw from './pages/Withdraw';
import Transfer from './pages/Transfer';
import History from './pages/History';
import Logout from './pages/Logout';
import Approve from './pages/Approve';
import Verify from './pages/Verify';
import Profile from './pages/Profile';
import SearchCustomer from './pages/SearchCustomer';
import Footer from './pages/Footer';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/register' element={ <Register /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/registration-successful' element={ <RegistrationSuccess /> } />

          <Route path='/dashboard' element={ <Dashboard /> } />
          <Route path='/deposit' element={ <Deposit /> } />
          <Route path='/withdraw' element={ <Withdraw /> } />
          <Route path='/approve' element={ <Approve /> } />
          <Route path='/verify' element={ <Verify /> } />
          <Route path='/transfer' element={ <Transfer /> } />
          <Route path='/history' element={ <History /> } />
          <Route path='/profile' element={ <Profile /> } />
          <Route path='/search-customer' element={ <SearchCustomer /> } />
          <Route path='/logout' element={ <Logout /> } />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});
