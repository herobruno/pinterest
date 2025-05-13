# Pinterest Clone - Projeto React

Este projeto é uma réplica visual simplificada do site Pinterest, desenvolvido como parte de um exercício de front-end utilizando **React** com **Vite**.

## 🔧 Tecnologias utilizadas

- React (JavaScript)
- Vite
- CSS puro
- [react-masonry-css](https://www.npmjs.com/package/react-masonry-css) (para grid estilo Pinterest)
- HTML

## 📂 Estrutura do projeto

- `src/components` — componentes principais, incluindo a página de fotos (`Photos.jsx`)
- `src/header` — cabeçalho da aplicação
- `src/galery` — galeria de imagens da home
- `src/footer` — rodapé estilizado com colunas e logo
- `src/assets` — imagem da logo do Pinterest

## 🎨 Funcionalidades implementadas

- Layout inspirado no Pinterest
- Barra de navegação com links
  - **Logo e título Pinterest** agora levam para a página inicial ao serem clicados
  - Link "Explorar" leva para a página de fotos
- Página **Explorar** (`/photos`):
  - Consome a API pública [Picsum Photos](https://picsum.photos/v2/list)
  - Exibe imagens em um grid responsivo estilo Pinterest (masonry)
  - Cartões com efeito hover, sombra e visual moderno
  - Filtro em tempo real por nome do autor
  - Link para visualizar a imagem original
- Galeria com imagens estilizadas na home
- Rodapé completo com:
  - Logo do Pinterest
  - Links úteis
  - Idioma selecionado

## 📷 Preview

![image](https://github.com/user-attachments/assets/cdfdcec8-ac83-4772-9877-b41c7e385745)

## 🚀 Como executar

```bash
npm install
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) no navegador.

- Clique em **Explorar** para acessar a página de fotos estilo Pinterest.
- Clique no logo ou no texto "Pinterest" para voltar para a página inicial.

## 👥 Desenvolvido por

- **Bruno**
- **Charles**
- **Rodrigo**
