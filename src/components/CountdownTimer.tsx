
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, className }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={cn("flex justify-center gap-4", className)}>
      <div className="flex flex-col items-center">
        <div className="text-3xl sm:text-4xl font-bold bg-eco-green/10 rounded-lg w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center border border-eco-green/20">
          {timeLeft.days}
        </div>
        <span className="text-xs sm:text-sm mt-2 text-muted-foreground">Days</span>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="text-3xl sm:text-4xl font-bold bg-eco-green/10 rounded-lg w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center border border-eco-green/20">
          {timeLeft.hours}
        </div>
        <span className="text-xs sm:text-sm mt-2 text-muted-foreground">Hours</span>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="text-3xl sm:text-4xl font-bold bg-eco-green/10 rounded-lg w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center border border-eco-green/20">
          {timeLeft.minutes}
        </div>
        <span className="text-xs sm:text-sm mt-2 text-muted-foreground">Minutes</span>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="text-3xl sm:text-4xl font-bold bg-eco-green/10 rounded-lg w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center border border-eco-green/20">
          {timeLeft.seconds}
        </div>
        <span className="text-xs sm:text-sm mt-2 text-muted-foreground">Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
