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
  Camera,
  Snowflake,
  Calendar,
  Route,
  MapPin,
  Clock
} from 'lucide-react';

const truckTypes = {
  monthly: {
    title: "Monthly Truck Rental",
    icon: Calendar,
    color: "navy", // changed to navy
    description: "Long-term truck rental solutions for consistent logistics needs",
    trucks: [
      {
        id: 1,
        icon: Truck,
        type: "Light Truck",
        capacity: "1-3 Tons",
        features: ["Driver included", "Fuel allowance", "Insurance covered", "24/7 support"],
        image: "https://www.mitsubishi-fuso.com/wp-content/uploads/2023/01/2020_Canter_Thumb.jpg", // replaced with relevant truck image
        description: "Perfect for daily deliveries and small cargo transportation"
      },
      {
        id: 2,
        icon: Truck,
        type: "Medium Truck",
        capacity: "3-7 Tons",
        features: ["Professional driver", "GPS tracking", "Loading assistance", "Maintenance included"],
        image: "https://s18391.pcdn.co/wp-content/uploads/2017/03/chevrolet-6500XD.jpg",
        description: "Ideal for medium-scale logistics and construction material transport"
      },
      {
        id: 3,
        icon: Truck,
        type: "Heavy Truck",
        capacity: "7-15 Tons",
        features: ["Expert operator", "Crane attachment option", "Extended coverage", "Priority maintenance"],
        image: "https://daimlertruckag-mbthub.scene7.com/is/image/daimlertruckagmbthub/actros_vv_predective_powertrain:4x3?ts=1750232307867&dpr=on,2.625",
        description: "Heavy-duty solutions for large construction and industrial projects"
      },
      {
        id: 4,
        icon: Truck,
        type: "Specialized Truck",
        capacity: "Custom",
        features: ["Customized solution", "Specialized equipment", "Trained operators", "Flexible terms"],
        image: "https://i.pinimg.com/736x/6a/8f/35/6a8f351e66f76221812965f90c3db3cc.jpg",
        description: "Specialized trucks for unique logistics and transportation requirements"
      }
    ]
  },
  trip: {
    title: "Trip-Based Truck Services",
    icon: Route,
    color: "steel", // changed to steel gray
    description: "Flexible truck services for one-time or occasional transportation needs",
    trucks: [
      {
        id: 1,
        icon: MapPin,
        type: "Local Delivery",
        capacity: "Within KSA Cities",
        features: ["Same day delivery", "Professional handling", "Real-time tracking", "Secure transport"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBSUSmAKmJNzpScRNy6yskfjXHzgGT85lyOQ&s",
        description: "Quick and efficient local deliveries across the KSA"
      },
      {
        id: 2,
        icon: Route,
        type: "Inter-City Transport",
        capacity: "KSA & GCC",
        features: ["Long distance specialist", "Cross-border documentation", "Customs clearance", "Insurance coverage"],
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lusmall.com%2Fmodel%2F199&psig=AOvVaw2oKW6Q1Vx6onyYS-u7wSnm&ust=1754910334034000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPil2tOMgI8DFQAAAAAdAAAAABAE",
        description: "Reliable inter-city and cross-border transportation services"
      },
      {
        id: 3,
        icon: Package,
        type: "Heavy Cargo Transport",
        capacity: "Oversized loads",
        features: ["Special permits", "Route planning", "Escort vehicles", "Loading equipment"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWDXglCVCv2nZsmHEA3LBod_nBLA_aTn8kwQ&s",
        description: "Specialized transport for heavy machinery and oversized cargo"
      },
      {
        id: 4,
        icon: Clock,
        type: "Emergency Transport",
        capacity: "24/7 availability",
        features: ["Immediate response", "24/7 availability", "Express delivery", "Emergency handling"],
        image: "https://image.made-in-china.com/202f0j00kDeozBJREHgN/High-Quality-Foton-4-2-Emergency-Road-Rescue-Tow-Truck-Road-Wrecker-Towing-Car.webp",
        description: "Emergency and urgent transportation services available round the clock"
      }
    ]
  }
};

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('transportation');
  const [activeTruckType, setActiveTruckType] = useState('monthly');

  const serviceCategories = {
     transportation: { // renamed from logistics
      title: "Transportation Services",
      icon: Truck,
      color: "steel",
      services: []
    },
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
    }
  };

  const getColorClasses = (color) => {
    const colors = {
      orange: {
        bg: "bg-orange-500",
        text: "text-orange-600",
        bgLight: "bg-orange-100",
        border: "border-orange-500"
      },
      navy: {
        bg: "bg-[#0A2E5D]", // primary navy blue
        text: "text-[#0A2E5D]",
        bgLight: "bg-[#e6f0ff]", // very light navy-ish for bgLight
        border: "border-[#0A2E5D]"
      },
      steel: {
        bg: "bg-[#4B4F56]", // steel gray
        text: "text-[#4B4F56]",
        bgLight: "bg-[#d6d8db]", // lighter steel gray for bgLight
        border: "border-[#4B4F56]"
      }
    };
    return colors[color] || colors.navy;
  };

  // Render trucks grid for given truckType category (monthly/trip)
  const renderTruckCards = (truckCategory) => {
    const category = truckTypes[truckCategory];
    const colorClasses = getColorClasses(category.color);

    return (
      <>
        <h3 className={`text-3xl font-bold mb-6 ${colorClasses.text}`}>
          {category.title}
        </h3>
        <p className="mb-10 text-steel-600 max-w-xl">{category.description}</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {category.trucks.map((truck) => {
            const IconComponent = truck.icon;
            return (
              <div key={truck.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={truck.image}
                    alt={truck.type}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className={`absolute top-4 left-4 p-3 ${colorClasses.bgLight} rounded-lg`}>
                    <IconComponent className={colorClasses.text} size={24} />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2 text-navy-900">{truck.type}</h4>
                  <p className="text-steel-600 mb-1">{truck.description}</p>
                  <p className="text-steel-600 font-semibold mb-1">
                    Capacity: {truck.capacity}
                  </p>
                  {/* Prices removed as requested */}
                  <ul className="list-disc list-inside text-steel-600">
                    {truck.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0A2E5D]">
              Our <span className="text-[#F57C00]">Services</span>
            </h2>
            <p className="text-xl text-[#4B4F56] max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions for construction, trading, and transportation needs
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
                      : "bg-gray-100 text-[#4B4F56] hover:bg-gray-200"
                  }`}
                >
                  <IconComponent size={20} />
                  <span>{category.title}</span>
                </button>
              );
            })}
          </div>

          {/* Main Content Area */}
          {activeCategory === 'transportation' ? (
            <>
              {/* Truck Type Tabs */}
              <div className="flex justify-center gap-6 mb-10">
                {Object.entries(truckTypes).map(([key, category]) => {
                  const isActive = activeTruckType === key;
                  // Use navy bg for monthly, steel bg for trip
                  const bgClass = category.color === 'navy' ? "bg-[#0A2E5D]" : "bg-[#4B4F56]";
                  const textClass = "text-white";

                  return (
                    <button
                      key={key}
                      onClick={() => setActiveTruckType(key)}
                      className={`px-5 py-3 rounded-full font-semibold transition-all duration-200 ${
                        isActive
                          ? `${bgClass} ${textClass} shadow-lg`
                          : "bg-gray-100 text-[#4B4F56] hover:bg-gray-200"
                      }`}
                    >
                      {category.title}
                    </button>
                  );
                })}
              </div>

              {/* Render truck cards */}
              {renderTruckCards(activeTruckType)}
            </>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceCategories[activeCategory].services.map((service, index) => {
                const IconComponent = service.icon;
                const colorClasses = getColorClasses(serviceCategories[activeCategory].color);
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
                      <div className={`absolute top-4 left-4 p-3 ${colorClasses.bgLight} rounded-lg`}>
                        <IconComponent className={colorClasses.text} size={24} />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-[#0A2E5D]">{service.title}</h3>
                      <p className="text-[#4B4F56] leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Partners Section */}
          <div className="mt-20 bg-gradient-to-r from-[#e2e4e7] to-[#f7f8f9] rounded-2xl p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-[#0A2E5D] mb-4">Partners & Affiliates</h3>
              <p className="text-[#4B4F56] text-lg max-w-4xl mx-auto leading-relaxed">
                Keeping in view the requirements of the market, it's very difficult to keep the balance 
                of supply and demand. Along with our self-owned equipment & directly hired staff, we supply 
                equipment & manpower from our business partners & affiliates as well.
              </p>
            </div>
            <div className="text-center">
              <p className="text-[#4B4F56] font-medium">
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
