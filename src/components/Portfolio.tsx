import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  category: 'web' | 'mobile' | 'design';
  details: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with React and Node.js",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "web",
    details: "A full-featured e-commerce platform built with React and Node.js. Features include user authentication, product catalog, shopping cart, secure payments with Stripe integration, order management, and responsive design. The backend uses MongoDB for data storage and includes comprehensive API endpoints for all functionality."
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative project management tool",
    image: "https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Vue.js", "Firebase", "Vuetify"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "web",
    details: "A comprehensive task management application built with Vue.js and Firebase. Features real-time collaboration, drag-and-drop task organization, team member management, deadline tracking, file attachments, and progress analytics. The app uses Vuetify for a material design interface and Firebase for real-time database and authentication."
  },
  {
    id: 3,
    title: "Mobile Weather App",
    description: "React Native weather application",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React Native", "Weather API", "Redux"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "mobile",
    details: "A beautiful weather application for iOS and Android built with React Native. Features current weather conditions, 7-day forecasts, location-based weather detection, weather maps, severe weather alerts, and customizable themes. Uses Redux for state management and integrates with multiple weather APIs for accurate data."
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Creative portfolio with animations",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Next.js", "Three.js", "Framer Motion"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "design",
    details: "An interactive portfolio website featuring 3D animations and smooth transitions. Built with Next.js for optimal performance and SEO, Three.js for 3D graphics, and Framer Motion for animations. The site includes a dynamic project showcase, contact form with email integration, and a fully responsive design optimized for all devices."
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media",
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Angular", "D3.js", "Node.js", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "web",
    details: "A comprehensive social media analytics dashboard built with Angular and Node.js. Features include multi-platform data integration, real-time analytics, customizable charts and graphs using D3.js, automated reporting, team collaboration tools, and data export capabilities. The backend uses PostgreSQL for robust data storage and analysis."
  },
  {
    id: 6,
    title: "AI Content Generator",
    description: "AI-powered content creation tool",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "OpenAI API", "React", "FastAPI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "web",
    details: "An innovative AI-powered content generation platform that helps create blog posts, social media content, and marketing copy. Built with Python and FastAPI for the backend, React for the frontend, and integrates with OpenAI's GPT models. Features include content templates, tone adjustment, multi-language support, and content optimization suggestions."
  }
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'design'>('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Portfolio
          </h2>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { key: 'all', label: 'All Projects' },
              { key: 'web', label: 'Web Apps' },
              { key: 'mobile', label: 'Mobile Apps' },
              { key: 'design', label: 'Design' }
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key as any)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  filter === key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          
          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex gap-2">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={16} />
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all duration-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
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
              <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {selectedProject.details}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors duration-200"
                >
                  <Github size={16} />
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;