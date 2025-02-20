import React, { useState, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, BookOpen, Code2, Database, Brain, Users, MessageSquare, Lightbulb, Target } from 'lucide-react';

// Sample project data - replace with your actual projects
const projects = [
  {
    title: "Work Place Activity Recognition",
    description: "This project aims to maximize real-time productivity insights in the workplace while ensuring minimal privacy intrusion. Using YOLOv8, the system detects and analyzes workplace activities to improve employee efficiency and optimize operational costs.",
    tags: ["Python", "YOLOV8", "SQL", "Google Colab"],
    github: "https://github.com/kapperasrisailam2001/Workplace-Activity-Recognition"
  }
];

// Intermediate projects/skills
const intermediateProjects = [
  {
    title: "Data Analysis with Python",
    description: "Currently working on various data analysis projects using Python libraries like Pandas and NumPy. Learning advanced data visualization techniques with Matplotlib and Seaborn.",
    progress: 75,
    skills: ["Data Cleaning", "Statistical Analysis", "Data Visualization"]
  },
  {
    title: "Machine Learning Fundamentals",
    description: "Building a strong foundation in machine learning concepts and implementing basic algorithms from scratch.",
    progress: 70,
    skills: ["Supervised Learning", "Model Evaluation", "Feature Engineering"]
  },
  {
    title: "SQL Database Management",
    description: "Developing intermediate SQL skills through practical projects and database design exercises.",
    progress: 80,
    skills: ["Query Optimization", "Database Design", "Data Modeling"]
  }
];

// Soft Skills for Data Science
const softSkills = [
  {
    icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
    title: "Analytical Thinking",
    description: "Strong ability to break down complex problems and derive meaningful insights from data."
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-blue-600" />,
    title: "Communication",
    description: "Skilled at explaining technical concepts to non-technical stakeholders and presenting data insights clearly."
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "Collaboration",
    description: "Experience working in cross-functional teams and contributing to group projects effectively."
  },
  {
    icon: <Target className="w-8 h-8 text-blue-600" />,
    title: "Problem-Solving",
    description: "Proven ability to approach challenges methodically and develop innovative solutions."
  }
];

// Sample education data - replace with your actual education
const education = [
  {
    degree: "Master of Computer Applications",
    school: "University Postgraduate College Secunderabad (OUPGCS)",
    year: "2022-2024",
    description: "focuses on advanced computer applications, programming, software development, databases, networking, and emerging technologies like AI and cloud computing."
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Mahatma Gandhi University Nalgonda",
    year: "2019-2022",
    description: "Focus on Programming and Mathematics with 8.1/10.0 CGPA"
  },
  {
    degree: "Intermediate (10+2)",
    school: "MJPTBCWRJC - Nagarjuna Sagar",
    year: "2017-2019",
    description: "Mathematics, Physics, and Chemistry with Computer Science  with 908/1000"
  },
  {
    degree: "SSC (10th Class)",
    school: "ZPHS Padamatipally",
    year: "2016-2017",
    description: "Completed Secondary School Certificate with 7.8/10.0 CGPA"
  }
];

function App() {
  const [profileImage, setProfileImage] = useState<string>("C:\Users\srisailam kappera\OneDrive\Desktop\project\sri_profile-pic.png");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="flex flex-col items-center text-center">
            <div className="relative group">
              <img
                src={profileImage}
                alt="Profile"
                className="w-32 h-32 rounded-full mb-8 border-4 border-white shadow-lg cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-black bg-opacity-50 text-white text-sm py-1 px-2 rounded">
                  Click to change photo
                </div>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
            </div>
            <h1 className="text-4xl font-bold mb-4">KAPPERA SRISAILAM</h1>
            <p className="text-xl mb-6">Data Scientist | Python Developer</p>
            <div className="flex space-x-4">
              <a href="https://github.com/kapperasrisailam2001" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/kapperasrisailam/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:kapperasrisailam2001@gmail.com" className="hover:text-blue-200 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Core Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <Code2 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Programming</h3>
              <p className="text-gray-600">Python, SQL</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <Database className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data Science</h3>
              <p className="text-gray-600">Pandas, NumPy, PostgreSQL, MySQL</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <Brain className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
              <p className="text-gray-600">scikit-learn, TensorFlow, PyTorch</p>
            </div>
          </div>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Soft Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {softSkills.map((skill, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">{skill.title}</h3>
                <p className="text-gray-600 text-center">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden mb-8 last:mb-0">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intermediate Skills Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Skills in Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {intermediateProjects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-blue-600">Progress</span>
                    <span className="text-sm font-medium text-blue-600">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <div className="max-w-3xl mx-auto">
            {education.map((edu, index) => (
              <div key={index} className="mb-8 last:mb-0">
                <div className="flex items-start">
                  <div className="mr-4">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-gray-600">{edu.school}</p>
                    <p className="text-gray-500">{edu.year}</p>
                    <p className="text-gray-600 mt-2">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} Kappera Srisailam. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;