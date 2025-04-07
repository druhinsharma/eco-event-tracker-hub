
import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Send, Users, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const volunteerRoles = [
  {
    title: 'Waste Guides',
    description: 'Help attendees properly sort their waste at bin stations',
    duties: [
      'Assist attendees with waste sorting',
      'Ensure proper bin usage',
      'Answer questions about recycling',
      'Keep bin areas clean and organized'
    ],
    requirements: 'No prior experience needed, training provided',
    shifts: '4-hour shifts available',
    icon: '♻️'
  },
  {
    title: 'Green Team Educator',
    description: 'Share information about sustainability initiatives',
    duties: [
      'Staff the eco-information booth',
      'Conduct mini-workshops',
      'Explain the reward system to attendees',
      'Promote sustainable practices'
    ],
    requirements: 'Basic knowledge of environmental issues preferred',
    shifts: '3-hour shifts available',
    icon: '📚'
  },
  {
    title: 'Tech Support',
    description: 'Help attendees with the app and QR scanning',
    duties: [
      'Assist with app downloads and setup',
      'Troubleshoot QR scanning issues',
      'Help with digital rewards redemption',
      'Guide users through the app features'
    ],
    requirements: 'Tech-savvy individuals preferred',
    shifts: '4-hour shifts available',
    icon: '📱'
  },
  {
    title: 'Bin Monitor',
    description: 'Monitor smart bins and report any issues',
    duties: [
      'Check bin fill levels periodically',
      'Report technical issues with smart bins',
      'Ensure bins are functioning properly',
      'Alert team when bins need emptying'
    ],
    requirements: 'Comfortable with basic technology',
    shifts: '3-hour shifts available',
    icon: '🔍'
  }
];

const Volunteer = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 bg-eco-green/10">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-eco-green/20 text-eco-green mb-4"
            >
              <Users className="mr-1 h-4 w-4" />
              Join Us
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold mb-6"
            >
              Volunteer & Contact
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-6 text-muted-foreground"
            >
              Be part of our mission for a zero-waste event by volunteering or reaching out with questions
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Volunteer & Contact Section */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <Tabs defaultValue="volunteer" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="volunteer">
                <Users className="mr-2 h-4 w-4" /> Volunteer
              </TabsTrigger>
              <TabsTrigger value="contact">
                <Mail className="mr-2 h-4 w-4" /> Contact Us
              </TabsTrigger>
            </TabsList>
            
            {/* Volunteer Tab */}
            <TabsContent value="volunteer">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-2xl font-bold mb-6">Why Volunteer With Us?</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <Card>
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="bg-eco-green/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                        <Leaf className="h-6 w-6 text-eco-green" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">Make an Impact</h3>
                      <p className="text-muted-foreground flex-grow">
                        Help us achieve our zero-waste goal and educate attendees about sustainability.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="bg-eco-green/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                        <Users className="h-6 w-6 text-eco-green" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">Connect & Network</h3>
                      <p className="text-muted-foreground flex-grow">
                        Meet like-minded individuals passionate about environmental conservation.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="bg-eco-green/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                        <svg className="h-6 w-6 text-eco-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a4 4 0 00-4-4H8.8a4 4 0 00-3.2 1.6" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold mb-2">Gain Experience</h3>
                      <p className="text-muted-foreground flex-grow">
                        Learn about sustainable event management and smart waste technologies.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <h2 className="text-2xl font-bold mb-6">Volunteer Roles</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  {volunteerRoles.map((role, index) => (
                    <motion.div
                      key={role.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card>
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="bg-eco-green/10 p-3 rounded-lg text-2xl">
                              {role.icon}
                            </div>
                            <div>
                              <h3 className="text-lg font-bold">{role.title}</h3>
                              <p className="text-muted-foreground">{role.description}</p>
                            </div>
                          </div>
                          
                          <div className="mb-4">
                            <h4 className="font-medium mb-2">Key Duties</h4>
                            <ul className="list-disc pl-6 space-y-1 text-sm">
                              {role.duties.map((duty, i) => (
                                <li key={i}>{duty}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row justify-between text-sm text-muted-foreground">
                            <div>{role.requirements}</div>
                            <div>{role.shifts}</div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6 text-center">Volunteer Registration</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-1">
                            Full Name
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input id="name" placeholder="Jane Smith" className="pl-10" />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-1">
                            Email Address
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input id="email" type="email" placeholder="jane.smith@example.com" className="pl-10" />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-1">
                            Phone Number
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input id="phone" placeholder="(555) 123-4567" className="pl-10" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="role" className="block text-sm font-medium mb-1">
                            Preferred Role
                          </label>
                          <select 
                            id="role" 
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          >
                            <option value="">Select a role</option>
                            {volunteerRoles.map(role => (
                              <option key={role.title} value={role.title}>{role.title}</option>
                            ))}
                            <option value="any">Any role needed</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="availability" className="block text-sm font-medium mb-1">
                            Availability
                          </label>
                          <select 
                            id="availability" 
                            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          >
                            <option value="">Select availability</option>
                            <option value="morning">Morning (8am - 12pm)</option>
                            <option value="afternoon">Afternoon (12pm - 4pm)</option>
                            <option value="evening">Evening (4pm - 8pm)</option>
                            <option value="any">Any time needed</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="experience" className="block text-sm font-medium mb-1">
                            Relevant Experience
                          </label>
                          <Textarea id="experience" placeholder="Briefly describe any relevant experience or skills" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-center mt-6">
                      <Button className="bg-eco-green hover:bg-eco-green-dark px-8">
                        Submit Application
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            
            {/* Contact Tab */}
            <TabsContent value="contact">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <Card>
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                      <p className="text-muted-foreground mb-6">
                        Have questions about the event, smart waste system, or how to get involved?
                        Send us a message and we'll get back to you as soon as possible.
                      </p>
                      
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="contact-name" className="block text-sm font-medium mb-1">
                            Name
                          </label>
                          <Input id="contact-name" placeholder="Your name" />
                        </div>
                        
                        <div>
                          <label htmlFor="contact-email" className="block text-sm font-medium mb-1">
                            Email
                          </label>
                          <Input id="contact-email" type="email" placeholder="Your email address" />
                        </div>
                        
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium mb-1">
                            Subject
                          </label>
                          <Input id="subject" placeholder="What is your message about?" />
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-1">
                            Message
                          </label>
                          <Textarea id="message" placeholder="Your message" className="min-h-[120px]" />
                        </div>
                        
                        <Button className="w-full bg-eco-green hover:bg-eco-green-dark">
                          <Send className="mr-2 h-4 w-4" /> Send Message
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-eco-green/10 p-3 rounded-lg">
                          <Mail className="h-5 w-5 text-eco-green" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Email</h3>
                          <a href="mailto:info@ecoevent.com" className="text-muted-foreground hover:text-eco-green transition-colors">
                            info@ecoevent.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="bg-eco-green/10 p-3 rounded-lg">
                          <Phone className="h-5 w-5 text-eco-green" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Phone</h3>
                          <p className="text-muted-foreground">+1 (555) 123-4567</p>
                          <p className="text-sm text-muted-foreground">Mon-Fri, 9am-5pm</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="bg-eco-green/10 p-3 rounded-lg">
                          <MapPin className="h-5 w-5 text-eco-green" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Event Location</h3>
                          <p className="text-muted-foreground">Central Eco Park</p>
                          <p className="text-sm text-muted-foreground">123 Nature Way, Green City, GC 10001</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                      <div className="flex space-x-4">
                        <a href="#" className="bg-eco-green/10 p-3 rounded-lg hover:bg-eco-green/20 transition-colors">
                          <svg className="h-5 w-5 text-eco-green" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                          </svg>
                        </a>
                        <a href="#" className="bg-eco-green/10 p-3 rounded-lg hover:bg-eco-green/20 transition-colors">
                          <svg className="h-5 w-5 text-eco-green" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                        <a href="#" className="bg-eco-green/10 p-3 rounded-lg hover:bg-eco-green/20 transition-colors">
                          <svg className="h-5 w-5 text-eco-green" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    
                    <Card className="mt-8 bg-eco-green/5">
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-lg mb-3">Frequently Asked Questions</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium">How can I participate in the eco-challenge?</h4>
                            <p className="text-sm text-muted-foreground">Download our app and register for the event to start earning points for eco-friendly actions.</p>
                          </div>
                          <div>
                            <h4 className="font-medium">What happens to the recycled materials?</h4>
                            <p className="text-sm text-muted-foreground">All collected materials are properly sorted and sent to our recycling partners for processing into new products.</p>
                          </div>
                          <div>
                            <h4 className="font-medium">Is there parking available at the venue?</h4>
                            <p className="text-sm text-muted-foreground">Limited parking is available, but we encourage carpooling or using public transportation to reduce emissions.</p>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t">
                          <Button variant="link" className="text-eco-green p-0 h-auto">
                            View All FAQs
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;
