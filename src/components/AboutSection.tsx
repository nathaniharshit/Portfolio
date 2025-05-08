
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Code, Book } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, experience, and what drives me to create amazing digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
            <p className="text-muted-foreground mb-4">
              I'm a passionate developer with expertise in creating modern web applications and digital experiences. 
              With a strong foundation in design principles and technical skills, I bridge the gap between 
              aesthetics and functionality.
            </p>
            <p className="text-muted-foreground mb-6">
              I believe in crafting solutions that not only solve problems but also provide delightful 
              user experiences. My approach combines clean code practices with creative problem-solving 
              to deliver projects that stand out.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-secondary font-medium">Name:</span>
                <span>Harshit Nathani</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-secondary font-medium">Email:</span>
                <span>nathaniharshit01@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-secondary font-medium">Location:</span>
                <span>Vadodara, India</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-secondary font-medium">Education:</span>
                <span>Bachelor's in Information & Technology</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-secondary font-medium">University:</span>
                <span>Charotar University of Science and Technology</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-secondary font-medium">Contact Number:</span>
                <span>+91 7567608326</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-up">
            <Card className="bg-card hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Book className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-2">Student Journey</h4>
                <p className="text-muted-foreground">
                  Actively learning and building real-world web development projects using MERN stack, contributing to open source, and participating in hackathons to grow as a developer.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Code className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-2">Development</h4>
                <p className="text-muted-foreground">
                  Building efficient, maintainable and scalable applications with modern technologies.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-2">Leadership & Impact</h4>
                <p className="text-muted-foreground">
                  Active member of AIESEC, organizing social impact events and enhancing cross-cultural collaboration while building professional communication skills.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Code className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-2">Projects</h4>
                <p className="text-muted-foreground">
                  Built multiple mini-projects using MERN stack, React, and Flask, including a job finder website and carbon footprint tracker for coal mines.
                </p>
              </CardContent>
            </Card>


          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
