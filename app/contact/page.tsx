"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Building2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-red-900 to-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl p-8 md:p-16 border-2 border-white/10 space-y-6 md:space-y-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto text-pretty">
              Get in touch for fire safety consultation, emergency service or
              project inquiries
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b mt-30 from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-32 mb-2">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-red-600">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2">
                Email Address
              </h3>
              <a
                href="mailto:info@newkandyfire.lk"
                className="text-foreground font-semibold hover:text-red-600 transition-colors break-all"
              >
                info@newkandyfire.lk
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-red-600">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2">
                Phone Numbers
              </h3>
              <div className="space-y-1">
                <a
                  href="tel:+94771202777"
                  className="block text-foreground font-semibold hover:text-blue-600 transition-colors"
                >
                  077 120 2777
                </a>
                <a
                  href="tel:+94771202778"
                  className="block text-foreground font-semibold hover:text-blue-600 transition-colors"
                >
                  077 120 2778
                </a>
                <a
                  href="tel:+94717722626"
                  className="block text-foreground font-semibold hover:text-blue-600 transition-colors"
                >
                  071 772 2626
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-red-600">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2">
                Office Address
              </h3>
              <p className="text-foreground font-semibold">
                335 A, Seelananda Mawatha, Kadangama, Kadugannawa
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-red-600">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2">
                Registration Number
              </h3>
              <p className="text-foreground font-semibold">
                මපස / ප්‍රාලේ / යනු / 6110
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Send Us a Message
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-red-600 focus:ring-0 outline-none transition-colors"
                    placeholder="Kavindu Bandara"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-red-600 focus:ring-0 outline-none transition-colors"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-red-600 focus:ring-0 outline-none transition-colors"
                    placeholder="077 123 4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-red-600 focus:ring-0 outline-none transition-colors"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-red-600 focus:ring-0 outline-none transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="quote">Request a Quote</option>
                  <option value="installation">Fire System Installation</option>
                  <option value="maintenance">Maintenance Service</option>
                  <option value="training">Training Programs</option>
                  <option value="inspection">Fire Safety Inspection</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-red-600 focus:ring-0 outline-none transition-colors resize-none"
                  placeholder="Tell us about your fire safety needs..."
                />
              </div>

              {submitStatus === "success" && (
                <div className="bg-green-50 border-2 border-green-600 rounded-lg p-4">
                  <p className="text-green-800 font-semibold">
                    ✓ Message sent successfully! We'll get back to you soon.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Find Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Visit us at our office or call for directions
            </p>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2!2d80.5288!3d7.2571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTUnMjUuNiJOIDgwwrAzMSc0My43IkU!5e0!3m2!1sen!2slk!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[500px]"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            335 A, Seelananda Mawatha, Kadangama, Kadugannawa, Sri Lanka
          </p>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Business Hours
            </h2>
            <p className="text-lg text-muted-foreground">
              We're here to help during business hours and 24/7 for emergencies
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-center py-4 border-b-2 border-gray-100">
                <span className="text-lg font-bold text-foreground mb-2 sm:mb-0">
                  Monday - Friday
                </span>
                <span className="text-lg text-muted-foreground">
                  8:00 AM - 5:00 PM
                </span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-center py-4 border-b-2 border-gray-100">
                <span className="text-lg font-bold text-foreground mb-2 sm:mb-0">
                  Saturday
                </span>
                <span className="text-lg text-muted-foreground">
                  9:00 AM - 1:00 PM
                </span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-center py-4 border-b-2 border-gray-100">
                <span className="text-lg font-bold text-foreground mb-2 sm:mb-0">
                  Sunday
                </span>
                <span className="text-lg text-red-600 font-bold">Closed</span>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-blue-50 rounded-xl border-2 border-red-200">
                <p className="text-center text-base text-foreground">
                  <strong className="text-red-600 text-lg">
                    🚨 Emergency Service:
                  </strong>
                  <br />
                  <span className="text-lg">
                    Available 24/7 for urgent fire safety issues
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
