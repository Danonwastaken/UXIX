import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Talent from './pages/Talent/Talent';
import Layout from './components/Layout';
import { Header } from './components/Header';
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/talent" element={<Talent />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App
