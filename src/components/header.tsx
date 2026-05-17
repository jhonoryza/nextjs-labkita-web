"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ExternalLink, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const apps = [
  { name: "Kasirku", url: "https://kasirku.labkita.my.id/" },
  { name: "Catatan Ibu", url: "https://catatan-ibu.labkita.my.id/" },
  { name: "IklanRumah", url: "https://iklanrumah.labkita.my.id/" },
  { name: "Tools", url: "https://tools.labkita.my.id/" },
];

const moreItems = [
  { name: "Engineers", href: "/engineers" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "https://blog.labkita.my.id", external: true },
  { name: "Contact Us", href: "/contacts", highlight: true },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAppsOpen, setIsAppsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const pathname = usePathname();

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
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">L</span>
          </div>
          <span className="font-bold text-lg text-foreground">
            Labkita
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/products"
            className={`font-medium transition-colors ${
              pathname === "/products"
                ? "text-primary"
                : "text-foreground/70 hover:text-primary"
            }`}
          >
            Products
          </Link>
          <DropdownMenu open={isAppsOpen} onOpenChange={setIsAppsOpen}>
            <DropdownMenuTrigger className="font-medium text-foreground/70 hover:text-primary transition-colors flex items-center gap-1 focus:outline-none">
              Apps
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isAppsOpen ? "rotate-180" : ""}`} />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="border bg-background shadow-md rounded-lg p-1 min-w-[180px]"
            >
              {apps.map((app) => (
                <DropdownMenuItem key={app.name} asChild>
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-accent rounded cursor-pointer"
                  >
                    {app.name}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu open={isMoreOpen} onOpenChange={setIsMoreOpen}>
            <DropdownMenuTrigger className="font-medium text-foreground/70 hover:text-primary transition-colors flex items-center gap-1 focus:outline-none">
              More
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isMoreOpen ? "rotate-180" : ""}`} />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="border bg-background shadow-md rounded-lg p-1 min-w-[180px]"
            >
              {moreItems.map((item) =>
                item.highlight ? (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      href={item.href}
                      className="flex items-center px-3 py-2 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ) : item.external ? (
                  <DropdownMenuItem key={item.name} asChild>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-3 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-accent rounded cursor-pointer"
                    >
                      {item.name}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      href={item.href}
                      className="flex items-center px-3 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-accent rounded cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                )
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <button
          className="md:hidden p-2 rounded-lg border text-foreground/70 hover:cursor-pointer hover:bg-accent transition-colors"
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
        <div className="md:hidden border-t bg-background">
          <nav className="flex flex-col p-4 gap-1">
            <Link
              href="/products"
              onClick={handleNavClick}
              className="px-3 py-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-accent transition-colors font-medium"
            >
              Products
            </Link>
            <div className="rounded-lg border overflow-hidden">
              <div
                onClick={() => setIsAppsOpen(!isAppsOpen)}
                className="px-3 py-2 text-foreground/70 flex items-center justify-between hover:bg-accent transition-colors cursor-pointer font-medium"
              >
                Apps
                <ChevronDown className={`h-4 w-4 transition-transform ${isAppsOpen ? "rotate-180" : ""}`} />
              </div>
              {isAppsOpen && (
                <div className="border-t">
                  {apps.map((app) => (
                    <a
                      key={app.name}
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleNavClick}
                      className="flex items-center justify-between px-5 py-2 text-sm text-foreground/60 hover:text-foreground hover:bg-accent transition-colors"
                    >
                      {app.name}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div className="rounded-lg border overflow-hidden">
              <div
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className="px-3 py-2 text-foreground/70 flex items-center justify-between hover:bg-accent transition-colors cursor-pointer font-medium"
              >
                More
                <ChevronDown className={`h-4 w-4 transition-transform ${isMoreOpen ? "rotate-180" : ""}`} />
              </div>
              {isMoreOpen && (
                <div className="border-t">
                  {moreItems.map((item) =>
                    item.highlight ? (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={handleNavClick}
                        className="flex items-center px-5 py-2 text-sm font-medium text-primary-foreground bg-primary"
                      >
                        {item.name}
                      </Link>
                    ) : item.external ? (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleNavClick}
                        className="flex items-center justify-between px-5 py-2 text-sm text-foreground/60 hover:text-foreground hover:bg-accent transition-colors"
                      >
                        {item.name}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={handleNavClick}
                        className="flex items-center px-5 py-2 text-sm text-foreground/60 hover:text-foreground hover:bg-accent transition-colors"
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}