import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Code, 
  MessageSquare, 
  Sparkles,
  ChevronRight,
  Users,
  Zap,
  Shield,
  ArrowRight,
  Cpu,
  Blocks,
  LineChart
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';
import { FeatureCard } from './components/FeatureCard';
import { TestimonialCard } from './components/TestimonialCard';
import { StatsCounter } from './components/StatsCounter';
import { DemoChat } from './components/DemoChat';

const features = [
  {
    icon: Brain,
    title: 'Natural Conversations',
    description: 'Experience human-like interactions with our advanced AI. No more rigid commands or complex syntax.'
  },
  {
    icon: Blocks,
    title: 'Universal Knowledge',
    description: 'From academic research to creative projects, access comprehensive knowledge across all domains.'
  },
  {
    icon: Code,
    title: 'Code Generation',
    description: 'Build entire applications with AI guidance. Get clean, efficient code in any programming language.'
  },
  {
    icon: LineChart,
    title: 'Learning Companion',
    description: 'Receive personalized explanations and insights tailored to your learning style and pace.'
  }
];

const testimonials = [
  {
    quote: "Ultimate AI has transformed how I approach software development. It's like having a senior developer by my side 24/7.",
    author: "Sarah Chen",
    role: "Senior Software Engineer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
  },
  {
    quote: "The code generation capabilities are mind-blowing. I've cut my development time in half while maintaining high quality.",
    author: "Michael Rodriguez",
    role: "Tech Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
  },
  {
    quote: "As a researcher, having access to such vast knowledge with natural conversation ability is invaluable.",
    author: "Dr. Emily Watson",
    role: "Research Scientist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400"
  }
];

export const LandingPage: React.FC = () => {
  return (
    <div className="bg-[#000913] text-cyan-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.1)_0%,rgba(0,9,19,1)_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold cyber-text-glow tracking-tight">
                Your Brilliant AI Partner for Everything
              </h1>
              <p className="text-xl text-cyan-400/80">
                Get instant help with writing, analysis, coding, and creative work through natural conversations with a next-generation AI.
              </p>
              <div className="flex items-center gap-4">
                <Link to="/auth">
                  <Button size="lg" className="group">
                    Try Ultimate AI Free
                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <span className="text-sm text-cyan-400/60">
                  10,000+ professionals already using
                </span>
              </div>
            </div>
            <div className="cyber-container p-6">
              <DemoChat />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-cyan-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatsCounter value="1M+" label="Questions Answered Daily" />
            <StatsCounter value="10k+" label="Active Users" />
            <StatsCounter value="150+" label="Supported Languages" />
            <StatsCounter value="99.9%" label="Accuracy Rate" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold cyber-text-glow mb-4">
              Supercharge Your Productivity
            </h2>
            <p className="text-lg text-cyan-400/70 max-w-2xl mx-auto">
              Experience the next generation of AI assistance with features designed to transform how you work.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-cyan-400/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold cyber-text-glow mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-cyan-400/70 max-w-2xl mx-auto">
              Join thousands of professionals who've transformed their work with Ultimate AI.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold cyber-text-glow mb-4">
              Choose Your Access Level
            </h2>
            <p className="text-lg text-cyan-400/70 max-w-2xl mx-auto">
              Flexible plans designed to scale with your needs.
            </p>
          </div>
          <div className="cyber-container p-8">
            <stripe-pricing-table 
              pricing-table-id="prctbl_1QNHd9Djv6YUQzJFuQ0V8UUX"
              publishable-key="pk_test_51NFvINDjv6YUQzJFAN92qLFOZigoKzrsG6w23ntUlgxpYdlKjPL4qG74Cydqi0aAYmx8QpXx0wccqxFSXIhPiFXR00qbDBWu67">
            </stripe-pricing-table>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-cyan-400/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold cyber-text-glow mb-6">
            Start Building with AI Today
          </h2>
          <p className="text-lg text-cyan-400/70 mb-8 max-w-2xl mx-auto">
            Join over 10,000 professionals already using Ultimate AI. Try it free for 7 days, no credit card required.
          </p>
          <Link to="/auth">
            <Button size="lg" className="group">
              Get Started Free
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <p className="mt-4 text-sm text-cyan-400/60">
            100% satisfaction guaranteed • Cancel anytime
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};