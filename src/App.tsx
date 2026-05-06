import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

// Core Pages
import Homepage from './pages/Homepage';
import WaitlistPage from './pages/WaitlistPage';

// Informational Pages (Linked from Navbar/Footer)
import HowItWorksPage from './pages/HowItWorksPage';
import IntelPage from './pages/IntelPage';
import AboutPage from './pages/AboutPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Essential for pixel-perfect navigation */}
      <Routes>
        {/* Main Landing Page */}
        <Route path="/" element={<Homepage />} />
        
        {/* Contribution/Form Flow */}
        
        {/* Informational Routes */}
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/intel" element={<IntelPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/waitlist" element={<WaitlistPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />

        {/* Fallback */}
        <Route path="*" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
