import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";
import avatar5 from "@/assets/avatar-5.jpg";

const claimers = [
  { id: 1, image: avatar1, name: "User 1" },
  { id: 2, image: avatar2, name: "User 2" },
  { id: 3, image: avatar3, name: "User 3" },
  { id: 4, image: avatar4, name: "User 4" },
  { id: 5, image: avatar5, name: "User 5" },
  { id: 6, image: avatar1, name: "User 6" },
  { id: 7, image: avatar2, name: "User 7" },
  { id: 8, image: avatar3, name: "User 8" },
  { id: 9, image: avatar4, name: "User 9" },
  { id: 10, image: avatar5, name: "User 10" },
  { id: 11, image: avatar1, name: "User 11" },
  { id: 12, image: avatar2, name: "User 12" },
];

export const RecentClaimers = () => {
  // Duplicate the array for seamless infinite scroll
  const duplicatedClaimers = [...claimers, ...claimers];

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-md border border-gray-100 p-4 sm:p-5 md:p-6 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-4 sm:mb-5 md:mb-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-1 sm:mb-1.5">
          Recent Claimers
        </h2>
        <p className="text-xs sm:text-sm text-gray-500">
          1,254 users claimed their rewards today
        </p>
      </div>

      {/* Scrolling Container */}
      <div className="relative">
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-white/90 to-transparent z-10 pointer-events-none" />
        
        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 bg-gradient-to-l from-white/90 to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="overflow-hidden">
          <div className="flex gap-3 sm:gap-4 md:gap-5 animate-scroll hover:pause-scroll">
            {duplicatedClaimers.map((claimer, index) => (
              <div
                key={`${claimer.id}-${index}`}
                className="flex-shrink-0 group"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shadow-md border-2 border-gray-200 bg-white transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={claimer.image}
                    alt={`Recent claimer ${claimer.id}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width="512"
                    height="512"
                    decoding="async"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
