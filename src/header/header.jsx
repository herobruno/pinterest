import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="pinterest-link" style={{display: 'flex', alignItems: 'center', textDecoration: 'none'}}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
            alt="Pinterest Logo"
            className="logo"
          />
          <span className="Pinterest">Pinterest</span>
        </Link>
        <Link to="/photos" className="explorar">Explorar</Link>
      </div>
      <div className="navbar-right">
        <a href="#">Sobre</a>
        <a href="#">Notícias</a>
       
       
        <button className="criar-conta">Criar conta</button>
      </div>
    </nav>
  );
}
