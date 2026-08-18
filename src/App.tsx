import { useState, useEffect } from 'react';
import {
  Search,
  ShoppingBag,
  CornerUpLeft,
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
  Trash2,
  Recycle,
  Truck,
  Building2,
  Home,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
} from 'lucide-react';

const BG_IMAGE =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260624_110248_b62f758d-f68c-4045-a7b4-91771d6d0a0f.png&w=1280&q=85';

const AVATAR =
  'https://polo-pecan-73837341.figma.site/_assets/v11/ca8093996e970200cbcf8bde8744175e52da5a79.png';
const CAPSULE_IMG =
  'https://polo-pecan-73837341.figma.site/_assets/v11/6a7de4fbe9c9e2315040607320a9ff5e93117bf4.png';
const PRODUCT_IMG =
  'https://polo-pecan-73837341.figma.site/_assets/v11/50ad042b3cd48a2e120ea3ba17c8cfeaf3cc334c.png';
const PANEL1_DECOR =
  'https://polo-pecan-73837341.figma.site/_assets/v11/6736cbe6e26afa2cd7c04a91892a79f7640785b5.png';
const PANEL3_PRODUCT = '/src/assets/images/panel3_trust_image.png';

const HERO_FLOATING_IMG = '/src/assets/images/product.png';
const ABOUT_IMG_1 = '/src/assets/images/image.jpg';
const ABOUT_IMG_2 = '/src/assets/images/image1.jpg';
const TEAM_IMG = '/src/assets/images/WhatsApp_Image_2026-08-18_at_13.37.15.jpeg';

const NAV_LINKS = ['About', 'Services', 'Promotions', 'Contact'];

const CARDS = [
  { icon: Sparkles, bg: 'bg-black', text: 'Deep cleaning that brings a fresh, spotless shine to every room' },
  { icon: Recycle, bg: 'bg-emerald-800', text: 'Eco-friendly waste sorting and recycling for homes & offices' },
  { icon: Sparkles, bg: 'bg-cyan-800', text: 'Sanitisation & disinfection for a healthier environment' },
  { icon: Truck, bg: 'bg-amber-700', text: 'Reliable scheduled waste collection across Mafikeng' },
];

const SERVICES = [
  {
    icon: Home,
    title: 'Residential Cleaning',
    desc: 'Thorough home cleaning — kitchens, bathrooms, floors, and living areas — handled by vetted, trained staff.',
    points: ['One-off deep cleans', 'Weekly / monthly contracts', 'Move-in & move-out cleans'],
  },
  {
    icon: Building2,
    title: 'Commercial & Industrial Cleaning',
    desc: 'Professional cleaning for offices, retail stores, warehouses, and industrial facilities of any size.',
    points: ['After-hours service', 'Trained & uniformed teams', 'Custom SLA agreements'],
  },
  {
    icon: Trash2,
    title: 'Waste Collection & Removal',
    desc: 'Scheduled refuse collection and bulk waste removal for residential complexes and businesses.',
    points: ['Reliable pickup schedules', 'Bulk & garden refuse', 'Same-day call-outs'],
  },
  {
    icon: Recycle,
    title: 'Recycling & Disposal',
    desc: 'Responsible sorting, recycling, and safe disposal of waste to reduce landfill impact.',
    points: ['Paper, plastic & glass', 'E-waste collection', 'Compliant disposal certificates'],
  },
  {
    icon: Sparkles,
    title: 'Specialised Deep Cleaning',
    desc: 'Post-construction, pre-occupancy, and industrial-grade sanitisation cleaning services.',
    points: ['Post-build clean-ups', 'Sanitisation & disinfection', 'Carpet & upholstery'],
  },
  {
    icon: Truck,
    title: 'Mini Skip & Rubble Removal',
    desc: 'Hassle-free skip hire and rubble removal for renovations, clear-outs, and garden projects.',
    points: ['Skip bin delivery', 'Rubble & soil removal', 'Quick turnaround'],
  },
];

const STATS = [
  { value: '500+', label: 'Properties cleaned monthly' },
  { value: '12+', label: 'Tons of waste recycled' },
  { value: '98%', label: 'Client retention rate' },
  { value: '24/7', label: 'Support & call-outs' },
];

const GALLERY = [
  { src: ABOUT_IMG_1, title: 'Sparkling Office Spaces' },
  { src: ABOUT_IMG_2, title: 'Spotless Home Interiors' },
];

const WORD_DELAYS = ['delay-300', 'delay-400', 'delay-500', 'delay-600', 'delay-700', 'delay-800', 'delay-900'];

function Word({ children, delay, className = '' }: { children: React.ReactNode; delay: string; className?: string }) {
  return (
    <span className="inline-block overflow-hidden align-bottom">
      <span className={`inline-block animate-word ${delay} ${className}`}>{children}</span>
    </span>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const [activeGallery, setActiveGallery] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActiveCard((prev) => (prev + 1) % CARDS.length), 3500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setActiveGallery((prev) => (prev + 1) % GALLERY.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${BG_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Navbar */}
      <nav className={`animate-fade-in relative ${menuOpen ? 'z-40' : 'z-20'} flex items-center justify-between px-5 py-4 sm:px-8 lg:px-10 lg:py-5`}>
        <div
          className="animate-slide-left delay-200 text-white flex items-center gap-2"
          style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: '32px', letterSpacing: '-0.02em' }}
        >
          KLIN IT UP
        </div>

        <div className="animate-fade-in delay-400 hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-white/90 transition-colors hover:text-white"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: '18px' }}
            >
              {link}
            </a>
          ))}
        </div>

        <div className="animate-slide-right delay-300 flex items-center gap-4 lg:gap-5">
          <button className="hidden sm:block rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black transition-colors hover:bg-white/90">
            Get Quote
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white transition-opacity hover:opacity-70 lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-30 flex flex-col items-center justify-center gap-8 bg-black/90 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-2xl text-white"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
            >
              {link}
            </a>
          ))}
        </div>
      )}

      {/* Hero content */}
      <section className="relative z-10 flex flex-1 flex-col justify-center px-5 pb-8 pt-4 sm:px-8 lg:px-10 lg:pb-16 lg:pt-6">
        {/* Product image */}
        <div className="absolute top-[40%] sm:top-[15%] lg:top-[25%] z-0 pointer-events-none w-[90%] sm:w-[65%] lg:w-[45%] max-w-[1000px] left-1/2 -translate-x-1/2 sm:left-auto sm:right-0 sm:translate-x-[15%] lg:translate-x-[20%]">
          <img
            src={HERO_FLOATING_IMG}
            alt="Klin It Up cleaning"
            className="animate-scale-in delay-800 w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>

        <h1
          className="text-white relative z-10 pointer-events-none"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, letterSpacing: '-0.05em' }}
        >
          <span className="block text-[48px] leading-[50px] sm:text-[80px] sm:leading-[72px] md:text-[110px] md:leading-[95px] lg:text-[130px] lg:leading-[110px] xl:text-[155px] xl:leading-[125px]">
            <Word delay={WORD_DELAYS[0]}>Clean </Word>
            <Word delay={WORD_DELAYS[1]}>Spaces,</Word>
            <Word delay={WORD_DELAYS[2]} className="text-white/45">in</Word>
          </span>
          <span className="block text-[48px] leading-[50px] sm:text-[80px] sm:leading-[72px] md:text-[110px] md:leading-[95px] lg:text-[130px] lg:leading-[110px] xl:text-[155px] xl:leading-[125px]">
            <Word delay={WORD_DELAYS[3]} className="text-white/45">Every </Word>
            <Word delay={WORD_DELAYS[4]} className="text-white/45">Corner </Word>
            <Word delay={WORD_DELAYS[5]}>We</Word>
          </span>
          <span className="block text-[48px] leading-[50px] sm:text-[80px] sm:leading-[72px] md:text-[110px] md:leading-[95px] lg:text-[130px] lg:leading-[110px] xl:text-[155px] xl:leading-[125px]">
            <Word delay={WORD_DELAYS[6]}>Klin</Word>
            <img
              src={CAPSULE_IMG}
              alt="Sparkle"
              className="animate-scale-in delay-1000 ml-2 hidden align-middle sm:inline-block lg:ml-4"
              style={{ height: 'clamp(60px, 10vw, 160px)', width: 'auto' }}
            />
          </span>
        </h1>

        {/* CTA */}
        <div className="animate-fade-up delay-600 mt-8 flex flex-col gap-5 sm:mt-12 sm:flex-row sm:items-center sm:gap-8 lg:mt-[75px] lg:gap-[50px] relative z-10">
          <button
            className="flex h-14 w-full items-center justify-center gap-2 rounded-md bg-black text-white transition-all hover:bg-black/85 sm:w-[240px] md:w-[280px] lg:h-[72px] lg:w-[310px]"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, letterSpacing: '-0.03em', fontSize: '16px' }}
          >
            <span className="text-base sm:text-lg lg:text-2xl">Book a Clean</span>
            <ArrowUpRight size={22} strokeWidth={1.5} className="lg:h-7 lg:w-7" />
          </button>
          <p
            className="max-w-[340px] text-white"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: 1.45, letterSpacing: '-0.03em' }}
          >
            <span className="sm:text-base lg:text-lg">Professional cleaning & waste management services for homes and businesses across Mafikeng.</span>
          </p>
        </div>
      </section>

      {/* Bottom 3-panel grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-[2fr_1fr_2fr]">
        {/* Panel 1 */}
        <div className="animate-fade-up delay-900 relative overflow-hidden bg-[#ECEDEC] p-6 sm:p-8 lg:p-10" style={{ backgroundImage: 'url(/src/assets/images/image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10">
            <p
              className="max-w-[350px] text-white"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: '24px', lineHeight: 1.1, letterSpacing: '-0.05em' }}
            >
              <span className="sm:text-[28px] lg:text-[35px]">Book a free site assessment and get a tailored cleaning plan</span>
            </p>
            <a
              href="#contact"
              className="mt-4 inline-block underline text-white sm:mt-6"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '16px', letterSpacing: '-0.03em' }}
            >
              <span className="lg:text-lg">Request a Quote</span>
            </a>
          </div>
        </div>

        {/* Panel 2 - Carousel */}
        <div className="animate-fade-up delay-1000 relative flex flex-col justify-between bg-[#FEFDF9] p-6 sm:p-8 lg:p-10">
          <div className="relative flex-1">
            {CARDS.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className={`flex items-start gap-3 transition-all duration-500 sm:gap-4 ${
                    i === activeCard ? 'translate-y-0 opacity-100' : 'absolute inset-0 translate-y-4 opacity-0'
                  }`}
                >
                  <div className={`flex h-10 shrink-0 items-center justify-center rounded-full ${card.bg} sm:h-12`}>
                    <Icon size={18} strokeWidth={1.5} className="text-white sm:h-5 sm:w-5" />
                  </div>
                  <p
                    className="text-black/80"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: 1.2, letterSpacing: '-0.03em' }}
                  >
                    <span className="sm:text-base lg:text-lg">{card.text}</span>
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-6 flex gap-2">
            {CARDS.map((_, i) => (
              <div
                key={i}
                className={`h-0.5 flex-1 rounded-full transition-colors duration-300 ${
                  i === activeCard ? 'bg-black' : 'bg-black/20'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Panel 3 */}
        <div className="animate-fade-up delay-1100 flex items-center gap-4 bg-black p-6 sm:gap-6 sm:p-8 lg:p-10">
          <img
            src={PANEL3_PRODUCT}
            alt="Klin It Up"
            className="h-[82px] w-[120px] shrink-0 object-contain sm:h-[110px] sm:w-[160px] lg:h-[142px] lg:w-[208px]"
          />
          <div>
            <p
              className="text-white"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '24px', letterSpacing: '-0.05em' }}
            >
              <span className="sm:text-3xl lg:text-[35px]">500+</span>
            </p>
            <p
              className="mt-1 text-white/60"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: 1.2 }}
            >
              <span className="sm:text-base lg:text-lg">Happy clients trust us with their spaces every month</span>
            </p>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <section className="relative z-10 grid grid-cols-2 gap-px bg-black/10 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="bg-white p-6 text-center lg:p-8">
            <p className="text-3xl font-semibold text-black lg:text-4xl" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-black/60 lg:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
              {stat.label}
            </p>
          </div>
        ))}
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 lg:mb-16">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-black/50" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              What We Do
            </p>
            <h2
              className="text-4xl text-black sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, letterSpacing: '-0.05em', lineHeight: 1.05 }}
            >
              Services built around <br className="hidden sm:block" />your space
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group rounded-xl border border-black/10 p-6 transition-all hover:border-black/30 hover:shadow-lg lg:p-8"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-black/5 text-black transition-colors group-hover:bg-black group-hover:text-white">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3
                    className="mb-3 text-xl text-black lg:text-2xl"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, letterSpacing: '-0.03em' }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="mb-4 text-black/70"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '15px', lineHeight: 1.5 }}
                  >
                    {service.desc}
                  </p>
                  <ul className="space-y-2">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-sm text-black/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                        <CheckCircle2 size={16} strokeWidth={1.5} className="text-black" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 bg-[#F5F7FA] py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-black/50" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              About KLIN IT UP
            </p>
            <h2
              className="mb-6 text-4xl text-black sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, letterSpacing: '-0.05em', lineHeight: 1.05 }}
            >
              Cleaning and waste management, done right
            </h2>
            <div className="space-y-4 text-black/70" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: 1.6 }}>
              <p>
                KLIN IT UP is a South African cleaning and waste management company committed to delivering
                reliable, professional service to homes, businesses, and industrial clients. We combine trained
                teams with eco-conscious practices to keep your space spotless and your waste responsibly handled.
              </p>
              <p>
                From routine residential cleaning to large-scale commercial contracts and scheduled waste
                collection, we tailor every service to fit your needs — because no two spaces are the same.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: CheckCircle2, label: 'Vetted & trained staff' },
                { icon: CheckCircle2, label: 'Eco-friendly products' },
                { icon: CheckCircle2, label: 'Flexible scheduling' },
                { icon: CheckCircle2, label: 'Fully insured' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-2 text-black/80" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '15px' }}>
                    <Icon size={18} strokeWidth={1.5} className="text-black" />
                    {item.label}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative grid grid-cols-2 gap-4">
            <img src={ABOUT_IMG_1} alt="Cleaning service" className="h-full w-full rounded-xl object-cover" />
            <img src={ABOUT_IMG_2} alt="Waste management" className="mt-12 h-full w-full rounded-xl object-cover" />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="relative z-10 bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end lg:mb-16">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-wider text-black/50" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                Our Work
              </p>
              <h2
                className="text-4xl text-black sm:text-5xl lg:text-6xl"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, letterSpacing: '-0.05em', lineHeight: 1.05 }}
              >
                Spaces we've transformed
              </h2>
            </div>
          </div>

          {/* Featured rotating image */}
          <div className="relative mb-6 overflow-hidden rounded-2xl">
            {GALLERY.map((item, i) => (
              <div
                key={i}
                className={`transition-all duration-700 ${i === activeGallery ? 'opacity-100' : 'absolute inset-0 opacity-0'}`}
              >
                <img src={item.src} alt={item.title} className="h-[300px] w-full object-cover sm:h-[400px] lg:h-[500px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <p className="absolute bottom-6 left-6 text-2xl text-white" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-3">
            {GALLERY.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveGallery(i)}
                className={`overflow-hidden rounded-lg transition-all ${i === activeGallery ? 'ring-2 ring-black' : 'opacity-60 hover:opacity-100'}`}
              >
                <img src={item.src} alt={item.title} className="h-16 w-full object-cover sm:h-24" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 bg-black py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-white/50" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              Get In Touch
            </p>
            <h2
              className="mb-6 text-4xl text-white sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, letterSpacing: '-0.05em', lineHeight: 1.05 }}
            >
              Let's get your space klin
            </h2>
            <p className="mb-8 max-w-md text-white/70" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: 1.6 }}>
              Ready for a cleaner, healthier space? Request a free quote and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-5">
              <a href="tel:+27210000000" className="flex items-center gap-4 text-white transition-opacity hover:opacity-70">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10"><Phone size={18} strokeWidth={1.5} className="text-white" /></div>
                <div>
                  <p className="text-sm text-white/50" style={{ fontFamily: 'Inter, sans-serif' }}>Call us</p>
                  <p className="text-lg" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>+27 21 000 0000</p>
                </div>
              </a>
              <a href="mailto:info@klinitup.co.za" className="flex items-center gap-4 text-white transition-opacity hover:opacity-70">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10"><Mail size={18} strokeWidth={1.5} className="text-white" /></div>
                <div>
                  <p className="text-sm text-white/50" style={{ fontFamily: 'Inter, sans-serif' }}>Email us</p>
                  <p className="text-lg" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>info@klinitup.co.za</p>
                </div>
              </a>
              <div className="flex items-center gap-4 text-white">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10"><MapPin size={18} strokeWidth={1.5} className="text-white" /></div>
                <div>
                  <p className="text-sm text-white/50" style={{ fontFamily: 'Inter, sans-serif' }}>Service area</p>
                  <p className="text-lg" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Mafikeng</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10"><Clock size={18} strokeWidth={1.5} className="text-white" /></div>
                <div>
                  <p className="text-sm text-white/50" style={{ fontFamily: 'Inter, sans-serif' }}>Working hours</p>
                  <p className="text-lg" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>Mon–Sat, 7:00 – 18:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={(e) => { e.preventDefault(); alert('Thanks! We will be in touch shortly.'); }}
            className="rounded-2xl bg-white p-6 sm:p-8"
          >
            <h3 className="mb-6 text-2xl text-black" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, letterSpacing: '-0.03em' }}>
              Request a free quote
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  required
                  placeholder="First name"
                  className="rounded-lg border border-black/15 px-4 py-3 text-black outline-none transition-colors focus:border-black"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px' }}
                />
                <input
                  type="text"
                  required
                  placeholder="Last name"
                  className="rounded-lg border border-black/15 px-4 py-3 text-black outline-none transition-colors focus:border-black"
                  style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px' }}
                />
              </div>
              <input
                type="email"
                required
                placeholder="Email address"
                className="w-full rounded-lg border border-black/15 px-4 py-3 text-black outline-none transition-colors focus:border-black"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px' }}
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full rounded-lg border border-black/15 px-4 py-3 text-black outline-none transition-colors focus:border-black"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px' }}
              />
              <select
                required
                defaultValue=""
                className="w-full rounded-lg border border-black/15 px-4 py-3 text-black outline-none transition-colors focus:border-black"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px' }}
              >
                <option value="" disabled>Select a service</option>
                {SERVICES.map((s) => <option key={s.title} value={s.title}>{s.title}</option>)}
              </select>
              <textarea
                rows={3}
                placeholder="Tell us about your space..."
                className="w-full rounded-lg border border-black/15 px-4 py-3 text-black outline-none transition-colors focus:border-black"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px' }}
              />
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-black py-3 text-white transition-colors hover:bg-black/85"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '16px' }}
              >
                Send Request
                <ArrowUpRight size={20} strokeWidth={1.5} />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-white" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: '20px', letterSpacing: '-0.05em' }}>
            KLIN IT UP
          </p>
          <p className="text-sm text-white/50" style={{ fontFamily: 'Inter, sans-serif' }}>
            © 2026 KLIN IT UP. Cleaning & waste management services. Mafikeng, South Africa.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
