"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/buy", label: "Buy" },
  { href: "/rent", label: "Rent" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About Us" },
  { href: "/about/team", label: "Our Team" },
  { href: "/contact", label: "Contact Us" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger aria-label="Open menu" className="lg:hidden">
        <Menu className="h-6 w-6 text-text-dark" />
      </SheetTrigger>
      <SheetContent side="left" className="w-72">
        <SheetHeader>
          <SheetTitle>
            <Link href="/" className="flex items-center" onClick={() => setOpen(false)} aria-label="Tabor Realtors home">
              <Image
                src="/tabor-realtors-logo.jpg"
                alt="Tabor Realtors"
                width={64}
                height={64}
                className="h-16 w-16 object-contain"
              />
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="mt-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-medium text-text-dark hover:text-brand"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
