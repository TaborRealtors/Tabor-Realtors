"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X, Facebook, Instagram, Linkedin, Music2 } from "lucide-react";
import { XLogo } from "@/components/icons/XLogo";

interface HeaderProps {
  onSearchClick: () => void;
}

export function Header({ onSearchClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isActivePath = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  const navLink = (href: string, label: string, extra?: React.ReactNode) => (
    <div
      className="relative"
      onMouseEnter={() => setActiveDropdown(label.toLowerCase())}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <Link
        href={href}
        aria-current={isActivePath(href) ? "page" : undefined}
        className={`py-2 transition-colors ${isActivePath(href) ? "text-primary" : "text-foreground hover:text-primary"}`}
      >
        {label}
      </Link>
      {extra}
    </div>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3" aria-label="Tabor Realtors home">
            <Image
              src="/tabor-realtors-logo.jpg"
              alt="Tabor Realtors"
              width={64}
              height={64}
              className="h-16 w-16 object-contain"
              priority
            />
            <span className="text-xl font-semibold text-[#0D402D]">Tabor Realtors</span>
          </Link>

          <nav className="hidden items-center space-x-8 lg:flex">
            {navLink("/buy", "Buy", (
              activeDropdown === "buy" ? (
                <div className="absolute left-0 top-full z-50 mt-0 w-48 rounded-lg border border-border bg-white py-2 shadow-lg">
                  <Link href="/buy/developments" className="block px-4 py-2 text-sm hover:bg-secondary">
                    Developments
                  </Link>
                  <Link href="/buy" className="block px-4 py-2 text-sm hover:bg-secondary">
                    All Properties
                  </Link>
                </div>
              ) : null
            ))}
            {navLink("/rent", "Rent", (
              activeDropdown === "rent" ? (
                <div className="absolute left-0 top-full z-50 mt-0 w-48 rounded-lg border border-border bg-white py-2 shadow-lg">
                  <Link href="/rent/residential" className="block px-4 py-2 text-sm hover:bg-secondary">
                    Residential
                  </Link>
                  <Link href="/rent/commercial" className="block px-4 py-2 text-sm hover:bg-secondary">
                    Commercial
                  </Link>
                </div>
              ) : null
            ))}
            <Link
              href="/about"
              aria-current={isActivePath("/about") ? "page" : undefined}
              className={`transition-colors ${isActivePath("/about") ? "text-primary" : "text-foreground hover:text-primary"}`}
            >
              About Us
            </Link>
            <Link
              href="/about/team"
              aria-current={isActivePath("/about/team") ? "page" : undefined}
              className={`transition-colors ${isActivePath("/about/team") ? "text-primary" : "text-foreground hover:text-primary"}`}
            >
              Our Team
            </Link>
            <Link
              href="/insights"
              aria-current={isActivePath("/insights") ? "page" : undefined}
              className={`transition-colors ${isActivePath("/insights") ? "text-primary" : "text-foreground hover:text-primary"}`}
            >
              Insights
            </Link>
            <Link
              href="/contact"
              aria-current={isActivePath("/contact") ? "page" : undefined}
              className={`transition-colors ${isActivePath("/contact") ? "text-primary" : "text-foreground hover:text-primary"}`}
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onSearchClick();
              }}
              className="p-2 text-foreground transition-colors hover:text-primary"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <div className="hidden items-center space-x-3 lg:flex">
              <a href="https://www.facebook.com/profile.php?id=61578951969809&rdid=Ncb82fbVg2pO9Ndn&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19mWADvSJL%2F#" target="_blank" rel="noreferrer" className="text-foreground transition-colors hover:text-primary" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/niahavens" target="_blank" rel="noreferrer" className="text-foreground transition-colors hover:text-primary" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://x.com/TaborRealtors" target="_blank" rel="noreferrer" className="text-foreground transition-colors hover:text-primary" aria-label="X">
                <XLogo className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/tabor-realtors/" target="_blank" rel="noreferrer" className="text-foreground transition-colors hover:text-primary" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@niahavens" target="_blank" rel="noreferrer" className="text-foreground transition-colors hover:text-primary" aria-label="TikTok">
                <Music2 className="h-5 w-5" />
              </a>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen ? (
          <div className="border-t border-border py-4 lg:hidden">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/buy"
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isActivePath("/buy") ? "page" : undefined}
                className="text-left text-foreground hover:text-primary"
              >
                Buy
              </Link>
              <div className="pl-4 space-y-2">
                <Link
                  href="/buy/developments"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={isActivePath("/buy/developments") ? "page" : undefined}
                  className="block text-sm text-muted-foreground hover:text-primary"
                >
                  Developments
                </Link>
                <Link
                  href="/buy"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={isActivePath("/buy") ? "page" : undefined}
                  className="block text-sm text-muted-foreground hover:text-primary"
                >
                  All Properties
                </Link>
              </div>
              <Link
                href="/rent"
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isActivePath("/rent") ? "page" : undefined}
                className="text-left text-foreground hover:text-primary"
              >
                Rent
              </Link>
              <div className="pl-4 space-y-2">
                <Link
                  href="/rent/residential"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={isActivePath("/rent/residential") ? "page" : undefined}
                  className="block text-sm text-muted-foreground hover:text-primary"
                >
                  Residential
                </Link>
                <Link
                  href="/rent/commercial"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={isActivePath("/rent/commercial") ? "page" : undefined}
                  className="block text-sm text-muted-foreground hover:text-primary"
                >
                  Commercial
                </Link>
              </div>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isActivePath("/about") ? "page" : undefined}
                className="text-left text-foreground hover:text-primary"
              >
                About Us
              </Link>
              <Link
                href="/about/team"
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isActivePath("/about/team") ? "page" : undefined}
                className="text-left text-foreground hover:text-primary"
              >
                Our Team
              </Link>
              <Link
                href="/insights"
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isActivePath("/insights") ? "page" : undefined}
                className="text-left text-foreground hover:text-primary"
              >
                Insights
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isActivePath("/contact") ? "page" : undefined}
                className="text-left text-foreground hover:text-primary"
              >
                Contact
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
