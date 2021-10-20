import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/AuthProvider";
import BookAppointment from "./Pages/BookAppointment/BookAppointment";
import Contact from "./Pages/Contact/Contact";
import Doctors from "./Pages/Doctors/Doctors/Doctors";
import Event from "./Pages/Event/Event";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import Services from "./Pages/Services/Services/Services";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route exact path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
            </Route>
            <PrivateRoute path="/event">
              <Event></Event>
            </PrivateRoute>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/contact">
              <Contact></Contact>
            </PrivateRoute>
            <PrivateRoute path="/book-appointment">
              <BookAppointment></BookAppointment>
            </PrivateRoute>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
