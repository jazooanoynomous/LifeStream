import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "Next.js", level: 88 },
        { name: "CSS/SCSS", level: 92 },
        { name: "Tailwind CSS", level: 90 }
      ],
      color: "blue"
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "Express.js", level: 88 },
        { name: "FastAPI", level: 82 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 88 }
      ],
      color: "green"
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 95 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Firebase", level: 85 },
        { name: "GraphQL", level: 78 },
        { name: "Jest", level: 85 }
      ],
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-500",
      green: "bg-green-500",
      purple: "bg-purple-500"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <div key={category.title} className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <span className="text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-1000 ease-out ${getColorClasses(category.color)}`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Certifications */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8">Certifications & Awards</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">AWS Solutions Architect</h4>
                <p className="text-gray-600">Amazon Web Services</p>
                <p className="text-sm text-gray-500 mt-2">2023</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">Google Cloud Professional</h4>
                <p className="text-gray-600">Google Cloud Platform</p>
                <p className="text-sm text-gray-500 mt-2">2024</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-2">React Developer Certificate</h4>
                <p className="text-gray-600">Meta (Facebook)</p>
                <p className="text-sm text-gray-500 mt-2">2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;