import React from 'react';
import { AuthForm } from '../../components/auth/AuthForm';

export const AuthPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#000913] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,rgba(0,9,19,1)_50%)] p-4">
      <AuthForm />
    </div>
  );
};