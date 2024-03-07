import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './routes/HomePage'
import AccountSettings from './routes/AccountSettings';
import ChangePasswordPage from './routes/ChangePasswordPage';
import SupportPage from './routes/SupportPage';
import PrivacyPolicyPage from './routes/PrivacyPolicyPage';
import TermsAndConditionsPage from './routes/TermsAndConditionsPage';
import AboutPage from './routes/AboutPage';


function App() {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/settings" element={<AccountSettings />} />
            <Route path="/change-password" element={<ChangePasswordPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/tnc" element={<TermsAndConditionsPage />} />
          </Routes>
        </Router>
    )
} 
        
export default App;
