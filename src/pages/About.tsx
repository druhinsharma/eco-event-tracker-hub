
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, RecycleIcon, CircleCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-eco-green/10 relative overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-eco-green/20 text-eco-green mb-4"
            >
              <Leaf className="mr-1 h-4 w-4" />
              Our Mission
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold mb-6"
            >
              About the Event
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-8 text-muted-foreground"
            >
              Creating a sustainable future through technology and community engagement
            </motion.p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-eco-green opacity-10" />
        <div className="absolute top-10 -right-10 w-28 h-28 rounded-full bg-eco-green opacity-10" />
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
              
              <p className="text-muted-foreground mb-6">
                EcoEvent was founded with a clear mission: to demonstrate how large-scale events can be hosted with minimal environmental impact. 
                We believe that with the right approaches to waste management, community engagement, and technological innovation, 
                events can be both enjoyable and sustainable.
              </p>
              
              <p className="text-muted-foreground mb-6">
                Our vision is to create a blueprint for future events, showcasing practical solutions that can be implemented anywhere. 
                By integrating smart technology with human behavior change, we're building a model for sustainable gatherings that doesn't 
                compromise on experience.
              </p>
              
              <div className="space-y-3 mt-8">
                <div className="flex items-start gap-3">
                  <CircleCheck className="h-5 w-5 text-eco-green mt-1 flex-shrink-0" />
                  <p>Achieve zero waste through smart waste management</p>
                </div>
                <div className="flex items-start gap-3">
                  <CircleCheck className="h-5 w-5 text-eco-green mt-1 flex-shrink-0" />
                  <p>Engage attendees through gamification and rewards</p>
                </div>
                <div className="flex items-start gap-3">
                  <CircleCheck className="h-5 w-5 text-eco-green mt-1 flex-shrink-0" />
                  <p>Create educational opportunities around sustainability</p>
                </div>
                <div className="flex items-start gap-3">
                  <CircleCheck className="h-5 w-5 text-eco-green mt-1 flex-shrink-0" />
                  <p>Demonstrate the power of IoT in environmental conservation</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=800" 
                alt="Nature landscape"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 border-4 border-eco-green rounded-lg -z-10" />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Smart Waste Management Section */}
      <section className="py-16 bg-eco-gray-light dark:bg-slate-800/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Smart Waste Management</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our innovative approach combines IoT technology with behavioral science to create 
              an effective waste management system that encourages proper disposal and recycling.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="eco-card">
                <CardContent className="p-6">
                  <div className="mb-4 p-3 bg-eco-green/10 rounded-full w-14 h-14 flex items-center justify-center">
                    <RecycleIcon className="h-7 w-7 text-eco-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">IoT Smart Bins</h3>
                  <p className="text-muted-foreground">
                    Each waste bin is equipped with fill-level sensors, weight measurements, and automatic sorting capabilities. 
                    The bins communicate in real-time with our central system, optimizing collection routes and preventing overflow.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="eco-card">
                <CardContent className="p-6">
                  <div className="mb-4 p-3 bg-eco-green/10 rounded-full w-14 h-14 flex items-center justify-center">
                    <svg className="h-7 w-7 text-eco-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Mobile App Integration</h3>
                  <p className="text-muted-foreground">
                    Our mobile app allows attendees to scan QR codes on waste, locate the nearest appropriate bin, 
                    track their recycling impact, and earn rewards for sustainable behavior.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="eco-card">
                <CardContent className="p-6">
                  <div className="mb-4 p-3 bg-eco-green/10 rounded-full w-14 h-14 flex items-center justify-center">
                    <svg className="h-7 w-7 text-eco-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Data Analytics</h3>
                  <p className="text-muted-foreground">
                    Real-time analytics provide insights on waste generation patterns, recycling rates, and overall 
                    environmental impact. This data helps us continuously improve and adapt our system.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Partners & Sponsors</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're proud to collaborate with organizations that share our vision for a sustainable future.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all"
              >
                <div className="bg-eco-gray p-4 rounded-lg w-full h-16 flex items-center justify-center">
                  <span className="text-muted-foreground font-medium">Partner {i}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
