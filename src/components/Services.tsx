import React, { useState } from 'react';
import { 
  Building, 
  Truck, 
  Settings, 
  Zap, 
  Monitor, 
  Shield, 
  Wrench,
  Package,
  HardHat,
  Cpu,
  Camera,
  Snowflake
} from 'lucide-react';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('contracting');

  const serviceCategories = {
    contracting: {
      title: "Contracting Services",
      icon: Building,
      color: "orange",
      services: [
        {
          icon: HardHat,
          title: "Excavation & Backfilling",
          description: "Professional excavation services with material supply for backfilling projects.",
          image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          icon: Zap,
          title: "Electrical Installations",
          description: "UPS installation (3kVA to 1000kVA), power generators, cable pulling and termination.",
          image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          icon: Shield,
          title: "Fire Safety Systems",
          description: "Fire alarm and fire fighting system installation and maintenance.",
          image: "https://images.pexels.com/photos/280076/pexels-photo-280076.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          icon: Settings,
          title: "Mechanical Services",
          description: "CRAH and CRAC AC installation, raised floor installation, metal fabrication.",
          image: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
      ]
    },
    trading: {
      title: "Trading Services",
      icon: Package,
      color: "navy",
      services: [
        {
          icon: Monitor,
          title: "IT Equipment Trading",
          description: "Supply of computers, laptops, and IT equipment for businesses and organizations.",
          image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          icon: Package,
          title: "Office Essentials",
          description: "Complete office furniture, stationery, tools, and equipment supplies.",
          image: "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          icon: Wrench,
          title: "Auto & Machinery Parts",
          description: "Supply of automotive and machinery parts for various industries.",
          image: "https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          icon: Camera,
          title: "Security Solutions",
          description: "CCTV cameras, smart building solutions, and attendance recording machines.",
          image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
      ]
    },
    logistics: {
      title: "Logistics Services",
      icon: Truck,
      color: "steel",
      services: [
        {
          icon: HardHat,
          title: "Manpower Services",
          description: "Skilled and unskilled manpower outsourcing, deployment, and rental services.",
          image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          icon: Settings,
          title: "Equipment Rental",
          description: "Construction and inspection equipment rental with professional operators.",
          image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          icon: Truck,
          title: "Import/Export Services",
          description: "Complete import, export, and re-export assistance with market analysis.",
          image: "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          icon: Snowflake,
          title: "Cooling Services",
          description: "Refrigeration and cooling services, supplies, and maintenance solutions.",
          image: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
      ]
    }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      orange: {
        bg: "bg-orange-500",
        text: "text-orange-600",
        bgLight: "bg-orange-100",
        border: "border-orange-500"
      },
      navy: {
        bg: "bg-navy-600",
        text: "text-navy-600",
        bgLight: "bg-navy-100",
        border: "border-navy-500"
      },
      steel: {
        bg: "bg-steel-500",
        text: "text-steel-600",
        bgLight: "bg-steel-100",
        border: "border-steel-500"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy-900">
              Our <span className="text-orange-500">Services</span>
            </h2>
            <p className="text-xl text-steel-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions for construction, trading, and logistics needs
            </p>
          </div>

          {/* Service Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(serviceCategories).map(([key, category]) => {
              const IconComponent = category.icon;
              const isActive = activeCategory === key;
              const colorClasses = getColorClasses(category.color);
              
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-full font-semibold transition-all duration-200 ${
                    isActive 
                      ? `${colorClasses.bg} text-white shadow-lg transform scale-105` 
                      : 'bg-gray-100 text-steel-600 hover:bg-gray-200'
                  }`}
                >
                  <IconComponent size={20} />
                  <span>{category.title}</span>
                </button>
              );
            })}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories[activeCategory as keyof typeof serviceCategories].services.map((service, index) => {
              const IconComponent = service.icon;
              const colorClasses = getColorClasses(serviceCategories[activeCategory as keyof typeof serviceCategories].color);
              
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className={`absolute top-4 left-4 p-3 ${colorClasses.bgLight} rounded-lg`}>
                      <IconComponent className={colorClasses.text} size={24} />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-navy-900">{service.title}</h3>
                    <p className="text-steel-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Partners Section */}
          <div className="mt-20 bg-gradient-to-r from-light-gray to-gray-100 rounded-2xl p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-navy-900 mb-4">Partners & Affiliates</h3>
              <p className="text-steel-600 text-lg max-w-4xl mx-auto leading-relaxed">
                Keeping in view the requirements of the market, it's very difficult to keep the balance 
                of supply and demand. Along with our self-owned equipment & directly hired staff, we supply 
                equipment & manpower from our business partners & affiliates as well.
              </p>
            </div>
            <div className="text-center">
              <p className="text-steel-600 font-medium">
                We are well connected with well-known service providers of similar type, 
                directly and via our partners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;