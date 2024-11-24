import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Cpu, LogOut } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuthStore();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-cyan-400/20 bg-[#000913]/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Cpu className="w-6 h-6 text-cyan-400" />
            <span className="text-xl font-bold cyber-text-glow">AI Growth Creators</span>
          </Link>

          {/* Navigation Links */}
          {!user ? (
            <div className="hidden md:flex items-center gap-8">
              <Link to="#features" className="text-cyan-400/70 hover:text-cyan-400 transition-colors">
                Features
              </Link>
              <Link to="#pricing" className="text-cyan-400/70 hover:text-cyan-400 transition-colors">
                Pricing
              </Link>
              <Link to="#about" className="text-cyan-400/70 hover:text-cyan-400 transition-colors">
                About
              </Link>
              <Link to="#contact" className="text-cyan-400/70 hover:text-cyan-400 transition-colors">
                Contact
              </Link>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-8">
              <Link to="/dashboard" className="text-cyan-400/70 hover:text-cyan-400 transition-colors">
                Dashboard
              </Link>
            </div>
          )}

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            {!user ? (
              <>
                <Link to="/auth">
                  <Button variant="outline" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button size="sm">
                    Get Started
                  </Button>
                </Link>
              </>
            ) : (
              <Button
                variant="outline"
                size="sm"
                onClick={handleSignOut}
                className="flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};