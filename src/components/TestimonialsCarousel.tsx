import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import testimonialApplePay from "@/assets/testimonial-apple-pay.png";
import testimonialNew from "@/assets/testimonial-new.png";
import testimonial1 from "@/assets/testimonial-1.png";
import testimonial2 from "@/assets/testimonial-2.png";
import testimonial3 from "@/assets/testimonial-3.png";
import testimonial4 from "@/assets/testimonial-4.png";

const testimonials = [
  {
    id: 0,
    image: testimonialApplePay,
    alt: "Apple Pay reward showing $750 earned"
  },
  {
    id: 1,
    image: testimonialNew,
    alt: "Amazon gift card balance showing $750"
  },
  {
    id: 2,
    image: testimonial1,
    alt: "User testimonial showing Amazon package received"
  },
  {
    id: 3,
    image: testimonial2,
    alt: "User testimonial showing gift card success"
  },
  {
    id: 4,
    image: testimonial3,
    alt: "User testimonial showing reward claim"
  },
  {
    id: 5,
    image: testimonial4,
    alt: "User showing gift card balance"
  }
];

export const TestimonialsCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      requestAnimationFrame(() => {
        api.scrollNext();
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="w-full max-w-md mx-auto animate-fade-in">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
          duration: 20,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4" style={{ willChange: 'transform' }}>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 basis-4/5">
              <div className="p-1">
                <div className="rounded-2xl overflow-hidden shadow-lg bg-white/90 backdrop-blur-sm" style={{ willChange: 'transform' }}>
                  <img
                    src={testimonial.image}
                    alt={testimonial.alt}
                    className="w-full h-[400px] sm:h-[450px] md:h-[500px] object-contain"
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "low"}
                    decoding={index === 0 ? "sync" : "async"}
                    width={index === 0 ? "1001" : undefined}
                    height={index === 0 ? "1920" : undefined}
                    style={{ willChange: 'transform' }}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-white/80 border-pink-200 hover:bg-white/90" />
        <CarouselNext className="right-2 bg-white/80 border-pink-200 hover:bg-white/90" />
      </Carousel>
    </div>
  );
};
