import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Youtube,
  Mail,
  Cpu
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-cyan-400/20 bg-[#000913]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Cpu className="w-6 h-6 text-cyan-400" />
              <span className="text-xl font-bold cyber-text-glow">AI Growth Creators</span>
            </div>
            <p className="text-cyan-400/70 text-sm">
              Empowering the future through intelligent automation and AI-driven solutions.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold mb-4 tracking-wider">Products</h3>
            <ul className="space-y-2 text-sm text-cyan-400/70">
              <li><Link to="#" className="hover:text-cyan-400 transition-colors">AI Assistant</Link></li>
              <li><Link to="#" className="hover:text-cyan-400 transition-colors">Code Generator</Link></li>
              <li><Link to="#" className="hover:text-cyan-400 transition-colors">Knowledge Base</Link></li>
              <li><Link to="#" className="hover:text-cyan-400 transition-colors">API Access</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4 tracking-wider">Company</h3>
            <ul className="space-y-2 text-sm text-cyan-400/70">
              <li><Link to="https://www.growthcreators.ai/about-us" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link to="#" className="hover:text-cyan-400 transition-colors">Careers</Link></li>
              <li><Link to="#" className="hover:text-cyan-400 transition-colors">Blog</Link></li>
              <li><Link to="#" className="hover:text-cyan-400 transition-colors">Press Kit</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4 tracking-wider">Legal</h3>
            <ul className="space-y-2 text-sm text-cyan-400/70">
              <li><Link to="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="hover:text-cyan-400 transition-colors">Cookie Policy</Link></li>
              <li><Link to="#" className="hover:text-cyan-400 transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="pt-8 border-t border-cyan-400/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <a href="#" className="text-cyan-400/70 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-cyan-400/70 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-cyan-400/70 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-cyan-400/70 hover:text-cyan-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-cyan-400/70 hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-cyan-400/70">
              © {new Date().getFullYear()} AI Growth Creators. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};