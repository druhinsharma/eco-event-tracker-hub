
import React from 'react';
import { ArrowRight, Leaf, Users, MapPin, Calendar, RecycleIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import CountdownTimer from '@/components/CountdownTimer';
import { motion } from 'framer-motion';

// Set the event date to 3 months from now
const eventDate = new Date();
eventDate.setMonth(eventDate.getMonth() + 3);

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        {/* Background with pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGM0LjQgMCA4LTMuNiA4LThoLTh2LThoOGMwLTQuNC0zLjYtOC04LTh2OGgtOHYtOGMtNC40IDAtOCAzLjYtOCA4aDh2OGgtOGMwIDQuNCAzLjYgOCA4IDh2LThoOHY4em0wLTJ2LTRoLTh2NGgtNHYtOGg0di00aDh2NGg0djh6IiBmaWxsPSIjMjIyIiBvcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] -z-10 opacity-10" />
        
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-block"
            >
              <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-eco-green/10 text-eco-green">
                <Leaf className="mr-1 h-4 w-4" />
                Coming Soon
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-eco-green to-eco-green-dark bg-clip-text text-transparent">
                Zero Waste,
              </span>{" "}
              <br className="md:hidden" />
              Full Impact
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto"
            >
              Join us for a groundbreaking eco-friendly event that showcases smart waste management and sustainability innovations. Together, we can make a difference.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
            >
              <Button size="lg" className="bg-eco-green hover:bg-eco-green-dark gap-2">
                Join the Challenge <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-eco-green text-eco-green hover:bg-eco-green hover:text-white">
                Download the App
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="text-sm text-muted-foreground mb-4">Event Begins In:</p>
              <CountdownTimer targetDate={eventDate} />
            </motion.div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="hidden lg:block absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-eco-green opacity-10"></div>
        <div className="hidden lg:block absolute top-10 -right-10 w-24 h-24 rounded-full bg-eco-earth opacity-10"></div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-eco-gray-light dark:bg-slate-800/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Smart Waste Management Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our innovative approach to waste management combines technology and community engagement 
              to reduce environmental impact and promote responsible resource use.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-t-4 border-t-eco-green h-full">
                <CardContent className="pt-6">
                  <div className="mb-4 bg-eco-green/10 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-eco-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Smart Bin Tracking</h3>
                  <p className="text-muted-foreground">
                    Real-time monitoring of waste bins with IoT sensors to optimize collection routes and prevent overflow.
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
              <Card className="border-t-4 border-t-eco-green h-full">
                <CardContent className="pt-6">
                  <div className="mb-4 bg-eco-green/10 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                    <RecycleIcon className="h-6 w-6 text-eco-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Reward System</h3>
                  <p className="text-muted-foreground">
                    Earn points and unlock rewards by correctly recycling waste and participating in eco-friendly activities.
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
              <Card className="border-t-4 border-t-eco-green h-full">
                <CardContent className="pt-6">
                  <div className="mb-4 bg-eco-green/10 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                    <Users className="h-6 w-6 text-eco-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Community Engagement</h3>
                  <p className="text-muted-foreground">
                    Connected experiences that bring people together through shared environmental goals and challenges.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Event Details */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=800" 
                alt="Eco-friendly event"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Event Details</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-eco-green/10 p-2 rounded-lg">
                    <Calendar className="h-6 w-6 text-eco-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Date & Time</h3>
                    <p className="text-muted-foreground">{eventDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}, 10:00 AM - 8:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-eco-green/10 p-2 rounded-lg">
                    <MapPin className="h-6 w-6 text-eco-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Location</h3>
                    <p className="text-muted-foreground">Central Eco Park, Green City</p>
                    <p className="text-sm text-muted-foreground">123 Nature Way, Green City, GC 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-eco-green/10 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-eco-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Who Should Attend</h3>
                    <p className="text-muted-foreground">
                      Environmental enthusiasts, sustainability professionals, community leaders, 
                      technology innovators, and anyone passionate about creating a zero-waste future.
                    </p>
                  </div>
                </div>
                
                <Button className="mt-4 bg-eco-green hover:bg-eco-green-dark">
                  Register Now
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-eco-green">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to Join the Zero-Waste Movement?</h2>
            <p className="text-white/90 mb-8 text-lg">
              Be part of the solution! Download our app to start tracking your environmental impact
              and join our community of eco-conscious individuals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-eco-green hover:bg-white/90">
                Download App
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
