import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './pages/Layout';
import Home from './pages/Home';
import RegistrationSuccess from './pages/RegistrationSuccess';
import Dashboard from './pages/Dashboard';
import Deposit from './pages/Deposit';
import Withdraw from './pages/Withdraw';
import Transfer from './pages/Transfer';
import History from './pages/History';
import Logout from './pages/Logout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path='register' element={ <Register /> } />
          <Route path='login' element={ <Login /> } />
          <Route path='registration-successful' element={ <RegistrationSuccess /> } />

          <Route path='dashboard' element={ <Dashboard /> } />
          <Route path='deposit' element={ <Deposit /> } />
          <Route path='withdraw' element={ <Withdraw /> } />
          <Route path='transfer' element={ <Transfer /> } />
          <Route path='history' element={ <History /> } />
          <Route path='logout' element={ <Logout /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
