import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Shield } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', company: '', service: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const services = [
    'Construction Services',
    'Electrical Installation',
    'IT Services & Supplies',
    'Trading Services',
    'Logistics Services',
    'Equipment Rental',
    'Fire Safety Systems',
    'Security Solutions',
    'Other'
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy-900">
              Get In <span className="text-orange-500">Touch</span>
            </h2>
            <p className="text-xl text-steel-600 max-w-3xl mx-auto leading-relaxed">
              Ready to start your next project? Contact us for a free consultation and quote.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-navy-900">
                  Let's Discuss Your Project
                </h3>
                <p className="text-lg text-steel-600 leading-relaxed mb-8">
                  Whether you need construction services, equipment trading, or logistics support, 
                  our team of experts is ready to help you achieve your goals. We provide 
                  comprehensive solutions tailored to your specific requirements.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-4 bg-orange-100 rounded-xl">
                    <Mail className="text-orange-600" size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-navy-900 mb-1">Email Us</h4>
                    <a 
                      href="mailto:info@lifestream.com"
                      className="text-steel-600 hover:text-orange-600 transition-colors duration-200 text-lg"
                    >
                      info@lifestream.com
                    </a>
                    <p className="text-steel-500 text-sm mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-4 bg-navy-100 rounded-xl">
                    <Phone className="text-navy-600" size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-navy-900 mb-1">Call Us</h4>
                    <a 
                      href="tel:++966598228352"
                      className="text-steel-600 hover:text-navy-600 transition-colors duration-200 text-lg"
                    >
                      +966 59 822 8352
                    </a>
                    <p className="text-steel-500 text-sm mt-1">Available 24/7 for emergencies</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-4 bg-steel-100 rounded-xl">
                    <MapPin className="text-steel-600" size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-navy-900 mb-1">Visit Us</h4>
                    <p className="text-steel-600 text-lg">Kingdom of Saudi Arabia</p>
                    <p className="text-steel-500 text-sm mt-1">Serving all Saudi Arabia</p>
                  </div>
                </div>
              </div>
              
              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-light-gray to-gray-100 p-8 rounded-2xl">
                <h4 className="font-bold text-xl mb-6 text-navy-900">Why Choose Lifestream?</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="text-orange-500" size={20} />
                    <span className="text-steel-600">Quick response within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="text-orange-500" size={20} />
                    <span className="text-steel-600">Licensed and insured professionals</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-orange-500" size={20} />
                    <span className="text-steel-600">15+ years of industry experience</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">
                    Quote Request Sent Successfully!
                  </h3>
                  <p className="text-steel-600">
                    Thank you for your interest. Our team will contact you within 24 hours 
                    with a detailed quote and project timeline.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-navy-900 mb-6">Request a Quote</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-navy-900 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your Full Name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-navy-900 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-navy-900 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your Company"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-navy-900 mb-2">
                        Service Required *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select a Service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-navy-900 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Please describe your project requirements, timeline, and any specific needs..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2 text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Quote Request</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;