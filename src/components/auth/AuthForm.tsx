import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Github, Globe, X } from 'lucide-react';

export const AuthForm: React.FC = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      if (isLogin) {
        await signIn(email, password);
      } else {
        await signUp(email, password);
      }
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cyber-container w-full max-w-md p-8">
      {/* Close Button */}
      <div className="flex justify-end mb-6">
        <button 
          onClick={() => navigate('/')}
          className="text-cyan-400/70 hover:text-cyan-400 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Logo and Title */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-400/10 rounded-lg mb-4">
          <div className="w-8 h-8 transform rotate-45 bg-cyan-950 border-2 border-cyan-400/30" />
        </div>
        <h1 className="text-2xl font-bold cyber-text-glow mb-2">Access Terminal</h1>
        <p className="text-cyan-400/70 text-sm">Initialize authentication sequence</p>
      </div>

      {/* Auth Tabs */}
      <div className="flex border-b border-cyan-400/30 mb-6">
        <button
          className={`flex-1 pb-3 text-sm font-medium transition-colors ${
            isLogin ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-cyan-400/50'
          }`}
          onClick={() => setIsLogin(true)}
        >
          Sign In
        </button>
        <button
          className={`flex-1 pb-3 text-sm font-medium transition-colors ${
            !isLogin ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-cyan-400/50'
          }`}
          onClick={() => setIsLogin(false)}
        >
          Register
        </button>
      </div>

      {/* Auth Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          type="email"
          placeholder="NAME@EXAMPLE.COM"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          label="Email"
        />

        <Input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          label="Password"
        />

        {error && (
          <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-md">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        <Button 
          type="submit" 
          className="w-full text-lg tracking-wider py-4"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="animate-spin">⟳</span>
              {isLogin ? 'AUTHENTICATING...' : 'REGISTERING...'}
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              INITIALIZE {isLogin ? 'LOGIN' : 'REGISTRATION'} →
            </span>
          )}
        </Button>
      </form>

      {/* External Access Points */}
      <div className="mt-8">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-cyan-400/30"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-[#000913] text-cyan-400/70">
              External Access Points
            </span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            className="flex items-center justify-center gap-2"
            onClick={() => {/* TODO: Implement GitHub auth */}}
          >
            <Github className="w-5 h-5" />
            GITHUB
          </Button>
          <Button
            variant="outline"
            className="flex items-center justify-center gap-2"
            onClick={() => {/* TODO: Implement Google auth */}}
          >
            <Globe className="w-5 h-5" />
            GOOGLE
          </Button>
        </div>
      </div>
    </div>
  );
};