"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, Heart, User } from "lucide-react";
import { services, companyLinks } from "./navcontent";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3",
        scrolled || isOpen
          ? "bg-background/80 backdrop-blur-lg border-b shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground shadow-lg group-hover:scale-110 transition-transform">
            <Heart className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl tracking-tight leading-none text-foreground">
              VSRMS
            </span>
            <span className="text-[10px] uppercase tracking-widest font-semibold text-muted-foreground">
              Care & Move Platform
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {/* Care Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-primary data-[state=open]:bg-transparent data-[state=open]:text-primary focus:bg-transparent">
                  Care
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[320px] p-4 flex flex-col gap-2">
                    {services.care.map((item) => (
                      <NavigationMenuLink asChild key={item.href}>
                        <Link
                          href={item.href}
                          className="flex gap-3 group/item border border-transparent rounded-lg p-2 hover:bg-muted transition-colors"
                        >
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                            <item.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold group-hover/item:text-primary transition-colors">
                              {item.name}
                            </div>
                            <div className="text-[11px] text-muted-foreground leading-tight">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Transport Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-primary data-[state=open]:bg-transparent data-[state=open]:text-primary focus:bg-transparent">
                  Transport
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[320px] p-4 flex flex-col gap-2">
                    {services.transport.map((item) => (
                      <NavigationMenuLink asChild key={item.href}>
                        <Link
                          href={item.href}
                          className="flex gap-3 group/item border border-transparent rounded-lg p-2 hover:bg-muted transition-colors"
                        >
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                            <item.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold group-hover/item:text-primary transition-colors">
                              {item.name}
                            </div>
                            <div className="text-[11px] text-muted-foreground leading-tight">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* About Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-primary data-[state=open]:bg-transparent data-[state=open]:text-primary focus:bg-transparent">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[320px] p-4 flex flex-col gap-2">
                    {companyLinks.about.map((item) => (
                      <NavigationMenuLink asChild key={item.href}>
                        <Link
                          href={item.href}
                          className="flex gap-3 group/item border border-transparent rounded-lg p-2 hover:bg-muted transition-colors"
                        >
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                            <item.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold group-hover/item:text-primary transition-colors">
                              {item.name}
                            </div>
                            <div className="text-[11px] text-muted-foreground leading-tight">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Contact Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-primary data-[state=open]:bg-transparent data-[state=open]:text-primary focus:bg-transparent">
                  Contact
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[320px] p-4 flex flex-col gap-2">
                    {companyLinks.contact.map((item) => (
                      <NavigationMenuLink asChild key={item.href}>
                        <Link
                          href={item.href}
                          className="flex gap-3 group/item border border-transparent rounded-lg p-2 hover:bg-muted transition-colors"
                        >
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                            <item.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold group-hover/item:text-primary transition-colors">
                              {item.name}
                            </div>
                            <div className="text-[11px] text-muted-foreground leading-tight">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Standalone Blog Link */}
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-transparent hover:text-primary focus:bg-transparent",
                      pathname === "/blog"
                        ? "text-primary"
                        : "text-muted-foreground",
                    )}
                  >
                    Blog
                    {pathname === "/blog" && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute bottom-2 left-4 right-4 h-0.5 bg-primary rounded-full transition-all"
                      />
                    )}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/auth/login"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            <User className="w-4 h-4" />
            Login
          </Link>
          <Link
            href="/care/enquiry"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            Get Care
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b overflow-hidden mt-2 rounded-2xl shadow-xl"
          >
            <div className="flex flex-col p-4 gap-4 max-h-[80vh] overflow-y-auto">
              <div>
                <h4 className="px-4 text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-2">
                  Care Services
                </h4>
                {services.care.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-muted rounded-xl transition-colors"
                  >
                    <link.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium">{link.name}</span>
                  </Link>
                ))}
              </div>

              <div>
                <h4 className="px-4 text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-2">
                  Transport Services
                </h4>
                {services.transport.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-muted rounded-xl transition-colors"
                  >
                    <link.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium">{link.name}</span>
                  </Link>
                ))}
              </div>

              <hr className="mx-4" />

              <div>
                <h4 className="px-4 text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-2">
                  About Us
                </h4>
                {companyLinks.about.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-muted rounded-xl transition-colors"
                  >
                    <link.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium">{link.name}</span>
                  </Link>
                ))}
              </div>

              <div>
                <h4 className="px-4 text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-2">
                  Contact
                </h4>
                {companyLinks.contact.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-muted rounded-xl transition-colors"
                  >
                    <link.icon className="w-5 h-5 text-primary" />
                    <span className="font-medium">{link.name}</span>
                  </Link>
                ))}
              </div>

              <hr className="mx-4" />

              <div className="flex flex-col">
                <Link
                  href="/blog"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 hover:bg-muted rounded-xl font-medium"
                >
                  Blog
                </Link>
              </div>

              <Link
                href="/care/enquiry"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20"
              >
                Get Care Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
