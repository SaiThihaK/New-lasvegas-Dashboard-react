import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './layouts/Navbar/Navbar';
import './App.css';
import Container from './layouts/Container/Container';
import AdminRoute from './Route/AdminRoute';
import { Login } from './Page';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { type } from './services/Token';
import MasterRoute from './Route/MasterRoute';
const App = () => {
  const loginStatus = localStorage.getItem('status');
  return (
    <>
      <Router>
        <ToastContainer />
        {loginStatus === 'success' ? (
          <>
            <Navbar />
            <Container>
              {type === 'admin' && <AdminRoute />}
              {type === 'master' && <MasterRoute />}
            </Container>
          </>
        ) : (
          <Login />
        )}
      </Router>
    </>
  );
};

export default App;
