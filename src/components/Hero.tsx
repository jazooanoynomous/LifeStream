import React from 'react';
import { ArrowDown, Phone, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-900 via-navy-800 to-steel-700 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-500/5 to-navy-600/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            <span className="block text-orange-500 mb-2">Lifestream</span>
            Trading & Contracting
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed animate-fade-in delay-200 max-w-4xl mx-auto">
            Your trusted partner for construction, renovation, maintenance & logistics services. 
            Delivering exceptional results through skilled craftsmanship and commitment to excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in delay-400">
            <button
              onClick={scrollToServices}
              className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transform hover:scale-105 transition-all duration-200 shadow-lg text-lg"
            >
              Explore Our Services
            </button>
            
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-navy-900 transition-all duration-200 text-lg"
            >
              Get Quote
            </button>
          </div>

          {/* Quick Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in delay-600">
            <div className="flex items-center justify-center space-x-3 text-gray-200">
              <Phone className="text-orange-500" size={20} />
              <span>+966598228352</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-200">
              <Mail className="text-orange-500" size={20} />
              <span>info@lifestream.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-200">
              <MapPin className="text-orange-500" size={20} />
              <span>KSA</span>
            </div>
          </div>
          
          <button
            onClick={scrollToServices}
            className="mt-12 animate-bounce text-gray-300 hover:text-orange-500 transition-colors duration-200"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;