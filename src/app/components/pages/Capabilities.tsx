import {
  Factory,
  Flame,
  Box,
  Cog,
  FlaskConical,
  CheckCircle,
  Gauge,
  Settings,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Capabilities() {
  const capabilities = [
    {
      icon: Factory,
      title: "Molding Line",
      description:
        "Advanced automatic and semi-automatic molding lines with high production capacity.",
      features: [
        "Green sand molding system",
        "High-precision pattern equipment",
        "Automated pouring systems",
        "Capacity: 500+ tons/month",
      ],
    },
    {
      icon: Flame,
      title: "Melting Facility",
      description:
        "Modern induction furnaces for consistent melt quality and composition control.",
      features: [
        "Medium frequency induction furnaces",
        "Spectro analysis equipment",
        "Temperature control systems",
        "Grey & Ductile Iron capability",
      ],
    },
    {
      icon: Box,
      title: "Core Making",
      description:
        "In-house core shop equipped with advanced core making and baking facilities.",
      features: [
        "Shell core making machines",
        "Core assembly stations",
        "Automated core baking ovens",
        "Complex geometry capability",
      ],
    },
    {
      icon: Cog,
      title: "Machining Support",
      description:
        "Comprehensive CNC machining services for precision finishing and value addition.",
      features: [
        "CNC turning & milling centers",
        "Drilling & tapping operations",
        "Surface grinding capabilities",
        "Tight tolerance machining",
      ],
    },
    {
      icon: FlaskConical,
      title: "Quality Assurance",
      description:
        "State-of-the-art testing laboratory and stringent quality control processes.",
      features: [
        "Spectro analysis",
        "Mechanical testing (Tensile, Hardness)",
        "Dimensional inspection (CMM)",
        "Non-destructive testing (NDT)",
      ],
    },
    {
      icon: Settings,
      title: "Engineering Support",
      description:
        "Technical expertise to assist in design optimization and process development.",
      features: [
        "CAD/CAM capabilities",
        "Simulation software",
        "Design for manufacturability",
        "Prototype development",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Pattern Development",
      description: "Design and creation of patterns based on customer drawings",
    },
    {
      step: "02",
      title: "Molding",
      description: "Precision molding using automated and manual systems",
    },
    {
      step: "03",
      title: "Melting & Pouring",
      description: "Controlled melting and pouring of molten iron",
    },
    {
      step: "04",
      title: "Shake-out & Fettling",
      description: "Removal of castings and cleaning operations",
    },
    {
      step: "05",
      title: "Machining",
      description: "CNC machining to achieve final specifications",
    },
    {
      step: "06",
      title: "Quality Inspection",
      description: "Comprehensive testing and final inspection",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1602223114290-ba6de2938acc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDTkMlMjBtYWNoaW5pbmclMjBwcmVjaXNpb258ZW58MXx8fHwxNzcxMjMyOTk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="CNC machining"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Capabilities
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive manufacturing solutions from pattern to finished product
          </p>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-blue-600 font-semibold mb-2 uppercase tracking-wider text-sm">
              What We Offer
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Complete Foundry Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div
                  key={index}
                  className="group p-6 bg-slate-50 hover:bg-slate-900 rounded-xl transition-all duration-300 border border-slate-200 hover:border-blue-600"
                >
                  <div className="h-14 w-14 bg-blue-600 group-hover:bg-blue-500 rounded-lg flex items-center justify-center mb-4 transition-colors">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 group-hover:text-white mb-3 transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-slate-600 group-hover:text-slate-300 mb-4 transition-colors">
                    {capability.description}
                  </p>
                  <ul className="space-y-2">
                    {capability.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-start text-sm text-slate-600 group-hover:text-slate-300 transition-colors"
                      >
                        <CheckCircle className="h-4 w-4 text-blue-600 group-hover:text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-blue-600 font-semibold mb-2 uppercase tracking-wider text-sm">
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              From Concept to Delivery
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our systematic approach ensures consistent quality and timely
              delivery at every stage of production.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-slate-200"
              >
                <div className="absolute -top-4 -left-4 h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <div className="pt-4">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-blue-600 font-semibold mb-2 uppercase tracking-wider text-sm">
                Technical Capabilities
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Precision at Scale
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Gauge className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Weight Range
                    </h3>
                    <p className="text-slate-600">
                      0.5 kg to 500 kg per casting
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Box className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Material Grades
                    </h3>
                    <p className="text-slate-600">
                      Grey Iron: FG150, FG200, FG250, FG300
                      <br />
                      Ductile Iron: FCD400, FCD450, FCD500, FCD600
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Settings className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Machining Tolerance
                    </h3>
                    <p className="text-slate-600">
                      Up to ±0.01mm accuracy with CNC machining
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Factory className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">
                      Production Capacity
                    </h3>
                    <p className="text-slate-600">
                      500+ tons per month with scalability options
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1769491188458-2728c8d44628?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2x0ZW4lMjBtZXRhbCUyMGZvdW5kcnklMjBwb3VyaW5nfGVufDF8fHx8MTc3MTMzNDgwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Molten metal pouring"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-blue-400 font-semibold mb-2 uppercase tracking-wider text-sm">
              Our Facility
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Manufacturing Excellence
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761519609252-3b868e540398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMGludGVyaW9yJTIwbWFjaGluZXJ5fGVufDF8fHx8MTc3MTMzNDgwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Factory interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end">
                <p className="text-white font-semibold text-lg p-6">
                  Production Floor
                </p>
              </div>
            </div>

            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1700727448542-50531bc60211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwaW5zcGVjdGlvbiUyMGxhYm9yYXRvcnl8ZW58MXx8fHwxNzcxMzM0ODA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Quality lab"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end">
                <p className="text-white font-semibold text-lg p-6">
                  Quality Control Lab
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
