import { Link } from "react-router";
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-bold">OC</span>
              </div>
              <div>
                <div className="text-white font-bold">
                  The Organiser Castech Pvt. Ltd.
                </div>
                <div className="text-xs text-slate-400">
                  Established 2026
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-4 max-w-md">
              A leading manufacturer of Grey Iron and Ductile Iron castings,
              serving automotive, agricultural, and engineering industries with
              precision and excellence.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="p-2 bg-slate-800 hover:bg-blue-600 rounded-lg transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 hover:bg-blue-600 rounded-lg transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 hover:bg-blue-600 rounded-lg transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/capabilities" className="hover:text-blue-400 transition-colors">
                  Capabilities
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-blue-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/quality" className="hover:text-blue-400 transition-colors">
                  Quality
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Plot no. 2, Jashoda Industrial Park, Bhayasar, Rajkot - 360020, Gujarat, India</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span>+91 9555309911</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span>theorganisercastech@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-center">
          <p className="text-slate-400">
            © {currentYear} The Organiser Castech Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
