import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";
import avatar5 from "@/assets/avatar-5.jpg";

const testimonials = [
  { id: 1, name: "Sarah Johnson", gender: "female", location: "Austin, TX", country: "🇺🇸", avatar: avatar1, reward: "Amazon Gift Card", comment: "Just received my $750 Amazon voucher! Completed all the deals yesterday and got the code in my email this morning. Already ordered a new laptop!", verified: true, timestamp: "6 minutes ago" },
  { id: 2, name: "James Mitchell", gender: "male", location: "London", country: "🇬🇧", avatar: avatar2, reward: "Instant Cash Giftcard", comment: "Can't believe this actually worked! $750 Instant Cash Giftcard showed up right away. The deals were easy to complete, totally worth it.", verified: true, timestamp: "18 minutes ago" },
  { id: 3, name: "Maria Rodriguez", gender: "female", location: "Miami, FL", country: "🇺🇸", avatar: avatar3, reward: "Amazon Gift Card", comment: "Honestly thought this was too good to be true, but I got my $750 Amazon code! Used it for Christmas shopping. Thank you so much!", verified: true, timestamp: "32 minutes ago" },
  { id: 4, name: "David Chen", gender: "male", location: "Toronto, ON", country: "🇨🇦", avatar: avatar4, reward: "Instant Cash Giftcard", comment: "Finished the deals on my lunch break and had $750 Instant Cash Giftcard by dinner time. Super fast and legitimate. Highly recommend!", verified: true, timestamp: "1 hour ago" },
  { id: 5, name: "Emma Williams", gender: "female", location: "Sydney", country: "🇦🇺", avatar: avatar5, reward: "Amazon Gift Card", comment: "Amazing experience! Got my $750 Amazon voucher within hours. The process was straightforward and customer support was really helpful.", verified: true, timestamp: "2 hours ago" },
  { id: 6, name: "Michael Brown", gender: "male", location: "Chicago, IL", country: "🇺🇸", avatar: avatar1, reward: "Instant Cash Giftcard", comment: "Just claimed my $750 Instant Cash Giftcard! The deals were simple and I finished everything in about 30 minutes. Money is already in my account!", verified: true, timestamp: "3 hours ago" },
  { id: 7, name: "Jessica Martinez", gender: "female", location: "Los Angeles, CA", country: "🇺🇸", avatar: avatar2, reward: "Amazon Gift Card", comment: "This is legit! Got my $750 Amazon gift card and bought a new TV. The whole process took less than an hour!", verified: true, timestamp: "4 hours ago" },
  { id: 8, name: "Robert Taylor", gender: "male", location: "Manchester", country: "🇬🇧", avatar: avatar3, reward: "Instant Cash Giftcard", comment: "Received $750 in Instant Cash Giftcard within 2 hours! Used it to pay off some bills. Couldn't be happier!", verified: true, timestamp: "5 hours ago" },
  { id: 9, name: "Amanda Lee", gender: "female", location: "Vancouver, BC", country: "🇨🇦", avatar: avatar4, reward: "Amazon Gift Card", comment: "Best decision ever! My $750 Amazon voucher arrived so quick. Already planning my shopping spree!", verified: true, timestamp: "6 hours ago" },
  { id: 10, name: "Christopher Davis", gender: "male", location: "New York, NY", country: "🇺🇸", avatar: avatar5, reward: "Instant Cash Giftcard", comment: "Skeptical at first but this really works! Got my $750 Instant Cash Giftcard same day. Highly recommend!", verified: true, timestamp: "7 hours ago" },
  { id: 11, name: "Lisa Anderson", gender: "female", location: "Melbourne", country: "🇦🇺", avatar: avatar1, reward: "Amazon Gift Card", comment: "Just got my $750 Amazon code! The deals were super easy and I finished in 45 minutes. So excited!", verified: true, timestamp: "8 hours ago" },
  { id: 12, name: "Daniel Wilson", gender: "male", location: "Boston, MA", country: "🇺🇸", avatar: avatar2, reward: "Instant Cash Giftcard", comment: "Wow! $750 Instant Cash Giftcard in my account already. This is the real deal, folks!", verified: true, timestamp: "9 hours ago" },
  { id: 13, name: "Rachel Thompson", gender: "female", location: "Seattle, WA", country: "🇺🇸", avatar: avatar3, reward: "Amazon Gift Card", comment: "Received my $750 Amazon voucher this morning! Already bought gifts for the family. Thank you!", verified: true, timestamp: "10 hours ago" },
  { id: 14, name: "Kevin Moore", gender: "male", location: "Calgary, AB", country: "🇨🇦", avatar: avatar4, reward: "Instant Cash Giftcard", comment: "This actually works! Got $750 in Instant Cash Giftcard within hours. The deals were straightforward and easy!", verified: true, timestamp: "11 hours ago" },
  { id: 15, name: "Nicole Garcia", gender: "female", location: "Phoenix, AZ", country: "🇺🇸", avatar: avatar5, reward: "Amazon Gift Card", comment: "Can't believe it! My $750 Amazon gift card came through. Used it for home improvements!", verified: true, timestamp: "12 hours ago" },
  { id: 16, name: "Brandon Clark", gender: "male", location: "Birmingham", country: "🇬🇧", avatar: avatar1, reward: "Instant Cash Giftcard", comment: "Got my $750 Instant Cash Giftcard! Quick and easy process. Already spent some on groceries!", verified: true, timestamp: "13 hours ago" },
  { id: 17, name: "Stephanie White", gender: "female", location: "Dallas, TX", country: "🇺🇸", avatar: avatar2, reward: "Amazon Gift Card", comment: "This is amazing! $750 Amazon voucher in my inbox. Bought a new camera and some accessories!", verified: true, timestamp: "14 hours ago" },
  { id: 18, name: "Jason Harris", gender: "male", location: "Brisbane", country: "🇦🇺", avatar: avatar3, reward: "Instant Cash Giftcard", comment: "Legit service! Received $750 in Instant Cash Giftcard same day. The deals were simple and worth my time!", verified: true, timestamp: "15 hours ago" },
  { id: 19, name: "Michelle Young", gender: "female", location: "Portland, OR", country: "🇺🇸", avatar: avatar4, reward: "Amazon Gift Card", comment: "Just claimed my $750 Amazon gift card! So easy and fast. Already did some shopping!", verified: true, timestamp: "16 hours ago" },
  { id: 20, name: "Andrew King", gender: "male", location: "Montreal, QC", country: "🇨🇦", avatar: avatar5, reward: "Instant Cash Giftcard", comment: "Got $750 Instant Cash Giftcard! This is the real thing. Completed deals in under an hour!", verified: true, timestamp: "17 hours ago" },
  { id: 21, name: "Rebecca Scott", gender: "female", location: "San Diego, CA", country: "🇺🇸", avatar: avatar1, reward: "Amazon Gift Card", comment: "My $750 Amazon voucher arrived! Used it to buy Christmas presents. So grateful!", verified: true, timestamp: "18 hours ago" },
  { id: 22, name: "Matthew Green", gender: "male", location: "Glasgow", country: "🇬🇧", avatar: avatar2, reward: "Instant Cash Giftcard", comment: "Received my $750 Instant Cash Giftcard today! The process was smooth and super quick!", verified: true, timestamp: "19 hours ago" },
  { id: 23, name: "Jennifer Adams", gender: "female", location: "Houston, TX", country: "🇺🇸", avatar: avatar3, reward: "Amazon Gift Card", comment: "This really works! Got my $750 Amazon code and bought a new tablet. Amazing!", verified: true, timestamp: "20 hours ago" },
  { id: 24, name: "Ryan Baker", gender: "male", location: "Perth", country: "🇦🇺", avatar: avatar4, reward: "Instant Cash Giftcard", comment: "$750 in Instant Cash Giftcard! Finished the deals quickly and money showed up fast. Highly recommend!", verified: true, timestamp: "21 hours ago" },
  { id: 25, name: "Ashley Turner", gender: "female", location: "Philadelphia, PA", country: "🇺🇸", avatar: avatar5, reward: "Amazon Gift Card", comment: "Just received $750 Amazon voucher! Shopping for home decor now. This is legit!", verified: true, timestamp: "22 hours ago" },
  { id: 26, name: "Tyler Hill", gender: "male", location: "Ottawa, ON", country: "🇨🇦", avatar: avatar1, reward: "Instant Cash Giftcard", comment: "Got my $750 Instant Cash Giftcard! Super easy process. Already using it for bills!", verified: true, timestamp: "23 hours ago" },
  { id: 27, name: "Samantha Lewis", gender: "female", location: "Denver, CO", country: "🇺🇸", avatar: avatar2, reward: "Amazon Gift Card", comment: "My $750 Amazon gift card came through! Bought kitchen appliances. So happy!", verified: true, timestamp: "1 day ago" },
  { id: 28, name: "Eric Nelson", gender: "male", location: "Liverpool", country: "🇬🇧", avatar: avatar3, reward: "Instant Cash Giftcard", comment: "Claimed $750 in Instant Cash Giftcard! The deals were easy and payment was instant. Love it!", verified: true, timestamp: "1 day ago" },
  { id: 29, name: "Laura Walker", gender: "female", location: "San Francisco, CA", country: "🇺🇸", avatar: avatar4, reward: "Amazon Gift Card", comment: "Received my $750 Amazon voucher! Used it for electronics. This is amazing!", verified: true, timestamp: "1 day ago" },
  { id: 30, name: "Justin Hall", gender: "male", location: "Adelaide", country: "🇦🇺", avatar: avatar5, reward: "Instant Cash Giftcard", comment: "$750 Instant Cash Giftcard reward is in my account! Quick and legit. Totally worth it!", verified: true, timestamp: "1 day ago" },
  { id: 31, name: "Megan Allen", gender: "female", location: "Atlanta, GA", country: "🇺🇸", avatar: avatar1, reward: "Amazon Gift Card", comment: "Got my $750 Amazon code! Shopping for clothes and shoes now. Thank you!", verified: true, timestamp: "1 day ago" },
  { id: 32, name: "Derek Carter", gender: "male", location: "Winnipeg, MB", country: "🇨🇦", avatar: avatar2, reward: "Instant Cash Giftcard", comment: "Received $750 in Instant Cash Giftcard! The process was simple and fast. Highly recommend!", verified: true, timestamp: "1 day ago" },
  { id: 33, name: "Kimberly Wright", gender: "female", location: "Las Vegas, NV", country: "🇺🇸", avatar: avatar3, reward: "Amazon Gift Card", comment: "My $750 Amazon voucher is here! Bought furniture for my apartment. So excited!", verified: true, timestamp: "2 days ago" },
  { id: 34, name: "Aaron Mitchell", gender: "male", location: "Leeds", country: "🇬🇧", avatar: avatar4, reward: "Instant Cash Giftcard", comment: "$750 Instant Cash Giftcard received! The deals were straightforward. This is legit!", verified: true, timestamp: "2 days ago" },
  { id: 35, name: "Melissa Roberts", gender: "female", location: "Minneapolis, MN", country: "🇺🇸", avatar: avatar5, reward: "Amazon Gift Card", comment: "Just got my $750 Amazon gift card! Used it for books and games. Amazing service!", verified: true, timestamp: "2 days ago" },
  { id: 36, name: "Nathan Perez", gender: "male", location: "Auckland", country: "🇳🇿", avatar: avatar1, reward: "Instant Cash Giftcard", comment: "Claimed my $750 Instant Cash Giftcard! Fast and easy. Already using the money!", verified: true, timestamp: "2 days ago" },
  { id: 37, name: "Christina Campbell", gender: "female", location: "Charlotte, NC", country: "🇺🇸", avatar: avatar2, reward: "Amazon Gift Card", comment: "Received $750 Amazon voucher! Bought gifts for everyone. This really works!", verified: true, timestamp: "2 days ago" },
  { id: 38, name: "Brian Phillips", gender: "male", location: "Edmonton, AB", country: "🇨🇦", avatar: avatar3, reward: "Instant Cash Giftcard", comment: "Got $750 in Instant Cash Giftcard! Deals were easy to complete. Money came fast!", verified: true, timestamp: "2 days ago" },
  { id: 39, name: "Angela Evans", gender: "female", location: "Nashville, TN", country: "🇺🇸", avatar: avatar4, reward: "Amazon Gift Card", comment: "My $750 Amazon code arrived! Shopping for home goods now. So grateful!", verified: true, timestamp: "2 days ago" },
  { id: 40, name: "Gregory Edwards", gender: "male", location: "Sheffield", country: "🇬🇧", avatar: avatar5, reward: "Instant Cash Giftcard", comment: "Received my $750 Instant Cash Giftcard! This is the real deal. Highly recommend!", verified: true, timestamp: "3 days ago" },
  { id: 41, name: "Heather Collins", gender: "female", location: "Detroit, MI", country: "🇺🇸", avatar: avatar1, reward: "Amazon Gift Card", comment: "Got my $750 Amazon voucher! Used it for groceries and essentials. Thank you!", verified: true, timestamp: "3 days ago" },
  { id: 42, name: "Patrick Stewart", gender: "male", location: "Hobart", country: "🇦🇺", avatar: avatar2, reward: "Instant Cash Giftcard", comment: "$750 Instant Cash Giftcard claimed! The process was quick and simple. Love it!", verified: true, timestamp: "3 days ago" },
  { id: 43, name: "Kelly Morris", gender: "female", location: "Orlando, FL", country: "🇺🇸", avatar: avatar3, reward: "Amazon Gift Card", comment: "Just received my $750 Amazon gift card! Bought electronics and accessories!", verified: true, timestamp: "3 days ago" },
  { id: 44, name: "Craig Rogers", gender: "male", location: "Halifax, NS", country: "🇨🇦", avatar: avatar4, reward: "Instant Cash Giftcard", comment: "Got $750 in Instant Cash Giftcard! Deals were easy and payment was instant. Awesome!", verified: true, timestamp: "3 days ago" },
  { id: 45, name: "Victoria Reed", gender: "female", location: "Tampa, FL", country: "🇺🇸", avatar: avatar5, reward: "Amazon Gift Card", comment: "My $750 Amazon voucher is here! Shopping for clothes and beauty products!", verified: true, timestamp: "3 days ago" },
  { id: 46, name: "Marcus Cook", gender: "male", location: "Bristol", country: "🇬🇧", avatar: avatar1, reward: "Instant Cash Giftcard", comment: "Received $750 Instant Cash Giftcard! This actually works. Highly recommend to everyone!", verified: true, timestamp: "3 days ago" },
  { id: 47, name: "Diana Bailey", gender: "female", location: "Baltimore, MD", country: "🇺🇸", avatar: avatar2, reward: "Amazon Gift Card", comment: "Got my $750 Amazon code! Used it for sports equipment. So happy!", verified: true, timestamp: "4 days ago" },
  { id: 48, name: "Jordan Rivera", gender: "male", location: "Wellington", country: "🇳🇿", avatar: avatar3, reward: "Instant Cash Giftcard", comment: "$750 Instant Cash Giftcard in my account! Quick process. Money showed up fast!", verified: true, timestamp: "4 days ago" },
  { id: 49, name: "Tiffany Cooper", gender: "female", location: "San Antonio, TX", country: "🇺🇸", avatar: avatar4, reward: "Amazon Gift Card", comment: "Just claimed $750 Amazon voucher! Bought home decor and furniture. Amazing!", verified: true, timestamp: "4 days ago" },
  { id: 50, name: "Vincent Hughes", gender: "male", location: "Saskatoon, SK", country: "🇨🇦", avatar: avatar5, reward: "Instant Cash Giftcard", comment: "Got my $750 Instant Cash Giftcard! The deals were simple. This is totally legit!", verified: true, timestamp: "4 days ago" }
];

export const TestimonialComments = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsSliding(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="animate-fade-in bg-gradient-to-b from-white to-gray-50 rounded-xl shadow-lg border border-gray-100 p-4 sm:p-6 md:p-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
        What Our Users Say About Their $750 Rewards
      </h2>

      <div className="mb-6 sm:mb-8 overflow-hidden">
        <div
          className={`transition-all duration-500 ${
            isSliding ? "translate-x-[-100%] opacity-0" : "translate-x-0 opacity-100"
          }`}
        >
            <div
              className={`bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md border-l-4 ${
                currentTestimonial.reward === "Amazon Gift Card"
                  ? "border-orange-400 bg-gradient-to-r from-orange-50/30 to-white"
                  : "border-green-500 bg-gradient-to-r from-green-50/30 to-white"
              }`}
            >
            <div className="flex gap-3 sm:gap-4">
              <img
                src={currentTestimonial.avatar}
                alt={currentTestimonial.name}
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover flex-shrink-0 border-2 border-white shadow-md"
                loading="lazy"
                decoding="async"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1 sm:mb-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-800 text-base sm:text-lg md:text-xl truncate">
                      {currentTestimonial.name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 truncate">
                      {currentTestimonial.location} {currentTestimonial.country}
                    </p>
                  </div>
                  {currentTestimonial.verified && (
                    <div className="bg-green-100 border border-green-300 rounded-full px-2 sm:px-3 py-1 flex items-center gap-1 flex-shrink-0">
                      <span className="text-green-600 text-xs sm:text-sm font-semibold">✓ Verified</span>
                    </div>
                  )}
                </div>
                
                <div className="mb-2 sm:mb-3">
                  <span className={`inline-block text-sm sm:text-base font-semibold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full ${
                    currentTestimonial.reward === "Amazon Gift Card"
                      ? "bg-orange-100 text-orange-700"
                      : "bg-green-100 text-green-700"
                  }`}>
                    {currentTestimonial.reward === "Amazon Gift Card" ? "📦" : "💳"} {currentTestimonial.reward}
                  </span>
                </div>

                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-2 sm:mb-3">
                  {currentTestimonial.comment}
                </p>

                <p className="text-gray-500 text-xs sm:text-sm">
                  {currentTestimonial.timestamp}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-1 mb-6">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-8 bg-purple-600" : "w-1.5 bg-gray-300"
            }`}
          />
        ))}
      </div>

      <div className="text-center">
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
        >
          🎉 Claim Your $750 Reward Now
        </Button>
      </div>
    </div>
  );
};
