import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header/header';
import Rodape from './footer/footer';
import Photos from './components/Photos';
import Content from './content/content';
import Galery from './galery/galery';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/photos" element={<Photos />} />
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
