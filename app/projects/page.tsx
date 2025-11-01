import NextImage from "next/image";
import Link from "next/link";
import { Building2, MapPin, CheckCircle2 } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      name: "Suwasewana Hospital Pvt Ltd",
      category: "Healthcare",
      location: "Kandy",
      image: "/images/projects/suwasevana.jpg",
      description:
        "Complete fire safety systems including alarms, extinguishers, and emergency evacuation planning for patient safety.",
    },
    {
      name: "Asgiri Mahaviharaya – Rest",
      category: "Religious & Cultural",
      location: "Mahanuwara",
      image: "/images/services/asgiri.jpeg",
      description:
        "Fire protection for heritage buildings and public assembly areas with sensitive, non-intrusive installations.",
    },
    {
      name: "The Grand Kandyan Hotel",
      category: "Hospitality",
      location: "Kandy",
      image: "/images/services/Grand-Kandyan.jpg",
      description:
        "Comprehensive hotel fire safety: detection systems, suppression equipment, kitchen systems, and staff training.",
    },
    {
      name: "PVR Cinema – One Galle Face",
      category: "Entertainment & Retail",
      location: "Colombo",
      image: "/images/projects/onegalleface.jpg",
      description:
        "Advanced fire alarm and suppression systems for high-occupancy cinema and retail complex.",
    },
    {
      name: "All Ceylon",
      category: "Commercial",
      location: "Sri Lanka",
      image: "/images/services/apparel.png",
      description:
        "Multi-site fire safety installations and ongoing maintenance contracts across locations.",
    },
    {
      name: "Hela Clothing Pvt LTD",
      category: "Manufacturing",
      location: "Sri Lanka",
      image: "/images/projects/hela.png",
      description:
        "Industrial fire protection including hydrant systems, extinguishers, and worker training programs.",
    },
    {
      name: "Celogen Lanka",
      category: "Manufacturing",
      location: "Sri Lanka",
      image: "/images/services/celogen.jpeg",
      description:
        "Specialized fire suppression for manufacturing processes and storage facilities.",
    },
    {
      name: "Original Apparel Hanguranketha",
      category: "Manufacturing",
      location: "Hanguranketha",
      image: "/images/services/apparel.png",
      description:
        "Factory fire safety systems, regular inspections, and emergency response drills.",
    },
    {
      name: "Kandy City Center",
      category: "Retail & Commercial",
      location: "Kandy",
      image: "/images/services/Grand-Kandyan.jpg",
      description:
        "Shopping complex fire protection: alarms, sprinklers, exit signage, and evacuation systems.",
    },
    {
      name: "Little England Cottages",
      category: "Hospitality",
      location: "Nuwara Eliya",
      image: "/images/services/liitle-england.png",
      description:
        "Boutique hospitality fire safety with aesthetically integrated detection and suppression.",
    },
    {
      name: "Devon Restaurant",
      category: "Food & Beverage",
      location: "Kandy",
      image: "/images/services/devon.png",
      description:
        "Kitchen fire suppression systems, extinguishers, and staff training for restaurant safety.",
    },
    {
      name: "Delight Group",
      category: "Food & Beverage",
      location: "Sri Lanka",
      image: "/images/projects/delight.png",
      description:
        "Multi-location fire safety for restaurant chain including kitchen systems and regular servicing.",
    },
    {
      name: "Seetha Holdings",
      category: "Manufacturing",
      location: "Sri Lanka",
      image: "/images/projects/seetha.png",
      description:
        "Industrial fire protection with clean agent systems and maintenance contracts.",
    },
    {
      name: "Kelun Life Sciences",
      category: "Pharmaceutical",
      location: "Sri Lanka",
      image: "/images/services/kelun.jpeg",
      description:
        "Specialized suppression for sensitive pharmaceutical manufacturing and storage areas.",
    },
    {
      name: "Kandy Post Office",
      category: "Government & Public",
      location: "Kandy",
      image: "/images/services/kandy-post.jpg",
      description:
        "Fire safety upgrades for public service building including detection and manual systems.",
    },
    {
      name: "All Ceylon Electricity Board",
      category: "Government & Utilities",
      location: "Sri Lanka",
      image: "/images/services/ceylon-electricity.jpg",
      description:
        "Electrical facility fire protection with specialized systems for high-risk areas.",
    },
    {
      name: "CRYSBRO Group of Companies",
      category: "Food Processing",
      location: "Sri Lanka",
      image: "/images/projects/crysbro.webp",
      description:
        "Large-scale industrial fire protection for poultry processing facilities nationwide.",
    },
    {
      name: "Embilmeegama Tea Factory",
      category: "Manufacturing",
      location: "Embilmeegama",
      image: "/images/services/Embilmeegama-Tea-Factory.png",
      description:
        "Fire safety for tea processing facility including suppression and early warning systems.",
    },
    {
      name: "Home Aselro Holding",
      category: "Commercial",
      location: "Sri Lanka",
      image: "/images/services/Home-Aselro-Holding.png",
      description:
        "Corporate fire safety systems, maintenance services, and compliance audits.",
    },
    {
      name: "Cafe The Vibe",
      category: "Food & Beverage",
      location: "Kandy",
      image: "/images/services/cafe-vibe.jpeg",
      description:
        "A large, popular café in Kandy — installed kitchen suppression, extinguishers, and staff training to ensure safe service operations.",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-red-900 to-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl p-8 md:p-16 border-2 border-white/10 space-y-6 md:space-y-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance">
              Our Projects
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto text-pretty">
              Trusted by leading organizations across Sri Lanka delivering
              excellence in fire safety solutions
            </p>
          </div>
        </div>
      </section>

      {/* Projects Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
        {/* Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
            <div className="text-sm text-muted-foreground">
              Projects Completed
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-red-600 mb-2">10+</div>
            <div className="text-sm text-muted-foreground">
              Years Experience
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
            <div className="text-sm text-muted-foreground">
              Client Satisfaction
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support</div>
          </div>
        </div>

        {/* Projects Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <NextImage
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start gap-2 mb-3">
                  <Building2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <h3 className="text-lg font-bold text-foreground leading-tight">
                    {project.name}
                  </h3>
                </div>

                <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{project.location}</span>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex items-center gap-2 text-green-600 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Completed</span>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* CTA Section */}
        <section className="mt-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Protect Your Property?
          </h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Join these leading organizations in ensuring comprehensive fire
            safety. Contact us for a free consultation and site survey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/30"
            >
              View Our Services
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
