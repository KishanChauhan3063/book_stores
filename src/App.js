import React from 'react';
// import react router dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
//import pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
//import components
import Sidebar from './components/Sidebar';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from './components/Slider';
import Books from './components/Books';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Checkout from './components/Checkout';
import { AuthContextProvider } from './contexts/AuthContext';

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                {" "}
                <Slider /> <Books />{" "}
              </React.Fragment>
            }
          />
          <Route
            path="/SignIn"
            element={
              <AuthContextProvider>
                <SignIn />
              </AuthContextProvider>
            }
          />
          <Route
            path="/SignUp"
            element={
              <AuthContextProvider>
                <SignUp />
              </AuthContextProvider>
            }
          />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
