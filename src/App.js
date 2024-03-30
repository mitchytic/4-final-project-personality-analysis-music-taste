import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './routes/HomePage'
import AccountSettings from './routes/AccountSettings';
import ChangePasswordPage from './routes/ChangePasswordPage';
import SupportPage from './routes/SupportPage';
import PrivacyPolicyPage from './routes/PrivacyPolicyPage';
import TermsAndConditionsPage from './routes/TermsAndConditionsPage';
import AboutPage from './routes/AboutPage';
import Result from './routes/Result';
import StudyScreen1 from './routes/StudyScreen1';
import StudyScreen2 from './routes/StudyScreen2';
import StudyScreen3 from './routes/StudyScreen3';
import CreateAccount from './routes/createaccount';
import LoginPage from './routes/Login';
import { AuthProvider } from './contexts/AuthContext';


function App() {
    return (
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/settings" element={<AccountSettings />} />
              <Route path="/change-password" element={<ChangePasswordPage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/tnc" element={<TermsAndConditionsPage />} />
              <Route path="/result" element={<Result />} />
              <Route path="/sc1" element={<StudyScreen1 />} />
              <Route path="/sc2" element={<StudyScreen2 />} />
                <Route path="/sc3" element={<StudyScreen3 />} />
              <Route path="/create-account" element={<CreateAccount />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </Router>
        </AuthProvider>
    )
} 
        
export default App;
