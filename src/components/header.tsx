"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `transition ${
      pathname === href
        ? "text-green-500 hover:text-green-600 font-semibold"
        : "text-gray-700 hover:text-green-600"
    }`;
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* logo */}
        <Link href={`/`} className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
            <span className="text-white font-bold text-xl">L</span>
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Labkita
          </span>
        </Link>
        {/* end logo */}

        <nav className="hidden md:flex space-x-8">
          <Link
            href={"/products"}
            className={linkClass("/products") + "transition"}
          >
            Products
          </Link>
          <a
            href="https://blog.labkita.my.id"
            className="text-gray-700 hover:text-green-600 transition"
            target="_blank"
          >
            Blog
          </a>
          {/* <Link
            href={"/projects"}
            className={linkClass("/products") + "transition"}
          >
            Projects
          </Link> */}
          <Link
            href={"/engineers"}
            className={linkClass("/engineers") + "transition"}
          >
            Engineers
          </Link>
          <Link
            href={"about"}
            className={linkClass("/about") + "transition"}
          >
            About
          </Link>
        </nav>

        {/* contact us */}
        <Link
          href={"/contacts"}
          className="hidden md:flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium hover:shadow-lg transition"
        >
          Contact Us
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
        {/* end contact us */}

        {/* breadcrumbs */}
        <button
          className="md:hidden text-gray-700 hover:cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
        {/* end breadcrumbs */}
      </div>
      {/* mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col p-4">
            <Link
              href={"/products"}
              onClick={handleNavClick}
              className={linkClass("/products") + "py-2 transition"}
            >
              Products
            </Link>
            {/* <Link
              href={"/projects"}
              className={linkClass("/products") + "py-2 transition"}
            >
              Projects
            </Link> */}
            <a
              href="https://blog.labkita.my.id"
              className="py-2 text-gray-700 hover:text-green-600 transition"
              target="_blank"
            >
              Blog
            </a>
            <Link
              href={"/engineers"}
              onClick={handleNavClick}
              className={linkClass("/engineers") + "py-2 transition"}
            >
              Engineers
            </Link>
            <Link
              href={"about"}
              onClick={handleNavClick}
              className={linkClass("/about") + "py-2 transition"}
            >
              About
            </Link>
            <Link
              href={"/contacts"}
              onClick={handleNavClick}
              className={linkClass("/contacts") + "py-2 transition"}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
      {/* end mobile menu */}
    </header>
  );
}
