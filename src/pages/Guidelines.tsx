
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, RecycleIcon, Info, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface WasteTypeInfo {
  type: string;
  color: string;
  icon: string;
  description: string;
  examples: string[];
  tips: string[];
}

const wasteTypes: WasteTypeInfo[] = [
  {
    type: 'Organic',
    color: 'bg-eco-green',
    icon: '🌱',
    description: 'Biodegradable waste that can be composted',
    examples: [
      'Food scraps',
      'Fruit and vegetable peels',
      'Coffee grounds',
      'Tea bags',
      'Plant trimmings',
      'Compostable plates and cutlery (marked as compostable)'
    ],
    tips: [
      'Remove any stickers from fruit peels',
      'No meat or dairy in basic composting',
      'Keep items loose, not in plastic bags',
      'Break down large items into smaller pieces'
    ]
  },
  {
    type: 'Plastic',
    color: 'bg-blue-500',
    icon: '♻️',
    description: 'Clean plastic materials that can be recycled',
    examples: [
      'Plastic bottles (water, soda)',
      'Rigid plastic containers',
      'Clean plastic cups',
      'Plastic food containers (rinsed)',
      'Plastic bottle caps'
    ],
    tips: [
      'Rinse containers before recycling',
      'Remove all food residue',
      'Crush bottles to save space',
      'Check for recycling numbers 1-7',
      'Remove labels when possible'
    ]
  },
  {
    type: 'Paper',
    color: 'bg-yellow-600',
    icon: '📄',
    description: 'Clean paper and cardboard items',
    examples: [
      'Newspapers and magazines',
      'Office paper and brochures',
      'Paper bags',
      'Cardboard boxes (flattened)',
      'Paper cups (clean, no plastic lining)'
    ],
    tips: [
      'Flatten all cardboard boxes',
      'Remove plastic windows from envelopes',
      'Keep paper dry and clean',
      'Avoid recycling greasy or food-stained paper',
      'Remove tape and staples when possible'
    ]
  },
  {
    type: 'General',
    color: 'bg-gray-500',
    icon: '🗑️',
    description: 'Non-recyclable and non-compostable items',
    examples: [
      'Chip bags and candy wrappers',
      'Styrofoam materials',
      'Broken glass (wrapped safely)',
      'Used tissues and paper towels',
      'Non-recyclable plastics'
    ],
    tips: [
      'Minimize general waste when possible',
      'Consider alternatives to disposable items',
      'Double-check if items could be recycled',
      'Wrap sharp items safely',
      'Keep hazardous materials separate'
    ]
  }
];

const Guidelines = () => {
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
              <Info className="mr-1 h-4 w-4" />
              Guidelines
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold mb-6"
            >
              Waste Disposal Guidelines
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-6 text-muted-foreground"
            >
              Learn how to properly sort and dispose of different types of waste to help us reach our zero-waste goal
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center"
            >
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowDown className="h-4 w-4" />
                Scroll to Explore
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Main Content Section */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-10">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <RecycleIcon className="h-6 w-6 text-eco-green" />
                  <h2 className="text-2xl font-bold">Why Proper Waste Sorting Matters</h2>
                </div>
                <p className="mb-4">
                  At EcoEvent, we're committed to achieving a zero-waste initiative. Proper waste sorting is crucial for:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                  <li>Maximizing recycling and composting rates</li>
                  <li>Reducing landfill contribution</li>
                  <li>Lowering the event's carbon footprint</li>
                  <li>Creating valuable resources from waste materials</li>
                  <li>Setting an example for future sustainable events</li>
                </ul>
                <p>
                  Our smart bins make proper disposal easy, but understanding what goes where is still important. 
                  Use this guide to help you make the right choices when disposing of items during the event.
                </p>
              </CardContent>
            </Card>
            
            <h2 className="text-2xl font-bold mb-6 text-center">Waste Sorting Guide</h2>
            
            <Tabs defaultValue="organic" className="mb-10">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                {wasteTypes.map((waste) => (
                  <TabsTrigger 
                    key={waste.type} 
                    value={waste.type.toLowerCase()} 
                    className="relative overflow-hidden"
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${waste.color}`}></div>
                      {waste.type}
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {wasteTypes.map((waste) => (
                <TabsContent key={waste.type} value={waste.type.toLowerCase()}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="sm:flex items-center gap-4 mb-6">
                          <div className={`${waste.color} text-white p-4 rounded-lg text-4xl flex justify-center sm:w-24 sm:h-24 mb-4 sm:mb-0`}>
                            {waste.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold">{waste.type} Waste</h3>
                            <p className="text-muted-foreground">{waste.description}</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-bold text-lg mb-3 flex items-center">
                              <span className={`w-2 h-2 rounded-full ${waste.color} mr-2`}></span>
                              What to Include
                            </h4>
                            <ul className="list-disc pl-6 space-y-2">
                              {waste.examples.map((example, index) => (
                                <li key={index}>{example}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-bold text-lg mb-3 flex items-center">
                              <span className={`w-2 h-2 rounded-full ${waste.color} mr-2`}></span>
                              Tips for Proper Disposal
                            </h4>
                            <ul className="list-disc pl-6 space-y-2">
                              {waste.tips.map((tip, index) => (
                                <li key={index}>{tip}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
            
            <div className="bg-eco-green/5 p-6 rounded-lg mb-10">
              <h2 className="text-xl font-bold mb-4">Special Items Disposal</h2>
              <p className="mb-4">
                Some items require special handling. Look for these designated collection points at the event:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="bg-amber-100 p-2 rounded-md">
                    <span className="text-amber-600 text-lg">🔋</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Batteries</h4>
                    <p className="text-sm text-muted-foreground">Special collection box at info points</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-amber-100 p-2 rounded-md">
                    <span className="text-amber-600 text-lg">📱</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Electronic Waste</h4>
                    <p className="text-sm text-muted-foreground">E-waste station near main entrance</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-amber-100 p-2 rounded-md">
                    <span className="text-amber-600 text-lg">💊</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Medications</h4>
                    <p className="text-sm text-muted-foreground">First aid stations have collection boxes</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-amber-100 p-2 rounded-md">
                    <span className="text-amber-600 text-lg">💧</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Hazardous Liquids</h4>
                    <p className="text-sm text-muted-foreground">Ask staff for proper disposal</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mb-12">
              <Button className="bg-eco-green hover:bg-eco-green-dark">
                Download Complete Waste Guide
              </Button>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Leaf className="h-6 w-6 text-eco-green" />
                  <h2 className="text-xl font-bold">Need Help?</h2>
                </div>
                <p className="mb-4">
                  Look for our waste guides near each bin cluster or ask our "Green Team" volunteers 
                  who will be wearing bright green t-shirts. They're trained to assist with proper waste sorting.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="outline">Contact Green Team</Button>
                  <Button variant="outline">View Bin Locations</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guidelines;
