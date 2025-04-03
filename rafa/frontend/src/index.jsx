import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Header from "./components/header";
import Footer from "./components/footer";
import Container from "./components/container";
import { UserProvider } from './context/userContext';
import Message from './components/message';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <Header />
      <Message/>
      <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
      </Container>
      <Footer />
      </UserProvider>

    </BrowserRouter>
  </React.StrictMode>
);


