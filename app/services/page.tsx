import NextImage from "next/image";
import Link from "next/link";
import {
  Flame,
  Shield,
  Bell,
  Wrench,
  Wind,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      id: "hose-reel",
      title: "Hose Reel Systems",
      image: "/images/services/hose-reel.jpg",
      short: "Designed & installed for industrial and commercial applications.",
      long: [
        "Hose reel systems provide a controlled reel of hose for fast firefighting response inside buildings. We design systems to meet NFPA standards and local regulations, specifying hose length, diameter and mounting suitable for the building type.",
        "Installation includes wall-mounted cabinets, pressure testing, and a full commissioning report. We also provide user training so staff know how to access and operate hose reels safely during an emergency.",
      ],
      icon: <Flame className="w-6 h-6 text-red-600" />,
    },
    {
      id: "hydrant",
      title: "Fire Hydrant Systems",
      image: "/images/services/fire-hydrant.jpg",
      short:
        "Reliable underground network + hydrants for firefighting readiness.",
      long: [
        "Our fire hydrant systems include underground mains, branch lines, hydrant posts and valves designed for optimal flow rates. We model hydraulic performance to ensure adequate pressure and coverage for expected fire scenarios.",
        "We offer installation, testing (flushing and flow tests), and regular maintenance contracts to keep hydrants operational and compliant with local codes.",
      ],
      icon: <Shield className="w-6 h-6 text-blue-600" />,
    },
    {
      id: "alarm",
      title: "Fire Alarm Systems",
      image: "/images/services/fire-alarm.jpg",
      short: "Conventional & addressable systems for early detection & alert.",
      long: [
        "We supply and install both conventional and addressable fire alarm systems. Addressable systems provide precise device-level diagnostics and faster fault isolation, making them ideal for larger or more complex buildings.",
        "Services include detector selection (optical, heat, multi-sensor), control panel installation, notification appliances, emergency voice alarm systems (EVAS) and integration with building management systems where required.",
      ],
      icon: <Bell className="w-6 h-6 text-orange-500" />,
    },
    {
      id: "refilling",
      title: "Refilling & New Installation",
      image: "/images/services/refilling.jpg",
      short: "Fire extinguisher servicing, refilling and new setup.",
      long: [
        "We service and refill handheld extinguishers (ABC, CO₂, water, foam) following manufacturer recommendations and regulatory requirements. Each service includes pressure checks, cylinder inspection, and recharging with certified agents.",
        "New installations are carried out to suit risk profiles — selecting correct capacities and types for kitchens, electrical rooms, machinery spaces and public areas.",
      ],
      icon: <Wrench className="w-6 h-6 text-green-600" />,
    },
    {
      id: "flooding",
      title: "CO₂ & FM200 Flooding Systems",
      image: "/images/services/co2.jpg",
      short: "Sensitive-area suppression without collateral damage.",
      long: [
        "Clean agent systems such as CO₂ and FM-200 are suitable for server rooms, archives, and other sensitive areas where water would cause unacceptable damage. We design gas distribution networks, cylinders, and control sequences to ensure fast, safe discharge.",
        "Our services include risk assessment, system design, installation, gas charge, and annual maintenance checks to verify concentrations and integrity.",
      ],
      icon: <Wind className="w-6 h-6 text-cyan-600" />,
    },
    {
      id: "blankets",
      title: "Fire Blankets & Automated Fire Balls",
      image: "/images/services/fire-ball.jpg",
      short: "Innovative solutions for smothering fires before they spread.",
      long: [
        "Fire blankets are a low-cost, easy-to-use solution for small kitchen fires and personal protection. Automated fire balls are novel devices that self-activate when exposed to flame and can rapidly suppress small localized fires.",
        "We supply certified fire blankets, demo their correct use, and recommend suitable placements for maximum effectiveness.",
      ],
      icon: <CheckCircle className="w-6 h-6 text-amber-600" />,
    },
    {
      id: "protection-detection",
      title: "Fire Protection & Detection",
      image: "/images/services/detect.jpg",
      short:
        "Comprehensive measures and systems to prevent, detect, and suppress fires.",
      long: [
        "Fire protection and detection services encompass a range of measures and systems aimed at preventing, detecting, and suppressing fires to ensure the safety of people and property. Our comprehensive approach includes risk assessment, system design, and implementation of cutting-edge technology.",
        "We provide complete solutions including smoke detectors, heat sensors, flame detectors, manual call points, and integrated monitoring systems that work together to provide early warning and rapid response to fire incidents.",
      ],
      icon: <Shield className="w-6 h-6 text-purple-600" />,
    },
    {
      id: "repair",
      title: "All Items Repair",
      image: "/images/services/repair.jpg",
      short:
        "Expert repair services for all fire safety equipment and systems.",
      long: [
        "These repair services typically involve diagnosing the issue, replacing faulty components, fixing damaged parts, and restoring the item to its working condition. Our experienced technicians are equipped to handle repairs for all types of fire safety equipment.",
        "We offer comprehensive repair services for fire extinguishers, alarm systems, sprinkler systems, hydrant systems, and all associated components. Each repair includes thorough testing and certification to ensure equipment meets safety standards and operates reliably.",
      ],
      icon: <Wrench className="w-6 h-6 text-indigo-600" />,
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-red-900 to-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl p-8 md:p-16 border-2 border-white/10 space-y-6 md:space-y-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto text-pretty">
              Comprehensive fire safety solutions tailored to protect your
              people, property and peace of mind
            </p>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
        {/* (Overview removed — details are on this page and in Home) */}

        {/* Detailed sections */}
        <section className="space-y-12">
          {services.map((s, i) => (
            <div
              id={s.id}
              key={s.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
            >
              <div className={`${i % 2 === 0 ? "order-none" : "md:order-2"}`}>
                <div className="relative h-90 rounded-lg overflow-hidden shadow-lg">
                  <NextImage
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    {s.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {s.title}
                  </h2>
                </div>
                <p className="text-muted-foreground mb-4">{s.long[0]}</p>
                <p className="text-muted-foreground mb-4">{s.long[1]}</p>

                <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-4">
                  <li>Site survey & risk assessment</li>
                  <li>Custom design & specification</li>
                  <li>Professional installation and testing</li>
                  <li>Commissioning report & certification</li>
                  <li>Planned maintenance & emergency support</li>
                </ul>
                {/* 
                <div className="flex items-center gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md font-semibold"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="#training"
                    className="inline-flex items-center gap-2 text-red-600 font-semibold"
                  >
                    See Training
                  </Link>
                </div> */}
              </div>
            </div>
          ))}
        </section>

        {/* Training Section */}
        <section id="training" className="mt-20">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Fire Safety Training Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Equip your team with the knowledge and skills to respond
              effectively in critical situations
            </p>
          </div>

          {/* Training Info Card */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 md:p-12 border-2 border-red-200 shadow-lg mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
                <NextImage
                  src="/images/home-training.jpg"
                  alt="Fire Safety Training"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Industry Training Programs
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We deliver practical, industry-focused fire safety training
                  designed to prepare your staff for real emergencies. Programs
                  are available for manufacturing facilities, commercial
                  properties, hospitality sites and institutional clients.
                </p>

                <div>
                  <h4 className="text-lg font-bold text-foreground mb-3">
                    What We Cover
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Fire risk awareness & legal responsibilities",
                      "Fire extinguisher types, selection & hands-on use",
                      "Evacuation procedures and assembly point management",
                      "Use of hose reels and hydrant outlets",
                      "Practical drills tailored to your site layout",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-red-200">
                  <p className="text-sm text-muted-foreground">
                    Courses can be run on-site at your facility or at our
                    training centre. We tailor the length and content to your
                    workforce — from short awareness sessions to full practical
                    drills.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                >
                  Book Training Session
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Training Videos */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Training Videos
              </h3>
              <p className="text-muted-foreground">
                Watch our recent on-site training sessions and practical
                demonstrations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="https://youtu.be/_7FezXBCPaQ?si=3ZiOHTuRb-CSOfxd"
                target="_blank"
                rel="noreferrer"
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-red-600"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <NextImage
                    src="https://img.youtube.com/vi/_7FezXBCPaQ/maxresdefault.jpg"
                    alt="Training session 1"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-lg mb-2 group-hover:text-red-600 transition-colors">
                    Practical Fire Drill
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Hands-on extinguisher and evacuation training demonstration
                  </p>
                </div>
              </a>

              {/* <a
                href="https://youtu.be/_7FezXBCPaQ?si=3ZiOHTuRb-CSOfxd"
                target="_blank"
                rel="noreferrer"
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-red-600"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <NextImage
                    src="https://img.youtube.com/vi/20Iu3dWlQKU/maxresdefault.jpg"
                    alt="Training session 2"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-lg mb-2 group-hover:text-red-600 transition-colors">
                    Factory Staff Training
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Focused on hazard recognition and emergency response
                    protocols
                  </p>
                </div>
              </a>

              <a
                href="https://www.youtube.com/watch?v=mXksZPQl0Wo"
                target="_blank"
                rel="noreferrer"
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-red-600"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <NextImage
                    src="https://img.youtube.com/vi/mXksZPQl0Wo/maxresdefault.jpg"
                    alt="Training session 3"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-lg mb-2 group-hover:text-red-600 transition-colors">
                    Emergency Evacuation Drill
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Large-scale evacuation and incident coordination procedures
                  </p>
                </div>
              </a> */}
            </div>
          </div>
        </section>

        {/* Contact info */}
        <section className="mt-12 rounded-xl p-6 md:p-8 bg-red-50">
          <div className="max-w-3xl mx-auto text-center">
            <h4 className="text-xl font-bold mb-2">Get In Touch</h4>
            <p className="text-muted-foreground mb-4">
              For quotes, site surveys and training enquiries, contact our team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+94771202780"
                className="text-lg font-semibold text-red-600"
              >
                077 120 2780
              </a>
              <a
                href="mailto:info@newkandyfire.lk"
                className="text-lg font-semibold"
              >
                info@newkandyfire.lk
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Based in Kandy - we serve clients across Sri Lanka
            </p>
          </div>
        </section>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Copyright ©{new Date().getFullYear()} New Kandy Fire. All Rights
            Reserved
          </p>
        </div>
      </div>
    </main>
  );
}
