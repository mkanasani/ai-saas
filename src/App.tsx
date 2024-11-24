import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthPage } from './pages/auth/AuthPage';
import { LandingPage } from './pages/landing/LandingPage';
import { DashboardPage } from './pages/dashboard/DashboardPage';
import { useAuthStore } from './store/authStore';
import { LoadingScreen } from './components/ui/LoadingScreen';

function App() {
  const { initializeAuth, loading, initialized, user } = useAuthStore();

  useEffect(() => {
    initializeAuth();
  }, []);

  if (!initialized || loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route 
          path="/auth" 
          element={user ? <Navigate to="/dashboard" /> : <AuthPage />} 
        />
        <Route 
          path="/dashboard" 
          element={user ? <DashboardPage /> : <Navigate to="/auth" />} 
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;