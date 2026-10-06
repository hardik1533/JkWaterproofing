import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes><Route path="/" element={<Home />} /></Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
