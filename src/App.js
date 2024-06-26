import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './routes/HomePage'
import AccountSettings from './routes/AccountSettings';
import ChangePasswordPage from './routes/ChangePasswordPage';
import PrivacyPolicyPage from './routes/PrivacyPolicyPage';
import TermsAndConditionsPage from './routes/TermsAndConditionsPage';
import AboutPage from './routes/AboutPage';
import Result from './routes/Result';
import StudyScreen1 from './routes/StudyScreen1';
import StudyScreen2 from './routes/StudyScreen2';
import CreateAccount from './routes/createaccount';
import LoginPage from './routes/Login';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { useEffect } from 'react';


function App() {
    return (
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/settings" element={<AccountSettings />} />
              <Route path="/change-password" element={<ChangePasswordPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/tnc" element={<TermsAndConditionsPage />} />
              <Route path="/result" element={<Result />} />
              <Route path="/sc1" element={<StudyScreen1 />} />
              <Route path="/sc2" element={<StudyScreen2 />} />
              <Route path="/create-account" element={<CreateAccount />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </Router>
        </AuthProvider>
    )
} 
        
export default App;
