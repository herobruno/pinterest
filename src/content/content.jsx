import React from 'react';
import './style.css';

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
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Senha" required />
          <a href="#">Esqueceu sua senha?</a>
          <button type="submit">Entrar</button>
        </form>
        <div className="divider">OU</div>
        <button className="btn-facebook">Continuar com Facebook</button>
        <button className="btn-google">Continuar com Google</button>
        <button className="btn-apple">Usar link do Apple</button>
      </div>
    </main>
  );
};

export default Content;
