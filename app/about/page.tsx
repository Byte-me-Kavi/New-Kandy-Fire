import NextImage from "next/image";
import Link from "next/link";
import {
  Shield,
  Bell,
  Flame,
  AlertTriangle,
  Award,
  Target,
  CheckCircle2,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";

export default function AboutPage() {
  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Detection Service",
      description:
        "The quicker you know about the fire, the quicker you can fight the fire.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Alarm & Evacuation",
      description:
        "Protecting your people from fire means getting them away from the fire.",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: "Extinguishing Services",
      description:
        "Protecting what matters. Extinguish the fire to protect people and places.",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Danger Management",
      description:
        "Managing your building means managing your building&apos;s fire protection.",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
  ];

  const team = [
    {
      name: "Jayalal Wasalthilake",
      role: "Managing Director",
      image: "/images/team/director.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        youtube: "https://www.youtube.com/@NewKandyFireOfficial",
      },
    },
    {
      name: "Minidu Wasalthilaka",
      role: "Board of Directors",
      image: "/images/team/minidu.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        youtube: "https://www.youtube.com/@NewKandyFireOfficial",
      },
    },
    {
      name: "Nishanthi Wasalthilake",
      role: "Board of Directors",
      image: "/images/team/nishanthi.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        youtube: "https://www.youtube.com/@NewKandyFireOfficial",
      },
    },
  ];

  const stats = [
    { value: "08+", label: "Years of Experience" },
    { value: "500+", label: "Projects Completed" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-red-900 to-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl p-8 md:p-16 border-2 border-white/10 space-y-6 md:space-y-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto text-pretty">
              Your Trusted Fire Safety Partner Since 2015 Protecting Lives and
              Property Across Sri Lanka
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our Company is managed according to the policy of good quality
                and rigorous management. We are offering a wide range of
                services including design consultation, supply, installation,
                inspection, and commissioning.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Since 2015, New Kandy Fire has been Sri Lanka&apos;s trusted
                partner in fire safety solutions. We combine technical expertise
                with a commitment to protecting lives and property across
                industrial, commercial, and residential sectors.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-semibold">Certified Professionals</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-semibold">Quality Guaranteed</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-semibold">Nationwide Service</span>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <NextImage
                src="/images/home-team.jpg"
                alt="New Kandy Fire Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Do
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive fire safety services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-red-600 transition-all duration-300 shadow-md hover:shadow-lg group"
              >
                <div
                  className={`w-16 h-16 ${service.bgColor} rounded-lg flex items-center justify-center ${service.color} mb-4 group-hover:scale-110 transition-transform`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide innovative, reliable, and cost-effective fire safety
                solutions that protect lives, property, and the environment. We
                strive to exceed industry standards through continuous
                improvement and exceptional customer service.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To be Sri Lanka&apos;s most trusted fire safety partner,
                recognized for excellence in service delivery, technical
                expertise, and commitment to safeguarding communities. We aim to
                set new benchmarks in fire protection across all sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Meet the experts behind New Kandy Fire
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-72 w-full overflow-hidden">
                  <NextImage
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-red-600 font-semibold mb-4">
                    {member.role}
                  </p>

                  <div className="flex items-center justify-center gap-3">
                    <a
                      href={member.social.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 bg-[#1DA1F2] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={member.social.youtube}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 bg-[#FF0000] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                      aria-label="YouTube"
                    >
                      <Youtube className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Partner With Us Today
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Experience the difference of working with Sri Lanka&apos;s leading
            fire safety experts. Get a free consultation and discover how we can
            protect what matters most to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/30"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="py-8 text-center bg-white">
        <p className="text-sm text-muted-foreground">
          Copyright ©{new Date().getFullYear()} New Kandy Fire. All Rights
          Reserved
        </p>
      </div>
    </main>
  );
}
