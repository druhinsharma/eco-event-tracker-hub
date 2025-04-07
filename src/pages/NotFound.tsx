
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-eco-gray-light dark:bg-slate-900/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto text-center"
        >
          <div className="relative mb-8">
            <div className="text-[120px] font-bold text-eco-green/10 leading-none">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Leaf className="h-24 w-24 text-eco-green animate-leaf-sway" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The page you're looking for doesn't seem to exist. It may have been moved, deleted, or never existed at all.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-eco-green hover:bg-eco-green-dark" asChild>
              <a href="/">Return to Home</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/contact">Contact Support</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
