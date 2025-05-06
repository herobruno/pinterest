import React from "react";
import Header from "../header/header";
import Content from "../content/content";
import Galery from "../galery/galery";
import Rodape from '../footer/footer';
import '../footer/footer.css';

export default function App() {
  return (
    <div>
      <Header />
      <Content />
      <Galery />
      <Rodape />
    </div>
  );
}

