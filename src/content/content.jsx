import React from 'react';
import './style.css';
import { FaFacebook, FaGoogle } from 'react-icons/fa';


const Content = () => {
  return (
    <main className="container">
      <div className="left-panel">
        <div className="overlay-text">
          <h1>
            Entre para <br />
            encontrar suas <br />
            ideias
          </h1>
        </div>
      </div>
      <div className="right-panel">
        <h2>Bem-vindo(a) ao Pinterest</h2>
        <form className="login-form">
          <label htmlFor="">Email</label>
          <input type="email" placeholder="Email" required />
          <label htmlFor="Palavra-Passe">Palavra-Passe</label>
          <input type="password" placeholder="Senha" required />
          <a href="#">Esqueceu sua senha?</a>
          <button type="submit">Iniciar Sessão</button>
        </form>
        <div className="divider">OU</div>
        <button className="btn-facebook">
          <FaFacebook className="icon" />
          Continuar com Facebook
        </button>

        <button className="btn-google">
          <FaGoogle className="icon" />
          Continuar com Google
        </button>
      </div>
    </main>
  );
};

export default Content;
