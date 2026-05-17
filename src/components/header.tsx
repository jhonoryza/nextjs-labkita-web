"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `font-bold transition-colors ${
      pathname === href
        ? "text-primary underline decoration-2 underline-offset-4"
        : "text-foreground hover:text-primary"
    }`;

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b-2 border-foreground transition-all duration-300 ${
        isScrolled ? "bg-background shadow-neo-sm" : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary border-2 border-foreground shadow-neo-sm flex items-center justify-center">
            <span className="text-primary-foreground font-black text-xl">L</span>
          </div>
          <span className="font-black text-xl text-foreground">
            Labkita
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/products" className={linkClass("/products")}>
            Products
          </Link>
          <a
            href="https://blog.labkita.my.id"
            className="font-bold text-foreground hover:text-primary transition-colors"
            target="_blank"
          >
            Blog
          </a>
          <Link href="/engineers" className={linkClass("/engineers")}>
            Engineers
          </Link>
          <Link href="/about" className={linkClass("/about")}>
            About
          </Link>
          <Link
            href="/contacts"
            className="flex items-center gap-2 px-4 py-2 bg-secondary border-2 border-foreground shadow-neo-sm text-secondary-foreground font-bold hover:shadow-neo transition-shadow"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>

        <button
          className="md:hidden p-2 border-2 border-foreground shadow-neo-sm bg-background hover:cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t-2 border-foreground bg-background">
          <nav className="flex flex-col p-4 gap-2">
            <Link
              href="/products"
              onClick={handleNavClick}
              className="px-3 py-2 border-2 border-foreground font-bold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Products
            </Link>
            <a
              href="https://blog.labkita.my.id"
              className="px-3 py-2 border-2 border-foreground font-bold hover:bg-primary hover:text-primary-foreground transition-colors"
              target="_blank"
            >
              Blog
            </a>
            <Link
              href="/engineers"
              onClick={handleNavClick}
              className="px-3 py-2 border-2 border-foreground font-bold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Engineers
            </Link>
            <Link
              href="/about"
              onClick={handleNavClick}
              className="px-3 py-2 border-2 border-foreground font-bold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/contacts"
              onClick={handleNavClick}
              className="px-3 py-2 bg-secondary border-2 border-foreground font-bold text-secondary-foreground text-center"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}