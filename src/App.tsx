import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import StoryPage from './pages/StoryPage';
import CoreValuesPage from './pages/CoreValuesPage';
import TrackOrderPage from './pages/TrackOrderPage';
import ReturnPolicyPage from './pages/ReturnPolicyPage';
import ContactPage from './pages/ContactPage';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/core-values" element={<CoreValuesPage />} />
          <Route path="/track-order" element={<TrackOrderPage />} />
          <Route path="/return-policy" element={<ReturnPolicyPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;