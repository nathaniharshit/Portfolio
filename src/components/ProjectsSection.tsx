
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Carbmit",
    description: "Developing Carbmit — a web platform that estimates carbon emissions from coal mining and guides operations toward carbon neutrality.",
    image: "carbmit.jpg",
    tags: ["React", "Node.js", "MongoDB", "Vite"],
    link: "https://carb-mit-final.vercel.app"
  },
  {
    id: 2,
    title: "Jobify",
    description: "A website that helps the user if he/she is an employee to find job or if he/she is a company owner so he/she can hire employee.",
    image: "jobify.png",
    tags: ["React", "Node.js", "MongoDB", "Vite","Tail-Wind CSS"],
    link: "https://jobify-gold-five.vercel.app"
  },
  {
    id: 3,
    title: "EmployManage",
    description: "A website that helps company or an organisation to manage the employees that are working in the company.",
    image: "employmanage.jpg",
    tags: ["React", "Node.js", "MongoDB", "Vite","Tail-Wind CSS"],
    link: "https://employ-manage.vercel.app"
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
            Each project is briefly described with links to code repositories and live demos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="group portfolio-item animate-fade-in" style={{animationDelay: `${project.id * 0.1}s`}}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all">
                <div className="h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button asChild className="w-full bg-primary/90 hover:bg-primary">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="px-8">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
