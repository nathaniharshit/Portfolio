
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

type Skill = {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'other';
};

type SkillGroup = {
  name: string;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    name: 'Frontend Development',
    skills: [
      { name: 'HTML & CSS', level: 90, category: 'frontend' },
      { name: 'JavaScript', level: 85, category: 'frontend' },
      { name: 'React', level: 80, category: 'frontend' },
      { name: 'TypeScript', level: 75, category: 'frontend' },
      { name: 'Tailwind CSS', level: 85, category: 'frontend' },
    ]
  },
  {
    name: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 70, category: 'backend' },
      { name: 'Express', level: 75, category: 'backend' },
      { name: 'MongoDB', level: 65, category: 'backend' },
      { name: 'REST API', level: 80, category: 'backend' },
    ]
  },
  {
    name: 'Tools & Other',
    skills: [
      { name: 'Git & GitHub', level: 85, category: 'other' },
      { name: 'UI/UX Design', level: 70, category: 'design' },
      { name: 'Responsive Design', level: 90, category: 'design' },
      { name: 'Testing', level: 65, category: 'other' },
    ]
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding py-20 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've worked with a range of technologies in the web development world.
            Here's an overview of my technical skills and proficiency levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, groupIndex) => (
            <Card key={groupIndex} className="animate-slide-up" style={{animationDelay: `${groupIndex * 0.1}s`}}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 border-b pb-2">{group.name}</h3>
                <div className="space-y-6">
                  {group.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2 bg-muted" indicatorClassName="bg-secondary" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-6 text-center">Technologies I Work With</h3>
              <div className="flex flex-wrap justify-center gap-8">
                {['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind', 'Node.js', 'Git', 'Figma'].map((tech, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="h-16 w-16 bg-muted rounded-xl flex items-center justify-center shadow-sm">
                      <span className="text-xl font-bold text-secondary">{tech.charAt(0)}</span>
                    </div>
                    <span className="mt-2 text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
