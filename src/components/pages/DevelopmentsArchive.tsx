"use client";

import { useState } from "react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { PropertyCard } from "@/components/PropertyCard";

interface DevelopmentsArchiveProps {
  onNavigate: (page: string, id?: string) => void;
  onEnquire: (name: string) => void;
}

export function DevelopmentsArchive({ onNavigate, onEnquire }: DevelopmentsArchiveProps) {
  const [filters, setFilters] = useState({
    location: "",
    bedrooms: "",
    priceRange: "",
    status: "",
  });

  const developments = [
    {
      id: "citi-rise",
      images: [
        "/images/BUY/developments/CITI%20RISE/CITI%20RISE/3%20Bedrom%20%2B%20DSQ/A1.jpg",
        "/images/BUY/developments/CITI%20RISE/CITI%20RISE/3%20Bedrom%20%2B%20DSQ/A10.jpg",
        "/images/BUY/developments/CITI%20RISE/CITI%20RISE/3%20Bedrom%20%2B%20DSQ/A13.jpg",
        "/images/BUY/developments/CITI%20RISE/CITI%20RISE/3%20Bedrom%20%2B%20DSQ/A2.jpg",
        "/images/BUY/developments/CITI%20RISE/CITI%20RISE/3%20Bedrom%20%2B%20DSQ/A3.jpg",
        "/images/BUY/developments/CITI%20RISE/CITI%20RISE/3%20Bedrom%20%2B%20DSQ/A4.jpg",
        "/images/BUY/developments/CITI%20RISE/CITI%20RISE/3%20Bedrom%20%2B%20DSQ/A5.jpg",
        "/images/BUY/developments/CITI%20RISE/CITI%20RISE/3%20Bedrom%20%2B%20DSQ/A6.jpg",
        "/images/BUY/developments/CITI%20RISE/CITI%20RISE/3%20Bedrom%20%2B%20DSQ/A7.jpg",
        "/images/BUY/developments/CITI%20RISE/CITI%20RISE/3%20Bedrom%20%2B%20DSQ/A8.jpg",
        "/images/BUY/developments/CITI%20RISE/CITI%20RISE/3%20Bedrom%20%2B%20DSQ/A9.jpg",
        "/images/BUY/developments/CITI%20RISE/CITI%20RISE/3%20Bedroom/bal.jpg",
        "/images/BUY/developments/CITI%20RISE/CITI%20RISE/3%20Bedroom/WST1.jpg",
        "/images/BUY/developments/CITI%20RISE/CITI%20RISE/3%20Bedroom/WST2.jpg",
        "/images/BUY/developments/CITI%20RISE/CITI%20RISE/3%20Bedroom/WST3.jpg",
        "/images/BUY/developments/CITI%20RISE/CITI%20RISE/3%20Bedroom/WST4.jpg",
        "/images/BUY/developments/CITI%20RISE/CITI%20RISE/3%20Bedroom/WST5.jpg",
        "/images/BUY/developments/CITI%20RISE/CITI%20RISE/3%20Bedroom/WST6.jpg",
        "/images/BUY/developments/CITI%20RISE/CITI%20RISE/3%20Bedroom/WST62.jpg",
        "/images/BUY/developments/CITI%20RISE/CITI%20RISE/3%20Bedroom/WST7.jpg",
        "/images/BUY/developments/CITI%20RISE/CITI%20RISE/3%20Bedroom/WST8.jpg",
        "/images/BUY/developments/CITI%20RISE/CITI%20RISE/3%20Bedroom/WST9.jpg",
      ],
      status: "Available",
      name: "CITI RISE",
      location: "Westlands, Mogotio Road",
      bedrooms: 3,
      bathrooms: 3,
      size: "2-3 BR (86.77-142.39 sqm)",
      price: "From KSh 11.7M",
      description:
        "Modern Westlands apartments with spacious living rooms, balconies, all en-suite bedrooms, study/office, rooftop pool & gym, high-speed lifts, and strong security.",
    },
    {
      id: "jasper-westlands-muthithi-road",
      images: [
        "/images/BUY/developments/Jasper%20Westlands,%20Muthithi%20Road/IMG-20250901-WA0014.jpg",
        "/images/BUY/developments/Jasper%20Westlands,%20Muthithi%20Road/IMG-20250901-WA0015.jpg",
        "/images/BUY/developments/Jasper%20Westlands,%20Muthithi%20Road/IMG-20250901-WA0016.jpg",
        "/images/BUY/developments/Jasper%20Westlands,%20Muthithi%20Road/IMG-20250901-WA0017.jpg",
        "/images/BUY/developments/Jasper%20Westlands,%20Muthithi%20Road/IMG-20250901-WA0018.jpg",
        "/images/BUY/developments/Jasper%20Westlands,%20Muthithi%20Road/IMG-20250901-WA0019.jpg",
        "/images/BUY/developments/Jasper%20Westlands,%20Muthithi%20Road/IMG-20250901-WA0020.jpg",
        "/images/BUY/developments/Jasper%20Westlands,%20Muthithi%20Road/IMG-20250901-WA0021.jpg",
        "/images/BUY/developments/Jasper%20Westlands,%20Muthithi%20Road/IMG-20250901-WA0022.jpg",
        "/images/BUY/developments/Jasper%20Westlands,%20Muthithi%20Road/IMG-20250901-WA0023.jpg",
        "/images/BUY/developments/Jasper%20Westlands,%20Muthithi%20Road/IMG-20250901-WA0024.jpg",
        "/images/BUY/developments/Jasper%20Westlands,%20Muthithi%20Road/IMG-20250901-WA0025.jpg",
        "/images/BUY/developments/Jasper%20Westlands,%20Muthithi%20Road/IMG-20250901-WA0026.jpg",
        "/images/BUY/developments/Jasper%20Westlands,%20Muthithi%20Road/IMG-20250901-WA0027.jpg",
      ],
      status: "Available",
      name: "JASPER APARTMENTS",
      location: "Westlands, Nairobi",
      bedrooms: 3,
      bathrooms: 3,
      size: "1 / 2 / 3 Bedroom Apartments",
      price: "From KES 8.5M",
      description:
        "Apartment development in Westlands with 1BR (KES 8.5M-9.5M), 2BR (KES 11.5M-16.5M), and 3BR (from KES 22.5M) options.",
    },
    {
      id: "juja-rafi",
      images: [
        "/images/BUY/developments/Juja%20RAFI/DStudio%201.jpg",
        "/images/BUY/developments/Juja%20RAFI/DStudio%202.jpg",
        "/images/BUY/developments/Juja%20RAFI/DStudio%203.jpg",
        "/images/BUY/developments/Juja%20RAFI/DStudio%204.jpg",
        "/images/BUY/developments/Juja%20RAFI/IMG-20250805-WA0002.jpg",
        "/images/BUY/developments/Juja%20RAFI/IMG-20250805-WA0003.jpg",
        "/images/BUY/developments/Juja%20RAFI/IMG-20250805-WA0004.jpg",
        "/images/BUY/developments/Juja%20RAFI/IMG-20250805-WA0005.jpg",
        "/images/BUY/developments/Juja%20RAFI/IMG-20250805-WA0006.jpg",
        "/images/BUY/developments/Juja%20RAFI/Rafi%201%20bedroom%201.jpg",
        "/images/BUY/developments/Juja%20RAFI/Rafi%201%20bedroom%202.jpg",
        "/images/BUY/developments/Juja%20RAFI/Rafi%201%20bedroom%203.jpg",
        "/images/BUY/developments/Juja%20RAFI/Rafi%201%20bedroom%204.jpg",
        "/images/BUY/developments/Juja%20RAFI/Rafi%201%20bedroom%20M.jpg",
        "/images/BUY/developments/Juja%20RAFI/Studio%201.jpg",
        "/images/BUY/developments/Juja%20RAFI/Studio%202.jpg",
        "/images/BUY/developments/Juja%20RAFI/Studio%203.jpg",
        "/images/BUY/developments/Juja%20RAFI/Studio%204.jpg",
      ],
      status: "Available",
      name: "JUJA RAFI APARTMENTS",
      location: "Juja, Kiambu",
      bedrooms: 1,
      bathrooms: 1,
      size: "Single & Double Bed Studios",
      price: "From KES 2.4M",
      description:
        "Studio apartments in Juja with Single Bed Studios from KES 2.4M and Double Bed Studios from KES 4.2M.",
    },
    {
      id: "the-marquis",
      images: [
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.09.jpeg",
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.10%20(1).jpeg",
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.10.jpeg",
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.11%20(1).jpeg",
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.11.jpeg",
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.12%20(1).jpeg",
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.12%20(2).jpeg",
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.12%20(3).jpeg",
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.12.jpeg",
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.13%20(1).jpeg",
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.13.jpeg",
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.14.jpeg",
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.15%20(1).jpeg",
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.15.jpeg",
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.16%20(1).jpeg",
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.16%20(2).jpeg",
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.16%20(3).jpeg",
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.16.jpeg",
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.17%20(1).jpeg",
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.17.jpeg",
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.18%20(1).jpeg",
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.18.jpeg",
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.19%20(1).jpeg",
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.19%20(2).jpeg",
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.19.jpeg",
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.20.jpeg",
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.21%20(1).jpeg",
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.21%20(2).jpeg",
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.21%20(3).jpeg",
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.21%20(4).jpeg",
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.21.jpeg",
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.22%20(1).jpeg",
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.22%20(2).jpeg",
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.22%20(3).jpeg",
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.22%20(4).jpeg",
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.22.jpeg",
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.23%20(1).jpeg",
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.23%20(2).jpeg",
        "/images/BUY/developments/The%20Marquis/WhatsApp%20Image%202026-01-18%20at%2019.12.23.jpeg",
      ],
      status: "Available",
      name: "The Marquis",
      location: "Kileleshwa, off Nyeri Road",
      bedrooms: 5,
      bathrooms: 5,
      size: "2-5 BR Apartments & Penthouses",
      price: "From KSh 23.2M",
      description:
        "Luxury apartments and penthouses with premium lifestyle amenities including infinity pool, gym, sauna, amphitheatre, jogging track, daycare, and a viewing deck over Lavington.",
    }
  ];

  const developmentPriority = ["citi-rise", "jasper-westlands-muthithi-road", "juja-rafi", "the-marquis"];
  developments.sort((a, b) => {
    const ai = developmentPriority.indexOf(a.id);
    const bi = developmentPriority.indexOf(b.id);
    if (ai === -1 && bi === -1) return 0;
    if (ai === -1) return 1;
    if (bi === -1) return -1;
    return ai - bi;
  });
  const visibleDevelopments = developments.filter((dev) => developmentPriority.includes(dev.id));

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-[300px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1764337362016-ae7923282ff6?auto=format&fit=max&w=1600&q=80"
          alt="Developments"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto max-w-[1280px] px-4 text-center text-white sm:px-6 lg:px-8">
            <nav className="mb-4 text-sm text-white/80">
              <button onClick={() => onNavigate("home")} className="hover:text-white">Home</button>
              <span className="mx-2">/</span>
              <button onClick={() => onNavigate("buy")} className="hover:text-white">Buy</button>
              <span className="mx-2">/</span>
              <span>Developments</span>
            </nav>
            <h1 className="text-4xl md:text-5xl" style={{ color: "#FFFFFF", fontWeight: 600 }}>
              Property Developments
            </h1>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-border">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <select
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              className="rounded border border-border bg-input-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">All Locations</option>
              <option value="karen">Karen</option>
              <option value="westlands">Westlands</option>
              <option value="runda">Runda</option>
              <option value="kilimani">Kilimani</option>
              <option value="lavington">Lavington</option>
            </select>
            <select
              value={filters.bedrooms}
              onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
              className="rounded border border-border bg-input-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">All Bedrooms</option>
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedrooms</option>
              <option value="3">3 Bedrooms</option>
              <option value="4">4+ Bedrooms</option>
            </select>
            <select
              value={filters.priceRange}
              onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
              className="rounded border border-border bg-input-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">All Prices</option>
              <option value="0-20m">Up to KSh 20M</option>
              <option value="20m-35m">KSh 20M - 35M</option>
              <option value="35m-50m">KSh 35M - 50M</option>
              <option value="50m+">KSh 50M+</option>
            </select>
            <select
              value={filters.status}
              onChange={(e) => setFilters({ ...filters, status: e.target.value })}
              className="rounded border border-border bg-input-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">All Status</option>
              <option value="available">Available</option>
              <option value="launching">Just Launched</option>
              <option value="selling">Selling Fast</option>
              <option value="coming">Coming Soon</option>
            </select>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-muted-foreground">Showing {visibleDevelopments.length} developments</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visibleDevelopments.map((dev) => (
              <PropertyCard
                key={dev.id}
                type="development"
                images={dev.images}
                status={dev.status}
                name={dev.name}
                location={dev.location}
                bedrooms={dev.bedrooms}
                bathrooms={dev.bathrooms}
                size={dev.size}
                price={dev.price}
                onEnquire={() => onEnquire(dev.name)}
                onViewDetails={() => onNavigate("development", dev.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
