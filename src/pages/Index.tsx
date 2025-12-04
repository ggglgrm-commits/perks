import { lazy, Suspense } from "react";
import { RewardButton } from "@/components/RewardButton";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { TestimonialComments } from "@/components/TestimonialComments";
import { LiveCounterStrip } from "@/components/LiveCounterStrip";
import stepsImage from "@/assets/steps-image.png";
import logoGif from "@/assets/logo.gif";
import amazonLogo from "@/assets/amazon-logo.png";
import applePayLogo from "@/assets/apple-pay-logo.png";
import cashGiftcardLogo from "@/assets/cash-giftcard-logo.png";
const RewardClaimersPopup = lazy(() => import("@/components/RewardClaimersPopup").then(m => ({
  default: m.RewardClaimersPopup
})));
const LiveFeedStrip = lazy(() => import("@/components/LiveFeedStrip").then(m => ({
  default: m.LiveFeedStrip
})));
const RecentClaimers = lazy(() => import("@/components/RecentClaimers").then(m => ({
  default: m.RecentClaimers
})));
const Index = () => {
  return <div className="min-h-screen">
      {/* Official Header */}
      <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 shadow-sm border-b border-gray-200 py-3 sm:py-4 md:py-5 px-3 sm:px-4 md:px-6 sticky top-0 z-50">
        <div className="max-w-md mx-auto space-y-1.5 sm:space-y-2 text-center">
          <h2 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 leading-tight">
            🔒 Official Rewards Verification Portal
          </h2>
          <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 leading-tight px-2">
            Backed by authorized partner brands — Apple, Amazon Rewards Network.
          </p>
        </div>
      </div>

      <div className="py-6 sm:py-8 md:py-10 px-4 sm:px-5 md:px-6">
        <div className="max-w-md mx-auto space-y-6 sm:space-y-8 md:space-y-10">
          {/* Header with Avatar */}
          <div className="text-center animate-fade-in">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-3 sm:mb-4 md:mb-6 rounded-full overflow-hidden avatar-glow bg-white/80 flex items-center justify-center">
            <img src={logoGif} alt="Shopping bags logo" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain" loading="eager" fetchPriority="high" width="480" height="472" decoding="sync" />
          </div>
          <h1 className="sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-1.5 sm:mb-2 leading-tight px-2 sm:px-3 text-sm">
            🎉 Claim Your Verified $750 Rewards Below!
          </h1>
          <p className="sm:text-sm md:text-base max-w-xs sm:max-w-sm mx-auto leading-relaxed px-2 sm:px-3 text-center text-xs text-black font-light">Limited-time offer — complete your steps soon to secure your reward 🎁</p>
        </div>

        {/* Quick Steps Guide */}
        <div className="animate-fade-in bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl shadow-sm py-4 sm:py-5 px-4 sm:px-5">
          <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-3 sm:mb-4 text-center">Quick Steps:</h3>
          <div className="space-y-2 sm:space-y-2.5 text-center">
            <p className="text-sm sm:text-base text-gray-800 font-bold leading-tight">1️⃣   Enter your email to start verification</p>
            <p className="text-sm sm:text-base text-gray-800 font-bold leading-tight">2️⃣   Complete all required partner offers</p>
            <p className="text-sm sm:text-base text-gray-800 font-bold leading-tight">3️⃣   Get your $750 reward once verified</p>
          </div>
        </div>

        {/* Secure Verification Notice */}
        <div className="animate-fade-in bg-[#E8F2FF] border border-blue-200 rounded-xl shadow-sm py-3 sm:py-3.5 px-4 sm:px-5">
          <p className="text-xs sm:text-sm leading-snug text-center text-red-500 font-medium">🛡️ Secure Verification - Your $750 reward will be unlocked automatically once all steps are verified.</p>
        </div>

        {/* Reward Buttons */}
        <div className="space-y-4 sm:space-y-5 animate-fade-in">
          <RewardButton logo="💵" brand="Cash Giftcard" amount="$750 Instant Cash Giftcard" description="(Enter email & complete deals)" brandImage={cashGiftcardLogo} onClick={() => window.location.href = "https://glctrk.org/aff_c?offer_id=1595&aff_id=158779"} />
          
          <RewardButton logo="📦" brand="Amazon" amount="$750 Amazon Gift Voucher" description="(Enter email & complete deals)" brandImage={amazonLogo} onClick={() => window.location.href = "https://trkfy.org/aff_c?offer_id=340&aff_id=158779"} />
        </div>

        {/* Trust Icons */}
        <div className="bg-gradient-to-r from-blue-50 via-white to-green-50 backdrop-blur-sm py-3 sm:py-3.5 md:py-4 px-4 sm:px-5 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 text-[10px] sm:text-xs md:text-sm text-gray-700 flex-wrap">
            <span className="flex items-center gap-1 font-medium whitespace-nowrap">🔒 SSL Secure</span>
            <span className="text-gray-300 hidden xs:inline">•</span>
            <span className="flex items-center gap-1 font-medium whitespace-nowrap">✅ Verified Partner</span>
            <span className="text-gray-300 hidden xs:inline">•</span>
            <span className="flex items-center gap-1 font-medium whitespace-nowrap">💬 24/7 Support</span>
          </div>
        </div>

        {/* Live Counter Strip */}
        <div className="animate-fade-in pt-2">
          <LiveCounterStrip />
        </div>

        {/* Live Feed Strip */}
        <div className="animate-fade-in pt-3 sm:pt-4">
          <Suspense fallback={<div className="h-12 sm:h-16 md:h-20" />}>
            <LiveFeedStrip />
          </Suspense>
        </div>


        {/* Top Claims Section */}
        <div className="text-center animate-fade-in">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4">🎉 Recent Claims 👇</h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="animate-fade-in">
          <TestimonialsCarousel />
        </div>

        {/* Recent Claimers Section */}
        <div className="animate-fade-in">
          <Suspense fallback={<div className="h-32 sm:h-40 md:h-48" />}>
            
          </Suspense>
        </div>

        {/* Testimonial Comments Section */}
        <div className="animate-fade-in">
          <TestimonialComments />
        </div>

        {/* Section Divider */}
        <div className="border-t border-gray-200 my-4 sm:my-6"></div>

        {/* How It Works Section */}
        <div className="animate-fade-in bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-100 p-5 sm:p-6 md:p-7">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-5 text-center">How It Works</h2>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex gap-2.5 sm:gap-3 md:gap-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 text-xs sm:text-sm md:text-base font-bold text-pink-600">1</div>
              <div>
                <h3 className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base mb-0.5">Choose Your Reward</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 leading-relaxed">Click on your preferred voucher above</p>
              </div>
            </div>
            <div className="flex gap-2.5 sm:gap-3 md:gap-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 text-xs sm:text-sm md:text-base font-bold text-pink-600">2</div>
              <div>
                <h3 className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base mb-0.5">Complete Simple Steps</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 leading-relaxed">Enter your email and finish 4-5 quick deals</p>
              </div>
            </div>
            <div className="flex gap-2.5 sm:gap-3 md:gap-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 text-xs sm:text-sm md:text-base font-bold text-pink-600">3</div>
              <div>
                <h3 className="font-semibold text-gray-800 text-xs sm:text-sm md:text-base mb-0.5">Receive Your Voucher</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 leading-relaxed">Get your code via email within minutes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="animate-fade-in px-1">
          
        </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200 py-4 sm:py-5 md:py-6 px-3 sm:px-4 md:px-6 mt-6 sm:mt-8">
        <div className="max-w-md mx-auto space-y-2 sm:space-y-3 text-center">
          <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-500 leading-relaxed px-2">
            This promotional portal is operated under authorized affiliate partnerships. Completion of all required steps is necessary to receive the reward email.
          </p>
          <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 font-semibold">© 2025 Official Rewards Program | Terms & Privacy</p>
        </div>
      </div>

      {/* Reward Claimers Popup */}
      <Suspense fallback={null}>
        <RewardClaimersPopup />
      </Suspense>
    </div>;
};
export default Index;
