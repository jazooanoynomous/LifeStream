import React from 'react';
import { Building2, Mail, Phone, MapPin, Clock, Shield, Award } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg">
                  <Building2 className="text-white" size={28} />
                </div>
                <div className="text-2xl font-bold">
                  <span className="text-orange-500">Life</span>
                  <span className="text-white">stream</span>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg max-w-md">
                Leading contracting establishment providing exceptional construction, 
                trading, and logistics services with a commitment to quality and customer satisfaction.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Shield size={16} className="text-orange-500" />
                  <span className="text-sm">Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Award size={16} className="text-orange-500" />
                  <span className="text-sm">15+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Clock size={16} className="text-orange-500" />
                  <span className="text-sm">24/7 Support</span>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-orange-500">Quick Links</h4>
              <div className="space-y-3">
                {[
                  { name: 'Home', id: 'hero' },
                  { name: 'About Us', id: 'about' },
                  { name: 'Our Services', id: 'services' },
                  { name: 'Projects', id: 'projects' },
                  { name: 'Contact', id: 'contact' }
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-gray-300 hover:text-orange-500 transition-colors duration-200 text-left"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-orange-500">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail className="text-orange-500 mt-1" size={18} />
                  <div>
                    <a 
                      href="mailto:info@lifestream.com"
                      className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                    >
                      info@lifestream.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="text-orange-500 mt-1" size={18} />
                  <div>
                    <a 
                      href="tel:+966598228352"
                      className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                    >
                     +966598228352
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="text-orange-500 mt-1" size={18} />
                  <div>
                    <p className="text-gray-300">Kingdom of Saudi Arabia</p>
                    <p className="text-gray-400 text-sm">Serving all Saudi Arabia</p>                 
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Overview */}
          <div className="border-t border-gray-800 pt-8 mb-8">
            <h4 className="text-xl font-bold text-orange-500 mb-4">Our Services</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
              <div>
                <h5 className="font-semibold text-white mb-2">Construction</h5>
                <ul className="space-y-1">
                  <li>Excavation & Backfilling</li>
                  <li>Electrical Installations</li>
                  <li>Fire Safety Systems</li>
                  <li>Mechanical Services</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-white mb-2">Trading</h5>
                <ul className="space-y-1">
                  <li>IT Equipment Supply</li>
                  <li>Office Essentials</li>
                  <li>Auto & Machinery Parts</li>
                  <li>Security Solutions</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-white mb-2">Logistics</h5>
                <ul className="space-y-1">
                  <li>Manpower Services</li>
                  <li>Equipment Rental</li>
                  <li>Import/Export Services</li>
                  <li>Cooling Services</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Lifestream Trading & Contracting. All rights reserved.
              </p>
              
              <div className="flex space-x-6 text-sm text-gray-400">
                <button className="hover:text-orange-500 transition-colors duration-200">
                  Privacy Policy
                </button>
                <button className="hover:text-orange-500 transition-colors duration-200">
                  Terms of Service
                </button>
                <button className="hover:text-orange-500 transition-colors duration-200">
                  Safety Policy
                </button>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-800">
              <p className="text-center text-gray-400 text-sm">
                Building excellence through quality craftsmanship and innovative solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;