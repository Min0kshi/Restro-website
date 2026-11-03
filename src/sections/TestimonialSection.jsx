import Animated from "../components/Animated"
import { testimonials } from "../data/data"

const TestimonialSection = () => {
  return (
    <section id="testimonial" className="px-auto mt-14">
      <div className="text-center mb-16">
        <Animated delay={0.2}>
          <p className="text-orange-500 font-medium uppercase mb-4">
            LOVE BY FOOD LOVERS
          </p>
        </Animated>

        <Animated delay={0.2}>
          <h2 className="text-4xl md:text-5xl max-w-lg mx-auto text-balance">
            What our guests Say
          </h2>
        </Animated>
      </div>

      {/* Testimonial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {testimonials.map((item, index) => (
          <Animated
            key={index}
            y={80}
            delay={index * 0.1}
            className="border border-slate-200 hover:bg-slate-50/50 rounded-2xl p-6 flex flex-col justify-between text-left"
          >
            <div>
              <div className="mb-4 flex gap-1">
                {[...Array(item.rating)].map((_, i) => (
                  <span key={i} className= "size-4 fill-orang-500 text-orange-500 text-base">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-zinc-600 leading-relaxed mb-6">"{item.review}"

              </p>
            </div>
            <div className="flex items-center gap-3 mt-auto">
              <img
                src={item.avatar}
                alt={item.name}
                className="size-11 rounded-full object-cover shrink-0"
              />
              <div>
                <p className="font-medium leading-text-tight mb-0.5">{item.name}</p>
                <p className="text-zinc-600">{item.location}</p>
              </div>
            </div>
           
          </Animated>
        ))}
      </div>
    </section>
  )
}

export default TestimonialSection