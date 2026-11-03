import Animated from '../components/Animated'

const avatars = [
    "/assets/user-1.jpeg",
    "/assets/user-2.jpeg",
    "/assets/user-3.jpeg",
    "/assets/user-4.jpeg",
]
const HeroSection = () => {
  return (
    <section className='flex flex-col items-center min-h-screen justify-center bg-[url("/assets/heroBanner.png")] bg-cover bg-center bg-no-repeat px-4 pt-20'>
    
    <Animated y={-20} delay={0.2}>

        <p className='text-orange-600 text-center text-size-lg'>Welcome to our restaurant!
           <p className='text-center text-size-lg'>Where culinary delights meet exceptional service.</p>
        </p>

    </Animated>
<Animated>

    <h1 className='text-5xl md:text-4xl font-medium max-w-5*1 text-center mt-7 font-urbanist text text-balance'>Delicious Food, Exceptional Experience</h1>
</Animated>

 <Animated delay={0.2}>

        <p className='text-zinc-600 max-w-md text-center mt-3 '>Experience carefully curated menus, 
            fresh local ingredients and impeccable services in a space made for every celebration.</p>

    </Animated>


<Animated>
<a href="#booking-process" className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 mt-8 rounded-full block transition duration-300">
    Book a table
</a>

</Animated>

<Animated className="flex items-center justify-center md:justify-start mt-9">

<div className="flex -space-x-3.5 pr-3">
  
        {avatars.map((src,index)=>(
            <img key={index} src={src} alt="guest" className="size-10 border-2 border-slate-50 rounded-full hover:translate-y-px transition"/>
        ))}
    </div>

      <div>
        <div>
{[...Array(5)].map((_,index)=>(
    <star key={index} className="size-3.5 fill-orange-500 text-orange text-orange-500"/>
))}
        </div>
        <p className="text-zinc-800">4.8/5 Rating - 10,000 reviews</p>
</div>
</Animated>
    </section>
  )
}

export default HeroSection