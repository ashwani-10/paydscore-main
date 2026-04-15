import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Dashboard from './Dashboard';
import SmartDealMemo from './SmartDealMemo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/smartdealmemo" element={<SmartDealMemo />} />
      </Routes>
    </Router>
  );
}

export default App;
