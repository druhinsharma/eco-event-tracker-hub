
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import BinTracker from "./pages/BinTracker";
import Rewards from "./pages/Rewards";
import Guidelines from "./pages/Guidelines";
import Volunteer from "./pages/Volunteer";
import NotFound from "./pages/NotFound";

// Initialize framer-motion for animations
import { MotionConfig } from "framer-motion";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/about" element={<Layout><About /></Layout>} />
            <Route path="/bin-tracker" element={<Layout><BinTracker /></Layout>} />
            <Route path="/rewards" element={<Layout><Rewards /></Layout>} />
            <Route path="/guidelines" element={<Layout><Guidelines /></Layout>} />
            <Route path="/volunteer" element={<Layout><Volunteer /></Layout>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </MotionConfig>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
