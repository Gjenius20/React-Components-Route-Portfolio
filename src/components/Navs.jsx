import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Galery from "./Galery";
import Logo from "/Logo.svg";
import Hero from "./Hero";

export default function Navs() {
  return (
    <BrowserRouter>
      <nav className="Navbar">
        <Link to="/" className="nav-brand">
          <img src={Logo} alt="Logo" className="nav-logo" />
          <span className="nav-title">DAFA DHIYAUL HAQ</span>
        </Link>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/galery">Galery</Link>
          </li>
        </ul>
      </nav>

      <main className="content">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/galery" element={<Galery />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
