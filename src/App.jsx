import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header/header';
import Rodape from './footer/footer';
import Photos from './components/Photos';
import Content from './content/content';
import Galery from './galery/galery';
import About from './components/About';
import News from './components/News';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/photos" element={<Photos />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/" element={
              <>
                <Content />
                <Galery />
              </>
            } />
          </Routes>
        </main>
        <Rodape />
      </div>
    </Router>
  );
}

export default App;
