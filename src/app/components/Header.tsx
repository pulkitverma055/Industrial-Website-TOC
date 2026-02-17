import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Capabilities", href: "/capabilities" },
    { name: "Products", href: "/products" },
    { name: "Quality", href: "/quality" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
<header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
  <nav className="w-full">
    <div className="flex h-20 items-center justify-between">

      {/* LEFT: Logo (flush left) */}
      <div className="flex items-center pl-3 sm:pl-4 lg:pl-6">
        <Link to="/" className="flex items-center">
          <img
            src="logo_oc.png"
            alt="The Organiser Castech Pvt. Ltd."
            className="h-32 w-auto object-contain"
          />
        </Link>
      </div>

      {/* RIGHT: Navigation inside container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex justify-end">
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

      </div>
    </div>

    {/* Mobile Navigation */}
    {mobileMenuOpen && (
      <div className="md:hidden px-4 pb-3">
        <div className="space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive(item.href)
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    )}
  </nav>
</header>
  );
}
