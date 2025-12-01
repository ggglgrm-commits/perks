import { useEffect, useState } from "react";
export const LiveCounterStrip = () => {
  const [claimers, setClaimers] = useState(250);
  const [cardsLeft, setCardsLeft] = useState(2000);
  useEffect(() => {
    // Animate claimers increasing
    const claimersInterval = setInterval(() => {
      setClaimers(prev => {
        const newValue = prev + Math.floor(Math.random() * 3) + 1;
        return newValue >= 640 ? 250 : newValue;
      });
    }, 3000);

    // Animate cards decreasing
    const cardsInterval = setInterval(() => {
      setCardsLeft(prev => {
        const newValue = prev - Math.floor(Math.random() * 3) - 1;
        return newValue <= 175 ? 2000 : newValue;
      });
    }, 3500);
    return () => {
      clearInterval(claimersInterval);
      clearInterval(cardsInterval);
    };
  }, []);
  return <div className="bg-[#E8F2FF] py-3 sm:py-3.5 px-4 sm:px-5 rounded-xl shadow-sm border border-blue-200 animate-fade-in">
      <p className="text-center text-gray-700 sm:text-base font-medium leading-snug text-xs">
        🎯 Live Claimers: <span className="font-bold transition-all duration-300">{claimers}</span> | 
        🎁 Gift Cards Left: <span className="font-bold transition-all duration-300">{cardsLeft}</span>
      </p>
    </div>;
};