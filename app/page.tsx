import Image from "next/image";
import Link from "next/link";
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
        "Complete fire safety system installation including fire extinguishers, alarm systems, and emergency evacuation planning for Sri Lanka&apos;s leading apparel manufacturer.",
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
        "Industrial-grade fire suppression systems and safety equipment installation for one of Sri Lanka&apos;s largest poultry processing facilities.",
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
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 pb-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-white z-10" />
          <Image
            src="/images/hero-bg.jpg"
            alt="Fire Safety Equipment"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-image-url['/images/white-bg.jpg']">
            {/* Left Side - Text Content */}
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-6 md:p-9 border-2 border-red-600 shadow-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 animate-fade-in-up">
                Trusted Fire Safety Solutions
                <span className="block text-red-400 mt-2">in Sri Lanka</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in-up-delay">
                Complete fire protection systems, equipment and servicing by New
                Kandy Fire safeguarding lives, property & business since 2015.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up-delay">
                <Link
                  href="/contact"
                  className="group relative bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get a Free Quote
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></span>
                </Link>
                <Link
                  href="/services"
                  className="backdrop-blur-md bg-white/20 text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-red-100 transition-all duration-300 shadow-lg border border-red-500"
                >
                  View Services
                </Link>
              </div>
            </div>

            {/* Right Side - Hero Image */}
            <div className="hidden lg:block">
              <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md bg-white/10 border border-white/20">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-gray-900/40 z-10"></div>
                <Image
                  src="/images/hero-img.png"
                  alt="Fire Safety Professional"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Floating Badge */}
                <div className="absolute bottom-8 left-8 z-20 backdrop-blur-lg bg-white/20 rounded-2xl p-4 border border-white/30">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">10+ Years</p>
                      <p className="text-white text-sm">of Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-20 h-20 bg-red-500/20 rounded-full blur-xl"></div>
        </div>
        <div className="absolute bottom-20 right-10 animate-float animation-delay-200">
          <div className="w-32 h-32 bg-orange-500/20 rounded-full blur-xl"></div>
        </div>
      </section>

      {/* Our Services Snapshot */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive fire safety solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group relative backdrop-blur-lg bg-white/80 rounded-2xl p-8 border border-gray-200 hover:border-red-500 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 group-hover:scale-105">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <span className="inline-flex items-center text-red-600 font-semibold group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your trusted partner in fire safety excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {credentials.map((cred, index) => (
              <div
                key={index}
                className="backdrop-blur-lg bg-white/90 rounded-2xl p-8 border border-gray-200 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 mx-auto mb-4">
                  {cred.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {cred.title}
                </h3>
                <p className="text-gray-600 text-sm">{cred.description}</p>
              </div>
            ))}
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="backdrop-blur-lg bg-gradient-to-br from-red-50/80 to-white/80 rounded-2xl p-6 border border-red-200 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-semibold">
                    Call Us Now
                  </p>
                  <a
                    href="tel:+94771202780"
                    className="text-lg font-bold text-red-600 hover:text-red-700"
                  >
                    077-120-2780
                  </a>
                </div>
              </div>
            </div>
            <div className="backdrop-blur-lg bg-gradient-to-br from-blue-50/80 to-white/80 rounded-2xl p-6 border border-blue-200 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-semibold">
                    Email Us
                  </p>
                  <a
                    href="mailto:info@newkandyfire.lk"
                    className="text-lg font-bold text-blue-600 hover:text-blue-700"
                  >
                    info@newkandyfire.lk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Brief */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-lg bg-white/80 rounded-3xl p-8 md:p-12 border border-gray-200 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  About <br />
                  <span className="text-red-600">New Kandy Fire</span>
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  New Kandy Fire has been dedicated since 2015 to delivering
                  end-to-end fire protection in Sri Lanka—from system design and
                  installation to maintenance and training.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Based in Kadugannawa, we support residential, commercial and
                  industrial clients with prompt service and certified
                  equipment. Our commitment to safety excellence has made us a
                  trusted name across the nation.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Learn More About Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-gray-900/40"></div>
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

      {/* Training Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-lg bg-gradient-to-br from-red-500 to-red-500 rounded-3xl p-8 md:p-12 border border-red-800 shadow-2xl text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Fire Safety Training Programs
                </h2>
                <p className="text-xl text-red-50 mb-6 leading-relaxed">
                  We provide comprehensive fire safety training for your staff,
                  including practical drills and emergency preparedness. Equip
                  your team with the knowledge and skills to respond effectively
                  in critical situations.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Practical fire drill training",
                    "Emergency evacuation procedures",
                    "Fire extinguisher operation",
                    "First aid and safety protocols",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-red-200 flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-full font-bold hover:bg-red-50 transition-all duration-300 shadow-lg"
                >
                  Book Training Session
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-gray-900/40"></div>
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

      {/* Past Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Past Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by Sri Lanka&apos;s leading brands and organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group backdrop-blur-lg bg-white/90 rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-red-100 to-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="backdrop-blur-md bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold border border-white/30">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/5 group-hover:to-transparent transition-all duration-300 pointer-events-none rounded-2xl" />
              </div>
            ))}
          </div>

          {/* View All Projects CTA */}
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 backdrop-blur-lg bg-white/80 text-red-600 px-8 py-4 rounded-full font-bold text-lg border-2 border-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-gray-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Need Fire Safety Consultation?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Get a free safety audit and expert recommendations for your
              property
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/20 transform hover:scale-105"
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
