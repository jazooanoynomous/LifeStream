import React, { useState } from 'react';
import { ExternalLink, Calendar, MapPin, Users } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  location: string;
  duration: string;
  teamSize: string;
  details: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Commercial Building Electrical Installation",
    category: "Electrical",
    description: "Complete electrical installation for a 20-story commercial building including UPS systems and generators.",
    image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Riyadh, KSA",
    duration: "8 months",
    teamSize: "25 specialists",
    details: "This project involved the complete electrical infrastructure setup for a modern commercial building. We installed UPS systems ranging from 100kVA to 500kVA, backup generators, comprehensive cable management systems, and smart building automation. The project was completed on time with zero safety incidents."
  },
  {
    id: 2,
    title: "Data Center Infrastructure Setup",
    category: "IT Infrastructure",
    description: "Complete data center setup including raised flooring, CRAC units, and cable management systems.",
    image: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Riyadh, KSA",
    duration: "6 months",
    teamSize: "30 technicians",
    details: "Comprehensive data center infrastructure project including raised floor installation, CRAC and CRAH AC systems, advanced cable tray and fiber runner systems, power distribution units, and environmental monitoring systems. The facility now supports over 1000 servers with 99.9% uptime guarantee."
  },
  {
    id: 3,
    title: "Industrial Excavation & Site Preparation",
    category: "Construction",
    description: "Large-scale excavation and site preparation for industrial facility construction.",
    image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Dammam, KSA",
    duration: "4 months",
    teamSize: "40 workers",
    details: "Major excavation project for a new industrial facility covering 50,000 square meters. The project included soil analysis, excavation to 8-meter depth, proper drainage systems, backfilling with quality materials, and site leveling. All environmental regulations were strictly followed."
  },
  {
    id: 4,
    title: "Smart Building Security System",
    category: "Security",
    description: "Implementation of comprehensive security system with CCTV, access control, and smart monitoring.",
    image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Jeddah, KSA",
    duration: "3 months",
    teamSize: "15 specialists",
    details: "Advanced security system installation featuring 200+ CCTV cameras, biometric access control systems, smart building automation, attendance recording machines, and centralized monitoring station. The system includes AI-powered analytics and mobile app integration for remote monitoring."
  },
  {
    id: 5,
    title: "Fire Safety System Installation",
    category: "Safety",
    description: "Complete fire alarm and suppression system for a multi-use complex.",
    image: "https://images.pexels.com/photos/280076/pexels-photo-280076.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Riyadh, KSA",
    duration: "5 months",
    teamSize: "20 technicians",
    details: "Comprehensive fire safety system including smoke detectors, heat sensors, sprinkler systems, fire alarm panels, emergency lighting, and evacuation systems. The installation covers 100,000 square feet and complies with all KSA fire safety regulations and international standards."
  },
  {
    id: 6,
    title: "Office Complex Fit-out",
    category: "Interior",
    description: "Complete office interior fit-out including furniture, IT setup, and electrical installations.",
    image: "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=800",
    location: "Khobar, KSA",
    duration: "4 months",
    teamSize: "35 professionals",
    details: "Full office complex transformation including modern furniture installation, complete IT infrastructure setup, advanced lighting systems, HVAC optimization, and smart office solutions. The project accommodates 500+ employees with flexible workspace configurations and state-of-the-art meeting facilities."
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', 'Electrical', 'IT Infrastructure', 'Construction', 'Security', 'Safety', 'Interior'];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy-900">
              Our <span className="text-orange-500">Projects</span>
            </h2>
            <p className="text-xl text-steel-600 max-w-3xl mx-auto leading-relaxed">
              Showcasing our expertise through successful project deliveries across various sectors
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  filter === category
                    ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                    : 'bg-white text-steel-600 hover:bg-orange-50 hover:text-orange-600 shadow-md'
                }`}
              >
                {category === 'all' ? 'All Projects' : category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-200">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-navy-900">{project.title}</h3>
                  <p className="text-steel-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="space-y-2 text-sm text-steel-500">
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-2 text-orange-500" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-2 text-orange-500" />
                      {project.duration}
                    </div>
                    <div className="flex items-center">
                      <Users size={14} className="mr-2 text-orange-500" />
                      {project.teamSize}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-navy-900">{selectedProject.title}</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <MapPin className="text-orange-500" size={16} />
                  <span className="text-steel-600">{selectedProject.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="text-orange-500" size={16} />
                  <span className="text-steel-600">{selectedProject.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="text-orange-500" size={16} />
                  <span className="text-steel-600">{selectedProject.teamSize}</span>
                </div>
              </div>
              
              <p className="text-steel-600 leading-relaxed text-lg">
                {selectedProject.details}
              </p>
              
              <div className="mt-6">
                <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-medium">
                  {selectedProject.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;