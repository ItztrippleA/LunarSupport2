import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Subscribe to </p>
        <h1>Thapa Technical Home Page</h1>
      </section>
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Lunar Support About Page</h1>
      </section>
    </>
  );
};

const Service = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Lunar Support Service Page</h1>
      </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Lunar Support Contact Page</h1>
      </section>
    </>
  );
};

const App = () => {
  const AppRoutes = () => {
    const routes = useRoutes([
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/service",
        element: <Service />,
      },
    ]);
    return routes;
  };
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
