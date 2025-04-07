
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RecycleIcon, Gift, Trophy, User, ArrowRight, QrCode, CircleCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from '@/components/ui/progress';

// Mock data for leaderboard
const leaderboardData = [
  { id: 1, name: 'Eco Warrior', points: 1250, badges: 8 },
  { id: 2, name: 'Green Guardian', points: 980, badges: 6 },
  { id: 3, name: 'Recycling Pro', points: 875, badges: 5 },
  { id: 4, name: 'Earth Saver', points: 760, badges: 4 },
  { id: 5, name: 'Nature Friend', points: 640, badges: 3 },
  { id: 6, name: 'Waste Reducer', points: 510, badges: 3 },
  { id: 7, name: 'Eco Beginner', points: 420, badges: 2 },
  { id: 8, name: 'Planet Protector', points: 380, badges: 2 },
  { id: 9, name: 'Eco Enthusiast', points: 310, badges: 1 },
  { id: 10, name: 'Green Learner', points: 240, badges: 1 },
];

// Mock data for rewards
const rewardsData = [
  { id: 1, name: 'Reusable Water Bottle', points: 300, available: true, image: '🍶' },
  { id: 2, name: 'Eco-friendly T-shirt', points: 500, available: true, image: '👕' },
  { id: 3, name: 'Tree Planting Certificate', points: 700, available: true, image: '🌳' },
  { id: 4, name: 'VIP Event Access', points: 1000, available: true, image: '🎟️' },
  { id: 5, name: 'Solar Power Bank', points: 1500, available: false, image: '🔋' },
];

const Rewards = () => {
  const [userPoints, setUserPoints] = useState(650);
  const [selectedTab, setSelectedTab] = useState('how-it-works');
  
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
              <Trophy className="mr-1 h-4 w-4" />
              Get Rewarded
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold mb-6"
            >
              Recycling Reward System
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-6 text-muted-foreground"
            >
              Turn your sustainable actions into exciting rewards and compete with other eco-warriors
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl">Your Eco Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-24 h-24 bg-eco-green/10 rounded-full flex items-center justify-center mb-4">
                      <User className="h-12 w-12 text-eco-green" />
                    </div>
                    <h3 className="text-lg font-bold">Eco Explorer</h3>
                    <p className="text-sm text-muted-foreground">Level 3 Recycler</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Your Points</span>
                        <span className="text-eco-green font-bold">{userPoints}</span>
                      </div>
                      <Progress value={65} className="h-2" />
                      <div className="flex justify-between mt-1">
                        <span className="text-xs text-muted-foreground">0</span>
                        <span className="text-xs text-muted-foreground">1000</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Recent Achievements</h4>
                      <div className="flex items-center gap-2 p-2 bg-eco-green/5 rounded-md">
                        <div className="bg-eco-green/10 p-1.5 rounded-md">
                          <RecycleIcon className="h-4 w-4 text-eco-green" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Recycling Master</p>
                          <p className="text-xs text-muted-foreground">Recycled 50+ items</p>
                        </div>
                        <Badge className="ml-auto">+200 pts</Badge>
                      </div>
                      
                      <div className="flex items-center gap-2 p-2 bg-eco-green/5 rounded-md">
                        <div className="bg-eco-green/10 p-1.5 rounded-md">
                          <CircleCheck className="h-4 w-4 text-eco-green" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">First Steps</p>
                          <p className="text-xs text-muted-foreground">Attended eco workshop</p>
                        </div>
                        <Badge className="ml-auto">+100 pts</Badge>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-eco-green hover:bg-eco-green-dark">
                      View All Achievements
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex gap-4">
                      <button 
                        className={`px-4 py-2 rounded-md transition-colors ${selectedTab === 'how-it-works' ? 'bg-eco-green text-white' : 'hover:bg-eco-green/10'}`}
                        onClick={() => setSelectedTab('how-it-works')}
                      >
                        How It Works
                      </button>
                      <button 
                        className={`px-4 py-2 rounded-md transition-colors ${selectedTab === 'rewards' ? 'bg-eco-green text-white' : 'hover:bg-eco-green/10'}`}
                        onClick={() => setSelectedTab('rewards')}
                      >
                        Rewards
                      </button>
                      <button 
                        className={`px-4 py-2 rounded-md transition-colors ${selectedTab === 'leaderboard' ? 'bg-eco-green text-white' : 'hover:bg-eco-green/10'}`}
                        onClick={() => setSelectedTab('leaderboard')}
                      >
                        Leaderboard
                      </button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {selectedTab === 'how-it-works' && (
                    <div>
                      <h2 className="text-2xl font-bold mb-6">How The Rewards System Works</h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                          className="flex flex-col items-center text-center p-4 border rounded-lg"
                        >
                          <div className="bg-eco-green/10 p-4 rounded-full mb-4">
                            <QrCode className="h-8 w-8 text-eco-green" />
                          </div>
                          <h3 className="text-lg font-medium mb-2">1. Scan QR Codes</h3>
                          <p className="text-sm text-muted-foreground">
                            Use the app to scan QR codes on waste bins when you properly dispose of items
                          </p>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                          className="flex flex-col items-center text-center p-4 border rounded-lg"
                        >
                          <div className="bg-eco-green/10 p-4 rounded-full mb-4">
                            <Trophy className="h-8 w-8 text-eco-green" />
                          </div>
                          <h3 className="text-lg font-medium mb-2">2. Earn Points</h3>
                          <p className="text-sm text-muted-foreground">
                            Accumulate points for each eco-friendly action and complete special challenges
                          </p>
                        </motion.div>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.3 }}
                          className="flex flex-col items-center text-center p-4 border rounded-lg"
                        >
                          <div className="bg-eco-green/10 p-4 rounded-full mb-4">
                            <Gift className="h-8 w-8 text-eco-green" />
                          </div>
                          <h3 className="text-lg font-medium mb-2">3. Redeem Rewards</h3>
                          <p className="text-sm text-muted-foreground">
                            Exchange your points for eco-friendly merchandise and exclusive experiences
                          </p>
                        </motion.div>
                      </div>
                      
                      <div className="bg-eco-gray-light p-6 rounded-lg mb-8">
                        <h3 className="text-xl font-bold mb-4">Point System Breakdown</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center border-b pb-2">
                            <span>Recycling plastic bottle/can</span>
                            <Badge variant="outline" className="font-bold">+5 points</Badge>
                          </div>
                          <div className="flex justify-between items-center border-b pb-2">
                            <span>Proper organic waste disposal</span>
                            <Badge variant="outline" className="font-bold">+3 points</Badge>
                          </div>
                          <div className="flex justify-between items-center border-b pb-2">
                            <span>Paper recycling</span>
                            <Badge variant="outline" className="font-bold">+2 points</Badge>
                          </div>
                          <div className="flex justify-between items-center border-b pb-2">
                            <span>Attending eco workshops</span>
                            <Badge variant="outline" className="font-bold">+50 points</Badge>
                          </div>
                          <div className="flex justify-between items-center border-b pb-2">
                            <span>Daily recycling streak</span>
                            <Badge variant="outline" className="font-bold">+25 points/week</Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Volunteering</span>
                            <Badge variant="outline" className="font-bold">+100 points</Badge>
                          </div>
                        </div>
                      </div>
                      
                      <Button className="w-full bg-eco-green hover:bg-eco-green-dark">
                        Download App to Start Earning <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  )}
                  
                  {selectedTab === 'rewards' && (
                    <div>
                      <h2 className="text-2xl font-bold mb-6">Available Rewards</h2>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        {rewardsData.map((reward) => (
                          <Card key={reward.id} className={!reward.available ? 'opacity-60' : ''}>
                            <CardContent className="p-6">
                              <div className="flex items-center">
                                <div className="text-4xl mr-4">{reward.image}</div>
                                <div>
                                  <h3 className="font-bold">{reward.name}</h3>
                                  <p className="text-sm text-muted-foreground">{reward.points} points</p>
                                </div>
                              </div>
                              <div className="mt-4">
                                <Button 
                                  className="w-full" 
                                  variant={userPoints >= reward.points && reward.available ? "default" : "outline"}
                                  disabled={userPoints < reward.points || !reward.available}
                                >
                                  {reward.available ? (
                                    userPoints >= reward.points ? "Redeem Reward" : "Not Enough Points"
                                  ) : (
                                    "Out of Stock"
                                  )}
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                      
                      <Card>
                        <CardContent className="p-6">
                          <h3 className="font-bold mb-2">Have a suggestion for rewards?</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            We're always looking to improve our rewards program. Share your ideas with us!
                          </p>
                          <Button variant="outline">Submit Suggestion</Button>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                  
                  {selectedTab === 'leaderboard' && (
                    <div>
                      <h2 className="text-2xl font-bold mb-6">Top Recyclers Leaderboard</h2>
                      
                      <Table>
                        <TableCaption>Top 10 EcoEvent participants by points</TableCaption>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-16">Rank</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead className="text-right">Points</TableHead>
                            <TableHead className="text-right">Badges</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {leaderboardData.map((user, index) => (
                            <TableRow key={user.id}>
                              <TableCell className="font-medium">
                                {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : `#${index + 1}`}
                              </TableCell>
                              <TableCell>{user.name}</TableCell>
                              <TableCell className="text-right font-bold">{user.points}</TableCell>
                              <TableCell className="text-right">{user.badges}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                      
                      <div className="mt-6 bg-eco-green/5 p-4 rounded-lg">
                        <h3 className="font-bold mb-2">Your Ranking</h3>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="bg-eco-green/10 w-8 h-8 rounded-full flex items-center justify-center">
                              <span className="font-medium">#4</span>
                            </div>
                            <span>Your Position</span>
                          </div>
                          <Button size="sm" className="bg-eco-green hover:bg-eco-green-dark">
                            Climb Higher
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rewards;
