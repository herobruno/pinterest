import './footer.css';
import pinterestLogo from '../assets/Pinterest-logo.png';

export default function Rodape() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={pinterestLogo} alt="Logo do Pinterest" className="logo-img" />
          <div className="idioma">
            🌐 <span>Português<br />(Brasil)</span>
          </div>
        </div>

        <div className="footer-columns">
          <div className="footer-col">
            <h4>Links rápidos</h4>
            <ul>
              <li><a href="#">Materiais para a imprensa</a></li>
              <li><a href="#">Assine via RSS</a></li>
              <li><a href="#">Fale conosco</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Empresa</h4>
            <ul>
              <li><a href="#">Sobre o Pinterest</a></li>
              <li><a href="#">Carreiras</a></li>
              <li><a href="#">Investidores</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Mais do Pinterest</h4>
            <ul>
              <li><a href="#">Central de Ajuda</a></li>
              <li><a href="#">Para empresas</a></li>
              <li><a href="#">Criadores de conteúdo</a></li>
              <li><a href="#">Desenvolvedores</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Pinterest</p>
        <div className="footer-links">
          <a href="#">Copyright e Marca comercial</a>
          <a href="#">Termos de Serviço</a>
          <a href="#">Privacidade e Cookies</a>
          <a href="#">Anúncios personalizados</a>
          <a href="#">Status do Pinterest</a>
        </div>
      </div>
    </footer>
  );
}
