import { useState, useEffect } from "react";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";
import avatar5 from "@/assets/avatar-5.jpg";

const claimers = [
  { location: "California", reward: "$750 Amazon Reward", avatar: avatar1 },
  { location: "Texas", reward: "$750 Cash Reward", avatar: avatar2 },
  { location: "New York", reward: "$750 Amazon Reward", avatar: avatar4 },
  { location: "Florida", reward: "$750 Cash Reward", avatar: avatar5 },
  { location: "Illinois", reward: "$750 Amazon Reward", avatar: avatar5 },
  { location: "Ohio", reward: "$750 Amazon Reward", avatar: avatar3 },
  { location: "Georgia", reward: "$750 Cash Reward", avatar: avatar1 },
  { location: "Michigan", reward: "$750 Amazon Reward", avatar: avatar4 },
  { location: "Arizona", reward: "$750 Amazon Reward", avatar: avatar1 },
  { location: "Colorado", reward: "$750 Cash Reward", avatar: avatar2 },
  { location: "Wisconsin", reward: "$750 Amazon Reward", avatar: avatar4 }
];

export const RewardClaimersPopup = () => {
  const [currentClaimer, setCurrentClaimer] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentClaimer((prev) => (prev + 1) % claimers.length);
        setIsVisible(true);
      }, 200);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const claimer = claimers[currentClaimer];

  return (
    <div className="fixed bottom-16 sm:bottom-12 md:bottom-6 right-2 sm:right-3 md:right-4 z-40 max-w-[90vw] sm:max-w-xs">
      <div
        className={`
          bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-md border border-green-200 p-2.5 sm:p-3 md:p-4
          transition-all duration-300 ease-in-out
          ${isVisible ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-95 translate-x-full'}
        `}
      >
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="relative flex-shrink-0">
            <img 
              src={claimer.avatar} 
              alt="Verified user"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-green-200"
              loading="lazy"
            />
            <div className="absolute -top-0.5 sm:-top-1 -right-0.5 sm:-right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full border border-white animate-pulse"></div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[9px] sm:text-[10px] md:text-xs font-bold text-green-600 flex items-center gap-1 leading-tight">
              ✅ Verified user from {claimer.location}
            </p>
            <p className="text-[10px] sm:text-xs md:text-sm text-gray-800 font-semibold leading-tight truncate">
              just claimed {claimer.reward}
            </p>
          </div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
        </div>
      </div>
    </div>
  );
};