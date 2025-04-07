
import React, { useState } from 'react';
import { MapPin, Trash, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';

// Mock data for bins
const bins = [
  { 
    id: 1, 
    type: 'organic', 
    status: 'Empty', 
    fillLevel: 15, 
    location: 'Main Entrance', 
    coordinates: { lat: 40.7128, lng: -74.006 } 
  },
  { 
    id: 2, 
    type: 'plastic', 
    status: 'Half Full', 
    fillLevel: 50, 
    location: 'Food Court Area', 
    coordinates: { lat: 40.7148, lng: -74.003 } 
  },
  { 
    id: 3, 
    type: 'paper', 
    status: 'Almost Full', 
    fillLevel: 75, 
    location: 'Central Stage', 
    coordinates: { lat: 40.7138, lng: -74.008 } 
  },
  { 
    id: 4, 
    type: 'general', 
    status: 'Full', 
    fillLevel: 95, 
    location: 'Exit Gate', 
    coordinates: { lat: 40.7118, lng: -74.005 } 
  },
  { 
    id: 5, 
    type: 'plastic', 
    status: 'Half Full', 
    fillLevel: 45, 
    location: 'Workshop Area', 
    coordinates: { lat: 40.7135, lng: -74.004 } 
  },
  { 
    id: 6, 
    type: 'organic', 
    status: 'Almost Full', 
    fillLevel: 80, 
    location: 'Relaxation Zone', 
    coordinates: { lat: 40.7145, lng: -74.007 } 
  },
];

const getBinStatusColor = (fillLevel: number) => {
  if (fillLevel < 40) return 'bg-green-500';
  if (fillLevel < 70) return 'bg-yellow-500';
  return 'bg-red-500';
};

const getBinTypeColor = (type: string) => {
  switch (type) {
    case 'organic': return 'bg-eco-green text-white';
    case 'plastic': return 'bg-blue-500 text-white';
    case 'paper': return 'bg-yellow-600 text-white';
    case 'general': return 'bg-gray-500 text-white';
    default: return 'bg-gray-200';
  }
};

const BinTracker = () => {
  const [selectedBinType, setSelectedBinType] = useState('all');
  const [selectedBin, setSelectedBin] = useState<number | null>(null);

  const filteredBins = selectedBinType === 'all' 
    ? bins 
    : bins.filter(bin => bin.type === selectedBinType);

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
              <MapPin className="mr-1 h-4 w-4" />
              Live Tracking
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold mb-6"
            >
              Smart Bin Tracker
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-6 text-muted-foreground"
            >
              Monitor bin locations and status in real-time to help maintain our zero-waste goal
            </motion.p>
          </div>
        </div>
      </section>

      {/* Tracker Dashboard */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar Controls */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <Filter className="mr-2 h-5 w-5" /> Filter Bins
                  </h2>
                  
                  <Tabs defaultValue="all" value={selectedBinType} onValueChange={setSelectedBinType} className="mb-6">
                    <TabsList className="grid grid-cols-2 mb-2">
                      <TabsTrigger value="all">All Bins</TabsTrigger>
                      <TabsTrigger value="organic">Organic</TabsTrigger>
                    </TabsList>
                    <TabsList className="grid grid-cols-2">
                      <TabsTrigger value="plastic">Plastic</TabsTrigger>
                      <TabsTrigger value="paper">Paper</TabsTrigger>
                    </TabsList>
                    <TabsList className="grid grid-cols-1">
                      <TabsTrigger value="general">General</TabsTrigger>
                    </TabsList>
                  </Tabs>
                  
                  <div className="space-y-4 mt-6">
                    <h3 className="font-semibold">Status Legend</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-sm">Empty (0-40%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <span className="text-sm">Half Full (40-70%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <span className="text-sm">Almost Full/Full (70-100%)</span>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="font-semibold mb-2">Quick Stats</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-eco-gray p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold">{bins.length}</div>
                        <div className="text-xs text-muted-foreground">Total Bins</div>
                      </div>
                      <div className="bg-red-100 p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-red-600">2</div>
                        <div className="text-xs text-red-600">Need Attention</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Map Area - In a real scenario, this would be an interactive map */}
            <div className="lg:col-span-2">
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="bg-eco-gray-light rounded-lg border border-border h-[400px] flex items-center justify-center relative">
                    <div className="text-center">
                      <p className="text-muted-foreground mb-4">Interactive Map Would Be Displayed Here</p>
                      <p className="text-sm text-muted-foreground">This is a placeholder for the actual map implementation</p>
                    </div>
                    
                    {/* Sample bin markers - these would be positioned on the map */}
                    {filteredBins.map(bin => (
                      <div 
                        key={bin.id}
                        className={`absolute cursor-pointer transition-all ${
                          selectedBin === bin.id ? 'scale-125' : 'scale-100'
                        }`}
                        style={{ 
                          left: `${Math.random() * 80 + 10}%`, 
                          top: `${Math.random() * 80 + 10}%` 
                        }}
                        onClick={() => setSelectedBin(bin.id === selectedBin ? null : bin.id)}
                      >
                        <div className="relative">
                          <MapPin className={`h-6 w-6 ${getBinTypeColor(bin.type)}`} />
                          <div 
                            className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${getBinStatusColor(bin.fillLevel)}`}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <h2 className="text-xl font-bold mb-4">Bin List</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredBins.map(bin => (
                  <Card 
                    key={bin.id} 
                    className={`cursor-pointer transition-all ${selectedBin === bin.id ? 'ring-2 ring-eco-green' : ''}`}
                    onClick={() => setSelectedBin(bin.id === selectedBin ? null : bin.id)}
                  >
                    <CardContent className="p-4 flex items-center">
                      <div className="mr-4">
                        <Trash className={`h-8 w-8 ${getBinTypeColor(bin.type)}`} />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium capitalize">{bin.type} Bin</h3>
                          <Badge variant={bin.fillLevel > 70 ? "destructive" : bin.fillLevel > 40 ? "default" : "outline"}>
                            {bin.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{bin.location}</p>
                        <div className="mt-2 w-full bg-eco-gray-light rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${getBinStatusColor(bin.fillLevel)}`} 
                            style={{ width: `${bin.fillLevel}%` }}
                          ></div>
                        </div>
                        <div className="mt-1 text-xs text-right text-muted-foreground">{bin.fillLevel}% full</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BinTracker;
