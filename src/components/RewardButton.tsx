import { Button } from "@/components/ui/button";

interface RewardButtonProps {
  logo: string;
  brand: string;
  amount: string;
  description: string;
  brandImage?: string;
  onClick?: () => void;
}

export const RewardButton = ({ logo, brand, amount, description, brandImage, onClick }: RewardButtonProps) => {
  return (
    <Button
      variant="ghost"
      onClick={onClick}
      className="reward-button w-full h-auto p-3 sm:p-4 md:p-5 lg:p-6 flex items-center justify-center text-center bg-white shadow-md hover:shadow-lg border border-gray-200 rounded-lg sm:rounded-xl relative overflow-hidden group transition-all duration-300 animate-slow-pulse"
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/40 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      
      {/* Verified Badge */}
      <div className="absolute bottom-1 sm:bottom-1.5 right-1 sm:right-1.5 bg-green-50 border border-green-200 rounded-full px-1.5 sm:px-2 py-0.5 flex items-center gap-0.5">
        <span className="text-green-600 text-[8px] sm:text-[9px] font-bold whitespace-nowrap">✅ Verified Partner</span>
      </div>
      
      <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4 relative z-10 w-full">
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center text-base sm:text-lg md:text-xl shadow-sm border border-gray-200 group-hover:shadow-md group-hover:scale-105 transition-all duration-300 flex-shrink-0">
          {brandImage ? (
            <img src={brandImage} alt={brand} className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 object-contain drop-shadow-sm" />
          ) : (
            <span className="text-blue-600">{logo}</span>
          )}
        </div>
        <div className="flex-1 text-left min-w-0">
          <div className="font-bold text-sm sm:text-base md:text-lg text-gray-800 group-hover:text-blue-700 transition-colors duration-300 mb-0.5 sm:mb-1 leading-tight truncate">{amount}</div>
          <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 flex items-center gap-1 leading-tight">
            <span className="text-orange-500 flex-shrink-0">⏳</span>
            <span className="truncate">{description}</span>
          </div>
        </div>
      </div>
    </Button>
  );
};