"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Slide = {
  src: string;
  title: string;
  description: string;
};

export default function HeroSlider() {
  // Use local images from /public/images for reliable loading
  const slides: Slide[] = [
    {
      src: "/images/equipments.jpg",
      title: "Suppression Equipment",
      description:
        "Extinguishers, hydrants and FM-200/CO₂ systems supplied and serviced to industry standards.",
    },
    {
      src: "/images/home-training.jpg",
      title: "Fire Safety Training",
      description:
        "Practical drills, extinguisher usage and evacuation exercises to keep your team prepared.",
    },
    {
      src: "/images/hero-1.jpg",
      title: "Securing Buildings from Fire",
      description:
        "Advanced detection & suppression systems designed to protect your premises and occupants.",
    },
    {
      src: "/images/hero-2.jpg",
      title: "Inspection & Maintenance",
      description:
        "Regular audits, maintenance and refilling to ensure your systems stay operational and compliant.",
    },
  ];

  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    // Auto-advance every 4s
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden rounded-2xl">
      <div
        className="flex w-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((s, i) => (
          <div
            key={i}
            className="w-full flex-shrink-0 relative aspect-square group"
          >
            <Image
              src={s.src}
              alt={s.title}
              fill
              className="object-cover"
              priority={i === 0}
            />

            {/* Glass title overlay */}
            <div className="absolute top-4 left-4 bg-white/30 backdrop-blur-md text-white rounded-md px-3 py-2 border border-white/30 shadow-md">
              <h3 className="text-sm md:text-base font-semibold">{s.title}</h3>
            </div>

            {/* Hover reveal description - appears on hover (desktop) or shown on small screens */}
            <div className="absolute inset-0 flex items-end p-4">
              <div className="w-full bg-gradient-to-t from-black/70 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 rounded-md p-4">
                <p className="text-sm text-white">{s.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
