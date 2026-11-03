import Animated from '../components/Animated'
import { timingData } from '../data/data'

const Timing = () => {
  return (
    <section id="timing" className="px-4 md:px-6 mt-32 md:mt-44">

      <Animated
        scale={0.8}
        y={0}
        className="w-full max-w-5xl min-h-105 md:min-h-130 
        rounded-3xl bg-cover bg-center flex items-center 
        justify-center md:justify-start px-5 md:px-14 
        overflow-hidden mx-auto bg-[url('/assets/restro-timing.png')]"
      >

        {/* White Card Overlay */}

        <div className="bg-white rounded-2xl p-6 md:p-7 w-full max-w-75 shadow-lg">

          {/* Heading */}
          <Animated>
            <h3 className="text-lg font-semibold text-zinc-800 mb-6 text-center">
              Opening time:
            </h3>
          </Animated>

          {/* Opening Hours */}
          <div className="space-y-4">

            {timingData.map((item, index) => (

              <Animated
                key={index}
                delay={index * 0.1}
                className="flex justify-between items-center gap-3"
              >

                <span className="text-sm font-medium text-zinc-500">
                  {item.day}
                </span>

                <span
                  className={`text-xs font-medium whitespace-nowrap ${
                    item.hours.toLowerCase() === 'closed'
                      ? 'text-zinc-400'
                      : 'text-zinc-500'
                  }`}
                >
                  {item.hours}
                </span>

              </Animated>

            ))}

          </div>

          {/* Booking Button */}
          <Animated delay={0.2} className="mt-7 flex justify-center">

            <a
              href="#booking-process"
              className="bg-orange-500 hover:bg-orange-600 
              text-white text-xs font-semibold 
              px-6 py-3 rounded-full transition-all duration-300"
            >
              Book a table
            </a>

          </Animated>

        </div>

      </Animated>

    </section>
  )
}

export default Timing