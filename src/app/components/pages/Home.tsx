import { Link } from "react-router";
import {
  Factory,
  Cog,
  Shield,
  Building2,
  Car,
  Tractor,
  Wrench,
  Award,
  Users,
  TrendingUp,
  ArrowRight,
  Check,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Home() {
  const capabilities = [
    {
      icon: Factory,
      title: "Casting",
      description: "Advanced Grey & Ductile Iron casting facilities",
    },
    {
      icon: Cog,
      title: "Machining",
      description: "Precision CNC machining & finishing services",
    },
    {
      icon: Shield,
      title: "Quality",
      description: "Rigorous testing & quality control systems",
    },
    {
      icon: Building2,
      title: "Infrastructure",
      description: "State-of-the-art manufacturing facility",
    },
  ];

  const industries = [
    { icon: Car, name: "Automotive", desc: "OEM & Tier-1 suppliers" },
    { icon: Tractor, name: "Agricultural", desc: "Farm equipment parts" },
    { icon: Wrench, name: "Engineering", desc: "Industrial machinery" },
  ];

  const whyChooseUs = [
    { icon: Award, title: "30+ Years Experience", desc: "Since 2026" },
    { icon: Users, title: "Expert Team", desc: "Skilled professionals" },
    { icon: TrendingUp, title: "Consistent Quality", desc: "ISO certified processes" },
    { icon: Shield, title: "Reliable Supply", desc: "On-time delivery" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1769491188458-2728c8d44628?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2x0ZW4lMjBtZXRhbCUyMGZvdW5kcnklMjBwb3VyaW5nfGVufDF8fHx8MTc3MTMzNDgwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Molten metal foundry"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full">
            <span className="text-blue-400 text-sm font-medium uppercase tracking-wider">
              Established 2026
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Precision Cast.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Organised for Excellence.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Leading manufacturer of Grey Iron and Ductile Iron castings for
            automotive, agricultural, and engineering industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors group"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/capabilities"
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-colors border border-slate-700"
            >
              Our Capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-blue-600 font-semibold mb-2 uppercase tracking-wider text-sm">
                About The Organiser Castech
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Your Trusted Partner in Iron Casting
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                The Organiser Castech Pvt. Ltd. is a premier iron casting
                foundry specializing in Grey Iron and Ductile Iron castings. We
                serve leading OEMs in the automotive, agricultural, and
                engineering sectors with precision-engineered components.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                  <span className="text-slate-700">
                    Advanced molding and melting facilities
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                  <span className="text-slate-700">
                    In-house CNC machining capabilities
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                  <span className="text-slate-700">
                    Comprehensive quality assurance systems
                  </span>
                </li>
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1761519609252-3b868e540398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMGludGVyaW9yJTIwbWFjaGluZXJ5fGVufDF8fHx8MTc3MTMzNDgwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Factory interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl opacity-20 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-blue-600 font-semibold mb-2 uppercase tracking-wider text-sm">
              Our Capabilities
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Comprehensive Manufacturing Solutions
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group p-6 bg-slate-50 hover:bg-slate-900 rounded-xl transition-all duration-300 border border-slate-200 hover:border-blue-600"
                >
                  <div className="h-14 w-14 bg-blue-600 group-hover:bg-blue-500 rounded-lg flex items-center justify-center mb-4 transition-colors">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 group-hover:text-white mb-2 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 group-hover:text-slate-300 transition-colors">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-blue-400 font-semibold mb-2 uppercase tracking-wider text-sm">
              Industries We Serve
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Trusted by Leading OEMs
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 hover:border-blue-600 transition-all group"
                >
                  <Icon className="h-12 w-12 text-blue-400 mb-4" />
                  <h3 className="text-2xl font-semibold mb-2">{industry.name}</h3>
                  <p className="text-slate-400">{industry.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-blue-600 font-semibold mb-2 uppercase tracking-wider text-sm">
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Excellence in Every Cast
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We combine technical expertise with state-of-the-art facilities to
              deliver superior iron castings that meet the most demanding
              specifications.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1740957112428-1210d53e93c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGluZHVzdHJpYWwlMjBpbmZyYXN0cnVjdHVyZXxlbnwxfHx8fDE3NzEzMzQ4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Industrial infrastructure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/90" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Get in touch with our team to discuss your casting requirements and
            receive a customized quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 font-semibold rounded-lg transition-colors"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
