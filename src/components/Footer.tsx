"use client";

import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Music2 } from "lucide-react";
import Link from "next/link";
import { XLogo } from "@/components/icons/XLogo";

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNav = (href: string) => {
    if (onNavigate) onNavigate(href);
  };

  return (
    <footer className="bg-[#0D402D] text-white">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 inline-flex items-center gap-3" aria-label="Tabor Realtors home">
              <Image
                src="/tabor-realtors-logo.jpg"
                alt="Tabor Realtors"
                width={64}
                height={64}
                className="h-16 w-16 object-contain"
              />
              <span className="text-xl font-semibold text-white">Tabor Realtors</span>
            </Link>
            <p className="mb-4 text-white/80">
              Kenya&apos;s premium real estate destination. We connect you with exceptional properties across the nation.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61578951969809&rdid=Ncb82fbVg2pO9Ndn&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19mWADvSJL%2F#" },
                { icon: Instagram, href: "https://www.instagram.com/niahavens" },
                { icon: XLogo, href: "https://x.com/TaborRealtors" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/tabor-realtors/" },
                { icon: Music2, href: "https://www.tiktok.com/@niahavens" },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Buy Property", href: "/buy" },
                { label: "Rent Property", href: "/rent" },
                { label: "About Us", href: "/about" },
                { label: "Our Team", href: "/about/team" },
                { label: "Insights", href: "/insights" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => handleNav(item.href)}
                    className="text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0" />
                <span className="text-white/80">ABC Place, 4th Floor, Westlands, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+254708085761" className="text-white/80 transition-colors hover:text-white">
                  +254 708 085 761
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a
                  href="mailto:info@taborrealtors.com"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  info@taborrealtors.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Newsletter</h3>
            <p className="mb-4 text-white/80">Subscribe to get the latest property listings and insights.</p>
            <form className="space-y-2" action="/api/newsletter" method="post">
              <input
                name="email"
                type="email"
                placeholder="Your email"
                className="w-full rounded border border-white/20 bg-white/10 px-4 py-2 text-white placeholder:text-white/60 focus:border-white/40 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full rounded bg-white px-4 py-2 text-primary transition-colors hover:bg-white/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-white/20 pt-8 text-center text-white/60">
          <p>© {new Date().getFullYear()} Tabor Realtors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
