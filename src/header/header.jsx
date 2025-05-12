import React from "react";
import "./header.css";

export default function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
          alt="Pinterest Logo"
          className="logo"
        />
        <span className="Pinterest">Pinterest</span>
        <span className="explorar">Explorar</span>

      </div>
      <div className="navbar-right">
        <a href="#">Sobre</a>
        <a href="#">Notícias</a>
       
       
        <button className="criar-conta">Criar conta</button>
      </div>
    </nav>
  );
}
