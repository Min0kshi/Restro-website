import { ArrowRight } from 'lucide-react';
import Animated from '../components/Animated'

const floatingDishes = [
  {
    src: "/assets/dish1.png",
    alt: "dish1",
    className: "top-4 left-[9%]",
  },
  {
    src: "/assets/dish2.png",
    alt: "dish2",
    className: "bottom-4 left-[13%]",
  },
  {
    src: "/assets/dish3.png",
    alt: "dish3",
    className: "top-4 right-[9%]",
  },
  {
    src: "/assets/dish4.png",
    alt: "dish4",
    className: "bottom-4 right-[13%]",
  },
];

const CTA = () => {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-orange-500 px-6 flex flex-col 
      justify-center items-center min-h-100 md:min-h-110 mt-44"
    >

      {/* Floating Dishes */}
      <div className="absolute inset-0 w-full max-w-7xl mx-auto pointer-events-none">

        {floatingDishes.map((dish) => (
          <img
            key={dish.src}
            src={dish.src}
            alt={dish.alt}
            className={`absolute size-30 md:size-50 
            rounded-full object-cover 
            pointer-events-auto transition-all duration-300 
            hover:scale-110 ${dish.className}`}
          />
        ))}

      </div>
<div className="relative z-10 text-center max-w-2xl mx-auto">
    <Animated>
<h1 className="text-3xl md:text-[40px] font-medium text-white font-urbanist text-balance">
Every Meal Is Made To Be Remembered
</h1>
    </Animated>

     <Animated y={20} delay={0.2}>
<p className="mt-4 text-white max-w-sm mx-auto">
Join us for fresh ingredients, signature replace and an unforgettable dining experience
</p>
    </Animated>

    <Animated delay={0.2} className="flex items-center justify-center">
<a href="#bookingProcess" className="flex items-center gap-2.5 bg-white text-black pl-5 pr-2 py-2 
rounded-full mt-5.5 transition">
  Book Your Table  
</a>
<span className="size-7 rounded-full bg-black text-white grid place-content-center">
    <ArrowRight size={16} />
</span>
    </Animated>

</div>
    </section>
  );
};

export default CTA;