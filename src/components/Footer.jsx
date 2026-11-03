import Animated from '../components/Animated'
import { socialLinks, quickLinks, sitemapLinks } from '../data/data'
import { Mail, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative mt-44 overflow-hidden px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top Row */}
        <div className="flex flex-wrap gap-6 justify-between pb-8">

          {/* Column 1 - Brand & Socials */}
          <div className="flex flex-col items-start text-left">

            <Animated>
              <img src="/assets/logo.svg" alt="logo" />
            </Animated>

            <Animated delay={0.2}>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 max-w-xs">
                Serving freshly prepared dishes with authentic flavors,
                premium ingredients and exceptional hospitality every day.
              </p>
            </Animated>

            {/* Social Links */}
            <div className="flex items-center gap-1.5 mt-6">
              {socialLinks.map((item, index) => (
                <Animated key={index} delay={index * 0.05}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Social media link"
                    className="size-7.5 rounded-full border border-slate-300 grid place-content-center"
                  >
                    {item.icon}
                  </a>
                </Animated>
              ))}
            </div>

          </div>

          {/* Column 2 - Quick Links */}
<div>
  <p className="font-medium mb-5">Quick Links </p>
  <div className="flex flex-col gap-2.5"></div>
  {quickLinks.map((link, index)=>(
<Animated key={link.name} delay={index * 0.05}>
  <a
                    href={link.href}
                  className='text-zinc-600 hover:text-zinc-500'
                  >
                    {link.name}
                  </a>
                  </Animated>
 ))}

</div>


          {/* Column 3 - Get in Touch */}
<div>
   <p className="font-medium mb-5">Get in Touch </p>
   <div className="space-y-2">
    <Animated>
      <a href="mailto:restro@gmail.com" className="flex items-center gap-1 text-zinc-600 hover:text-zinc-500">
        <Mail size={16} className="shrink-0"/> restro@gmail.com
      </a>
    </Animated>

<Animated delay={0.2}>
      <a href="tel:987-642-3010" className="flex items-center gap-1 text-zinc-600 hover:text-zinc-500">
        <Phone size={16} className="shrink-0"/> 987-642-3010
      </a>
    </Animated>

   </div>
</div>
          {/* Column 4 - Sitemap */}
<div>
  <p className="font-medium mb-5">Sitemap</p>
  <div className="flex flex-col gap-2.5">
{sitemapLinks.map((link, index)=>(
<Animated key={link.name} delay={index * 0.05}>
  <a href={link.href} className='text-zinc-600" hover:text-zinc-500'>
    {link.name}
  </a>

</Animated>
))}
  </div>
</div>


        </div>

        {/* Bottom Bar */}
        <div className='border-t text-zinc-500 border-slate-200 py-4.5 flex justify-between items-center'>
<p>© 2026. All Right Reserved </p>

{/* feel it  Url */}

<p> Designed By Feel it <a href="#"> Feel it</a></p>
        </div>

     </div>

{/* Watermark Logo Backdrop */}
<div className="absolute inset-0 text-center select-none -z-10 pointer-events-none overflow-hidden">
  <span className="text-[300px] tracking-wide font-urbanist font-semibold text-zinc-100/90">
    Restro
  </span>
</div>

    </footer>
  )
}

export default Footer