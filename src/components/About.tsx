import React from 'react';
import { Target, Eye, Shield, Users, Award, Lightbulb } from 'lucide-react';

const About = () => {
  const coreValues = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We prioritize honesty and transparency in all our dealings."
    },
    {
      icon: Award,
      title: "Quality",
      description: "We are committed to delivering high-quality workmanship and service."
    },
    {
      icon: Users,
      title: "Customer Satisfaction",
      description: "We strive to exceed our clients' expectations and build lasting relationships."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace new ideas and technologies to improve our processes and services."
    }
  ];

  return (
    <section id="about" className="py-20 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy-900">
              About <span className="text-orange-500">Lifestream</span>
            </h2>
            <p className="text-xl text-steel-600 max-w-3xl mx-auto leading-relaxed">
              Leading contracting establishment known for exceptional quality, reliability, 
              and commitment to customer satisfaction.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-orange-100 rounded-lg mr-4">
                  <Target className="text-orange-600" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-navy-900">Our Mission</h3>
              </div>
              <p className="text-steel-600 leading-relaxed text-lg">
                To provide high-quality contracting services to our clients, delivering exceptional 
                results through skilled craftsmanship, attention to detail, and a commitment to 
                customer satisfaction. We aim to build long-lasting relationships with our clients 
                and become their trusted partner for all their contracting needs.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-navy-100 rounded-lg mr-4">
                  <Eye className="text-navy-600" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-navy-900">Our Vision</h3>
              </div>
              <p className="text-steel-600 leading-relaxed text-lg">
                To become the leading contracting establishment in our region, known for our 
                exceptional quality of work, reliability, and commitment to customer satisfaction. 
                We envision a future where our brand is synonymous with superior craftsmanship 
                and unparalleled service.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-navy-900">Our Core Values</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <div className="p-4 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="text-orange-600" size={32} />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-navy-900">{value.title}</h4>
                  <p className="text-steel-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-12 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-500 mb-2">15+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-500 mb-2">100+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;