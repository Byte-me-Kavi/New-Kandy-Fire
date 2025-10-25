import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-br from-white via-red-50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-100/50 via-transparent to-blue-100/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
          <div className="max-w-2xl">
            <div className="inline-block mb-4 px-4 py-2 bg-red-600 text-white text-sm font-bold rounded-full shadow-lg">
              🔥 Sri Lanka's Trusted Fire Safety Partner
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Fire Safety Solutions You Can{" "}
              <span className="text-red-600">Trust</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              Protecting lives and property across Sri Lanka with cutting-edge
              fire safety equipment and expert services
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 text-center"
              >
                Get Free Consultation
              </a>
              <a
                href="/services"
                className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-red-600 hover:text-white transition-all text-center"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-red-600 font-bold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 mt-2">
              New Kandy Fire Excellence
            </h2>
            <p className="text-xl text-gray-600">
              Your trusted partner in fire safety solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-red-100 hover:border-red-600">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                <div className="text-red-600 text-4xl group-hover:text-white transition-colors">
                  🔥
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Expert Service
              </h3>
              <p className="text-gray-600">
                Certified professionals with years of experience in fire safety
                solutions
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-blue-100 hover:border-blue-600">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <div className="text-blue-600 text-4xl group-hover:text-white transition-colors">
                  🛡️
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Quality Products
              </h3>
              <p className="text-gray-600">
                Premium fire safety equipment from leading international brands
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-red-100 hover:border-red-600">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                <div className="text-red-600 text-4xl group-hover:text-white transition-colors">
                  ⚡
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Round-the-clock emergency support and maintenance services
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
