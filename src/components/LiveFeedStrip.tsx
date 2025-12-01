import { useState, useEffect } from "react";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";
import avatar5 from "@/assets/avatar-5.jpg";

const feedClaimers = [
  { name: "Sarah J.", reward: "$750 Amazon", avatar: avatar1, location: "Austin, TX 🇺🇸", time: "2 min ago" },
  { name: "James M.", reward: "$750 Cash", avatar: avatar2, location: "London 🇬🇧", time: "5 min ago" },
  { name: "Maria R.", reward: "$750 Amazon", avatar: avatar3, location: "Miami, FL 🇺🇸", time: "8 min ago" },
  { name: "David C.", reward: "$750 Cash", avatar: avatar4, location: "Toronto 🇨🇦", time: "12 min ago" },
  { name: "Emma W.", reward: "$750 Amazon", avatar: avatar5, location: "Sydney 🇦🇺", time: "15 min ago" },
  { name: "Michael B.", reward: "$750 Cash", avatar: avatar1, location: "Chicago, IL 🇺🇸", time: "18 min ago" },
  { name: "Jessica M.", reward: "$750 Amazon", avatar: avatar2, location: "Los Angeles, CA 🇺🇸", time: "22 min ago" },
  { name: "Robert T.", reward: "$750 Cash", avatar: avatar3, location: "Manchester 🇬🇧", time: "25 min ago" },
  { name: "Amanda L.", reward: "$750 Amazon", avatar: avatar4, location: "Vancouver 🇨🇦", time: "28 min ago" },
  { name: "Christopher D.", reward: "$750 Cash", avatar: avatar5, location: "New York, NY 🇺🇸", time: "32 min ago" },
  { name: "Lisa A.", reward: "$750 Amazon", avatar: avatar1, location: "Melbourne 🇦🇺", time: "35 min ago" },
  { name: "Daniel W.", reward: "$750 Cash", avatar: avatar2, location: "Boston, MA 🇺🇸", time: "38 min ago" },
  { name: "Rachel T.", reward: "$750 Amazon", avatar: avatar3, location: "Seattle, WA 🇺🇸", time: "42 min ago" },
  { name: "Kevin M.", reward: "$750 Cash", avatar: avatar4, location: "Calgary 🇨🇦", time: "45 min ago" },
  { name: "Nicole G.", reward: "$750 Amazon", avatar: avatar5, location: "Phoenix, AZ 🇺🇸", time: "48 min ago" },
  { name: "Brandon C.", reward: "$750 Cash", avatar: avatar1, location: "Birmingham 🇬🇧", time: "52 min ago" },
  { name: "Stephanie W.", reward: "$750 Amazon", avatar: avatar2, location: "Dallas, TX 🇺🇸", time: "55 min ago" },
  { name: "Jason H.", reward: "$750 Cash", avatar: avatar3, location: "Brisbane 🇦🇺", time: "58 min ago" },
  { name: "Michelle Y.", reward: "$750 Amazon", avatar: avatar4, location: "Portland, OR 🇺🇸", time: "1 hr ago" },
  { name: "Andrew K.", reward: "$750 Cash", avatar: avatar5, location: "Montreal 🇨🇦", time: "1 hr ago" },
  { name: "Rebecca S.", reward: "$750 Amazon", avatar: avatar1, location: "San Diego, CA 🇺🇸", time: "1 hr ago" },
  { name: "Matthew G.", reward: "$750 Cash", avatar: avatar2, location: "Glasgow 🇬🇧", time: "2 hr ago" },
  { name: "Jennifer A.", reward: "$750 Amazon", avatar: avatar3, location: "Houston, TX 🇺🇸", time: "2 hr ago" },
  { name: "Ryan B.", reward: "$750 Cash", avatar: avatar4, location: "Perth 🇦🇺", time: "2 hr ago" },
  { name: "Ashley T.", reward: "$750 Amazon", avatar: avatar5, location: "Philadelphia, PA 🇺🇸", time: "2 hr ago" },
  { name: "Tyler H.", reward: "$750 Cash", avatar: avatar1, location: "Ottawa 🇨🇦", time: "2 hr ago" },
  { name: "Samantha L.", reward: "$750 Amazon", avatar: avatar2, location: "Denver, CO 🇺🇸", time: "3 hr ago" },
  { name: "Eric N.", reward: "$750 Cash", avatar: avatar3, location: "Liverpool 🇬🇧", time: "3 hr ago" },
  { name: "Laura W.", reward: "$750 Amazon", avatar: avatar4, location: "San Francisco, CA 🇺🇸", time: "3 hr ago" },
  { name: "Justin H.", reward: "$750 Cash", avatar: avatar5, location: "Adelaide 🇦🇺", time: "3 hr ago" },
  { name: "Megan A.", reward: "$750 Amazon", avatar: avatar1, location: "Atlanta, GA 🇺🇸", time: "3 hr ago" },
  { name: "Derek C.", reward: "$750 Cash", avatar: avatar2, location: "Winnipeg 🇨🇦", time: "4 hr ago" },
  { name: "Kimberly W.", reward: "$750 Amazon", avatar: avatar3, location: "Las Vegas, NV 🇺🇸", time: "4 hr ago" },
  { name: "Aaron M.", reward: "$750 Cash", avatar: avatar4, location: "Leeds 🇬🇧", time: "4 hr ago" },
  { name: "Melissa R.", reward: "$750 Amazon", avatar: avatar5, location: "Minneapolis, MN 🇺🇸", time: "4 hr ago" },
  { name: "Nathan P.", reward: "$750 Cash", avatar: avatar1, location: "Auckland 🇳🇿", time: "4 hr ago" },
  { name: "Christina C.", reward: "$750 Amazon", avatar: avatar2, location: "Charlotte, NC 🇺🇸", time: "5 hr ago" },
  { name: "Brian P.", reward: "$750 Cash", avatar: avatar3, location: "Edmonton 🇨🇦", time: "5 hr ago" },
  { name: "Angela E.", reward: "$750 Amazon", avatar: avatar4, location: "Nashville, TN 🇺🇸", time: "5 hr ago" },
  { name: "Gregory E.", reward: "$750 Cash", avatar: avatar5, location: "Sheffield 🇬🇧", time: "5 hr ago" },
  { name: "Heather C.", reward: "$750 Amazon", avatar: avatar1, location: "Detroit, MI 🇺🇸", time: "5 hr ago" },
  { name: "Patrick S.", reward: "$750 Cash", avatar: avatar2, location: "Hobart 🇦🇺", time: "6 hr ago" },
  { name: "Kelly M.", reward: "$750 Amazon", avatar: avatar3, location: "Orlando, FL 🇺🇸", time: "6 hr ago" },
  { name: "Craig R.", reward: "$750 Cash", avatar: avatar4, location: "Halifax 🇨🇦", time: "6 hr ago" },
  { name: "Victoria R.", reward: "$750 Amazon", avatar: avatar5, location: "Tampa, FL 🇺🇸", time: "6 hr ago" },
  { name: "Marcus C.", reward: "$750 Cash", avatar: avatar1, location: "Bristol 🇬🇧", time: "7 hr ago" },
  { name: "Diana B.", reward: "$750 Amazon", avatar: avatar2, location: "Baltimore, MD 🇺🇸", time: "7 hr ago" },
  { name: "Jordan R.", reward: "$750 Cash", avatar: avatar3, location: "Wellington 🇳🇿", time: "7 hr ago" },
  { name: "Tiffany C.", reward: "$750 Amazon", avatar: avatar4, location: "San Antonio, TX 🇺🇸", time: "7 hr ago" },
  { name: "Vincent H.", reward: "$750 Cash", avatar: avatar5, location: "Saskatoon 🇨🇦", time: "8 hr ago" },
];

export const LiveFeedStrip = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const claimerInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % feedClaimers.length);
    }, 2500);

    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(claimerInterval);
      clearInterval(timeInterval);
    };
  }, []);

  const currentClaimer = feedClaimers[currentIndex];
  const timeString = currentTime.toLocaleTimeString('en-US', { 
    hour12: false, 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  return (
    <div className="w-full bg-gradient-to-r from-green-50/80 via-emerald-50/80 to-green-50/80 backdrop-blur-sm border-l-4 border-green-500 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in rounded-r-lg sm:rounded-r-xl">
      <div className="px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3">
        <div className="flex items-center justify-between gap-2 sm:gap-3">
          <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
            <div className="relative flex-shrink-0">
              <img 
                src={currentClaimer.avatar} 
                alt={currentClaimer.name}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-green-400/60 shadow-md animate-pulse"
                loading="lazy"
              />
              <div className="absolute -top-0.5 sm:-top-1 -right-0.5 sm:-right-1 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full border-2 border-white animate-bounce shadow-sm"></div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-1 sm:space-x-2 flex-wrap">
                <span className="text-[10px] sm:text-xs md:text-sm font-bold text-gray-800 truncate">{currentClaimer.name}</span>
                <span className="text-[8px] sm:text-[10px] md:text-xs text-green-700 bg-green-100/80 px-1.5 sm:px-2 py-0.5 rounded-full font-medium whitespace-nowrap">{currentClaimer.location}</span>
              </div>
              <div className="text-[9px] sm:text-xs md:text-sm text-green-600 font-bold flex items-center gap-1 leading-tight">
                🎉 Claimed {currentClaimer.reward} • {currentClaimer.time}
              </div>
            </div>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="text-[9px] sm:text-[10px] md:text-xs text-green-600 font-bold bg-green-100/80 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full flex items-center gap-0.5 sm:gap-1 whitespace-nowrap">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-ping"></div>
              LIVE
            </div>
            <div className="text-[10px] sm:text-xs md:text-sm font-mono text-gray-700 mt-0.5 sm:mt-1 bg-gray-100/60 px-1.5 sm:px-2 py-0.5 rounded-md">{timeString}</div>
          </div>
        </div>
      </div>
    </div>
  );
};