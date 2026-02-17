import { Car, Tractor, Wrench, Box, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Products() {
  const greyIronSpecs = [
    "Excellent machinability",
    "Good wear resistance",
    "High damping capacity",
    "Cost-effective solution",
    "Grades: FG150, FG200, FG250, FG300",
  ];

  const ductileIronSpecs = [
    "High tensile strength",
    "Good ductility and toughness",
    "Excellent fatigue resistance",
    "Superior impact strength",
    "Grades: FCD400, FCD450, FCD500, FCD600",
  ];

  const applications = [
    {
      icon: Car,
      industry: "Automotive",
      products: [
        "Brake drums & discs",
        "Engine blocks & cylinder heads",
        "Transmission housings",
        "Suspension components",
        "Exhaust manifolds",
        "Steering knuckles",
      ],
    },
    {
      icon: Tractor,
      industry: "Agricultural",
      products: [
        "Tractor body parts",
        "Implement components",
        "Plough shares",
        "Gearbox housings",
        "Hydraulic pump bodies",
        "Wheel hubs",
      ],
    },
    {
      icon: Wrench,
      industry: "Engineering",
      products: [
        "Pump bodies & impellers",
        "Valve bodies",
        "Machine tool components",
        "Industrial gearboxes",
        "Bearing housings",
        "Pipe fittings",
      ],
    },
  ];

  const productCategories = [
    {
      title: "Automotive Components",
      image:
        "https://images.unsplash.com/photo-1758873263428-f4b2edb45fe1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwcGFydHMlMjBtYW51ZmFjdHVyaW5nfGVufDF8fHx8MTc3MTI4NDE1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "High-precision castings for passenger cars, commercial vehicles, and two-wheelers",
    },
    {
      title: "Agricultural Parts",
      image:
        "https://images.unsplash.com/photo-1769491188458-2728c8d44628?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXRhbCUyMGNhc3RpbmclMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc3MTMzNDgwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Durable iron castings for tractors, harvesters, and farm equipment",
    },
    {
      title: "Industrial Machinery",
      image:
        "https://images.unsplash.com/photo-1602223114290-ba6de2938acc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDTkMlMjBtYWNoaW5pbmclMjBwcmVjaXNpb258ZW58MXx8fHwxNzcxMjMyOTk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description:
        "Complex castings for pumps, valves, and general engineering applications",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758873263428-f4b2edb45fe1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwcGFydHMlMjBtYW51ZmFjdHVyaW5nfGVufDF8fHx8MTc3MTI4NDE1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Automotive parts"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Products
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            High-quality Grey Iron and Ductile Iron castings for critical
            applications
          </p>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-blue-600 font-semibold mb-2 uppercase tracking-wider text-sm">
              Product Range
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Serving Multiple Industries
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-64">
                  <ImageWithFallback
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-slate-200 text-sm">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grey Iron Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1769491188458-2728c8d44628?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2x0ZW4lMjBtZXRhbCUyMGZvdW5kcnklMjBwb3VyaW5nfGVufDF8fHx8MTc3MTMzNDgwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Grey iron casting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center justify-center h-12 w-12 bg-blue-600 rounded-lg mb-4">
                <Box className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Grey Iron Castings
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our Grey Iron castings offer excellent machinability, wear
                resistance, and thermal conductivity. Ideal for applications
                requiring good damping capacity and cost-effectiveness.
              </p>
              <ul className="space-y-3">
                {greyIronSpecs.map((spec, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ductile Iron Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center justify-center h-12 w-12 bg-blue-600 rounded-lg mb-4">
                <Box className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Ductile Iron Castings
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Ductile Iron combines the castability of grey iron with the
                strength and ductility approaching steel. Perfect for
                high-stress applications requiring impact resistance.
              </p>
              <ul className="space-y-3">
                {ductileIronSpecs.map((spec, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1761519609252-3b868e540398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMGludGVyaW9yJTIwbWFjaGluZXJ5fGVufDF8fHx8MTc3MTMzNDgwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Ductile iron casting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications by Industry */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-blue-400 font-semibold mb-2 uppercase tracking-wider text-sm">
              Applications
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Products by Industry
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {applications.map((app, index) => {
              const Icon = app.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-600 transition-colors"
                >
                  <Icon className="h-12 w-12 text-blue-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">{app.industry}</h3>
                  <ul className="space-y-2">
                    {app.products.map((product, pIndex) => (
                      <li key={pIndex} className="flex items-start text-slate-300">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>{product}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Custom Casting Solutions
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't see your specific requirement? We specialize in custom
              casting solutions tailored to your exact specifications.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-slate-100 text-blue-600 font-semibold rounded-lg transition-colors"
            >
              Discuss Your Requirements
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
