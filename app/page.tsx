import Image from "next/image";
import Link from "next/link";
import HeroSlider from "./components/HeroSlider";
import {
  Flame,
  Shield,
  Bell,
  Wrench,
  Wind,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Award,
  Users,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: <Flame className="w-8 h-8" />,
      title: "Hose Reel Systems",
      description:
        "Designed & installed for industrial and commercial applications.",
      link: "/services#hose-reel",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Fire Hydrant Systems",
      description:
        "Reliable underground network + hydrants for firefighting readiness.",
      link: "/services#hydrant",
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Fire Alarm Systems",
      description:
        "Conventional & addressable systems for early detection & alert.",
      link: "/services#alarm",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Refilling & New Installation",
      description: "Fire extinguisher servicing, refilling and new setup.",
      link: "/services#refilling",
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "CO₂ & FM200 Flooding Systems",
      description: "Sensitive-area suppression without collateral damage.",
      link: "/services#flooding",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Fire Blankets & Automated Fire Balls",
      description:
        "Innovative solutions for smothering fires before they spread.",
      link: "/services#blankets",
    },
  ];

  const credentials = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Founded in 2015",
      description: "Nearly a decade of expertise",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Nationwide Coverage",
      description: "Serving all of Sri Lanka",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Certified Engineers",
      description: "Expert fire safety professionals",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Rapid emergency response",
    },
  ];

  const projects = [
    {
      name: "Hela",
      category: "Manufacturing",
      description:
        "Complete fire safety system installation including fire extinguishers, alarm systems, and emergency evacuation planning for Sri Lanka's leading apparel manufacturer.",
      image: "/images/projects/hela.png",
    },
    {
      name: "One Galle Face",
      category: "Hospitality & Retail",
      description:
        "Comprehensive fire protection systems for the iconic mixed-use development, including advanced fire alarm systems and hydrant networks.",
      image: "/images/projects/onegalleface.jpg",
    },
    {
      name: "Crysbro",
      category: "Food Processing",
      description:
        "Industrial-grade fire suppression systems and safety equipment installation for one of Sri Lanka's largest poultry processing facilities.",
      image: "/images/projects/crysbro.webp",
    },
    {
      name: "Delight",
      category: "Food & Beverage",
      description:
        "Fire safety solutions including kitchen suppression systems, fire extinguishers, and staff training programs for the popular restaurant chain.",
      image: "/images/projects/images.png",
    },
    {
      name: "Seetha",
      category: "Manufacturing",
      description:
        "Complete fire detection and suppression system installation with regular maintenance services for the manufacturing facility.",
      image: "/images/projects/seetha.png",
    },
    {
      name: "Suwasevana Hospital",
      category: "Healthcare",
      description:
        "Advanced fire alarm systems, emergency lighting, and evacuation systems ensuring patient safety and regulatory compliance.",
      image: "/images/projects/suwasevana.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section - Redesigned */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-red-50">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-red-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-orange-500/10 blur-[120px] rounded-full" />

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-red-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-semibold">
                  Certified Fire Safety Experts Since 2015
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 leading-[1.1]">
                  Your Safety
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-red-700">
                    Our Priority
                  </span>
                </h1>
                <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-orange-600 rounded-full shadow-md" />
              </div>

              {/* Description */}
              <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
                Complete fire protection solutions across Sri Lanka. From
                advanced detection systems to comprehensive training programs—we
                protect what matters most.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-red-700 hover:to-orange-700 hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-red-600/30 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Get Emergency Service
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 border-2 border-gray-300 hover:border-red-600 shadow-md hover:shadow-lg"
                >
                  View Services
                </Link>
              </div>

              {/* Stats Row - Redesigned */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-red-600 hover:shadow-lg transition-all">
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                      10+
                    </div>
                    <div className="text-sm text-gray-600 font-semibold mt-1">
                      Years Experience
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-red-600 hover:shadow-lg transition-all">
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                      500+
                    </div>
                    <div className="text-sm text-gray-600 font-semibold mt-1">
                      Projects Done
                    </div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-red-600 hover:shadow-lg transition-all">
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                      24/7
                    </div>
                    <div className="text-sm text-gray-600 font-semibold mt-1">
                      Support
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Hero Slider with Enhanced Design */}
            <div className="relative -mt-12 lg:ml-8">
              {/* Glow effect behind slider */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-orange-500/20 blur-3xl rounded-full scale-110" />

              {/* Slider container with border */}
              <div className="relative rounded-2xl overflow-hidden border-4 border-gray-200 shadow-2xl hover:border-red-400 hover:shadow-red-600/20 transition-all duration-500">
                <HeroSlider />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-16 -left-6 bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-4 rounded-xl shadow-2xl border-4 border-white hover:scale-110 transition-transform">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Flame className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold opacity-90">
                      Certified By
                    </div>
                    <div className="text-lg font-black">NFPA Standards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive fire safety solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group bg-white rounded-xl p-6 md:p-8 border-2 border-gray-200 hover:border-red-600 transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-red-100 hover:-translate-y-1"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-red-50 rounded-lg flex items-center justify-center text-red-600 mb-4 md:mb-6 group-hover:bg-red-600 group-hover:text-white group-hover:scale-105 group-hover:rotate-3 transition-all duration-200">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-red-600 font-semibold text-sm md:text-base group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 bg-pattern-grid">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Why Choose Us
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Your trusted partner in fire safety excellence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
            {credentials.map((cred, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 md:p-8 border-2 border-gray-200 text-center shadow-md hover:shadow-lg hover:border-blue-500 hover:-translate-y-1 transition-all duration-200 group"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105 transition-all duration-200">
                  {cred.icon}
                </div>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                  {cred.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {cred.description}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 border-2 border-red-200 shadow-md hover:shadow-lg hover:border-red-600 hover:scale-105 transition-all duration-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground font-semibold mb-1">
                    Call Us Now
                  </p>
                  <a
                    href="tel:+94771202780"
                    className="text-base md:text-lg font-bold text-red-600 hover:text-red-700 transition-colors break-all"
                  >
                    077-120-2780
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border-2 border-blue-200 shadow-md hover:shadow-lg hover:border-blue-600 hover:scale-105 transition-all duration-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground font-semibold mb-1">
                    Email Us
                  </p>
                  <a
                    href="mailto:info@newkandyfire.lk"
                    className="text-base md:text-lg font-bold text-blue-600 hover:text-blue-700 transition-colors break-all"
                  >
                    info@newkandyfire.lk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 border-2 border-red-200 shadow-lg hover:shadow-xl hover:border-red-600 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
                  About <span className="text-red-600">New Kandy Fire</span>
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  New Kandy Fire has been dedicated since 2015 to delivering
                  end-to-end fire protection in Sri Lanka—from system design and
                  installation to maintenance and training.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Based in Kadugannawa, we support residential, commercial and
                  industrial clients with prompt service and certified
                  equipment. Our commitment to safety excellence has made us a
                  trusted name across the nation.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Learn More About Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="relative h-64 md:h-96 rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-4 border-red-100">
                <Image
                  src="/images/home-team.jpg"
                  alt="New Kandy Fire Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-red-pattern">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-12 border-2 border-white/20 shadow-2xl text-white hover:bg-white/15 transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
                  Fire Safety Training Programs
                </h2>
                <p className="text-base md:text-xl leading-relaxed opacity-95">
                  We provide comprehensive fire safety training for your staff,
                  including practical drills and emergency preparedness. Equip
                  your team with the knowledge and skills to respond effectively
                  in critical situations.
                </p>
                <ul className="space-y-3">
                  {[
                    "Practical fire drill training",
                    "Emergency evacuation procedures",
                    "Fire extinguisher operation",
                    "First aid and safety protocols",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300"
                    >
                      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 mt-0.5 opacity-90" />
                      <span className="text-sm md:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Book Training Session
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="relative h-64 md:h-96 rounded-xl md:rounded-2xl overflow-hidden shadow-lg order-first lg:order-last hover:scale-105 transition-transform duration-300 border-4 border-white/30">
                <Image
                  src="/images/home-training.jpg"
                  alt="Fire Safety Training"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Our Past Projects
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Trusted by Sri Lanka's leading brands and organizations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl md:rounded-2xl overflow-hidden border-2 border-gray-200 shadow-md hover:shadow-lg hover:shadow-red-100 hover:border-red-600 hover:-translate-y-1 transition-all duration-200"
              >
                {/* Project Image */}
                <div className="relative h-48 md:h-56 overflow-hidden bg-muted">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 group-hover:rotate-1 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 right-3 md:top-4 md:right-4">
                    <span className="bg-white/95 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs md:text-sm font-semibold border border-gray-200 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all duration-300">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-5 md:p-6 space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-red-600 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects CTA */}
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-base md:text-lg border-2 border-red-600 hover:bg-white hover:text-red-600 hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-red-900 to-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-12 border-2 border-white/10 space-y-6 md:space-y-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
              Need Fire Safety Consultation?
            </h2>
            <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto text-pretty">
              Get a free safety audit and expert recommendations for your
              property
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-red-900 px-8 py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-red-600 hover:text-white hover:scale-105 transition-all duration-200 shadow-md hover:shadow-red-500/50"
            >
              Request Free Audit
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
