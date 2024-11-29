import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Talent from './pages/Talent/Talent';
import Merch from './pages/Merch/Merch';
import Layout from './components/Layout';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './global.css';
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/talent" element={<Talent />} />
          <Route path="/merch" element={<Merch />} />
        </Routes>
        <Footer/>
      </Layout>
    </BrowserRouter>
  );
}



export default App
