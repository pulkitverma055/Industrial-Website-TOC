import {
  Shield,
  FlaskConical,
  Microscope,
  CheckCircle,
  Award,
  BarChart3,
  FileCheck,
  Users,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Quality() {
  const testingCapabilities = [
    {
      icon: FlaskConical,
      title: "Chemical Analysis",
      tests: [
        "Spectro analysis for composition",
        "Carbon & silicon content",
        "Alloying element verification",
        "Sulphur & phosphorus testing",
      ],
    },
    {
      icon: Microscope,
      title: "Mechanical Testing",
      tests: [
        "Tensile strength testing",
        "Hardness measurement (Brinell)",
        "Impact testing (Charpy)",
        "Fatigue testing",
      ],
    },
    {
      icon: BarChart3,
      title: "Dimensional Inspection",
      tests: [
        "CMM (Coordinate Measuring Machine)",
        "Vernier & micrometer inspection",
        "Surface roughness measurement",
        "Go/No-Go gauge testing",
      ],
    },
    {
      icon: Shield,
      title: "Non-Destructive Testing",
      tests: [
        "Magnetic particle inspection (MPI)",
        "Dye penetrant testing (DPT)",
        "Ultrasonic testing (UT)",
        "Visual inspection",
      ],
    },
  ];

  const qualityProcess = [
    {
      step: "Raw Material Inspection",
      description:
        "Verification of all incoming raw materials including pig iron, scrap, and additives",
    },
    {
      step: "In-Process Control",
      description:
        "Continuous monitoring of melt composition, temperature, and molding parameters",
    },
    {
      step: "First Article Inspection",
      description:
        "Comprehensive testing of initial production pieces before mass production",
    },
    {
      step: "Production Monitoring",
      description:
        "Regular sampling and testing throughout the production run",
    },
    {
      step: "Final Inspection",
      description:
        "Complete dimensional, mechanical, and visual inspection of finished castings",
    },
    {
      step: "Documentation",
      description:
        "Detailed test reports and certificates of conformance for traceability",
    },
  ];

  const certifications = [
    {
      icon: Award,
      title: "ISO 9001:2015",
      status: "Certified",
      description: "Quality Management System",
    },
    {
      icon: FileCheck,
      title: "IATF 16949",
      status: "In Progress",
      description: "Automotive Quality Standard",
    },
    {
      icon: Shield,
      title: "ISO 14001",
      status: "In Progress",
      description: "Environmental Management",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1700727448542-50531bc60211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwaW5zcGVjdGlvbiUyMGxhYm9yYXRvcnl8ZW58MXx8fHwxNzcxMzM0ODA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Quality lab"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Quality Assurance
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Excellence is not an act, but a habit embedded in our processes
          </p>
        </div>
      </section>

      {/* Quality Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="text-blue-600 font-semibold mb-2 uppercase tracking-wider text-sm">
              Our Commitment
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Quality at Every Stage
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              At The Organiser Castech, quality is not just a department—it's a
              mindset that permeates every aspect of our operations. From raw
              material selection to final dispatch, every step is carefully
              monitored and controlled to ensure our castings meet the highest
              standards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Zero Defect Goal
              </h3>
              <p className="text-slate-600">
                Striving for perfection in every casting through rigorous
                quality controls
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Skilled Team
              </h3>
              <p className="text-slate-600">
                Trained quality professionals with expertise in metallurgy and
                testing
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Certified Processes
              </h3>
              <p className="text-slate-600">
                ISO-compliant quality management systems and procedures
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Capabilities */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-blue-600 font-semibold mb-2 uppercase tracking-wider text-sm">
              Testing Laboratory
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Comprehensive Testing Capabilities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testingCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-white rounded-xl shadow-lg border border-slate-200"
                >
                  <div className="flex items-center mb-6">
                    <div className="h-14 w-14 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900">
                      {capability.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {capability.tests.map((test, tIndex) => (
                      <li key={tIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">{test}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Process Flow */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-blue-600 font-semibold mb-2 uppercase tracking-wider text-sm">
              Quality Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              End-to-End Quality Control
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our systematic quality process ensures that every casting meets
              specification requirements and customer expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityProcess.map((step, index) => (
              <div
                key={index}
                className="relative p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="absolute -top-3 -left-3 h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <div className="pt-4">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {step.step}
                  </h3>
                  <p className="text-slate-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Images */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-blue-400 font-semibold mb-2 uppercase tracking-wider text-sm">
              Our Laboratory
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Advanced Testing Facility
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-80 rounded-xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1700727448542-50531bc60211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwaW5zcGVjdGlvbiUyMGxhYm9yYXRvcnl8ZW58MXx8fHwxNzcxMzM0ODA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Testing equipment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex items-end">
                <p className="text-white font-semibold text-lg p-6">
                  Testing Equipment
                </p>
              </div>
            </div>

            <div className="relative h-80 rounded-xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1602223114290-ba6de2938acc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDTkMlMjBtYWNoaW5pbmclMjBwcmVjaXNpb258ZW58MXx8fHwxNzcxMjMyOTk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Precision inspection"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex items-end">
                <p className="text-white font-semibold text-lg p-6">
                  Precision Inspection
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-blue-600 font-semibold mb-2 uppercase tracking-wider text-sm">
              Standards & Certifications
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Recognized Quality Standards
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-slate-50 rounded-xl text-center hover:shadow-lg transition-shadow border border-slate-200"
                >
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {cert.title}
                  </h3>
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3">
                    {cert.status}
                  </div>
                  <p className="text-slate-600">{cert.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Commitment CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-16 w-16 text-blue-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quality You Can Trust
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Our commitment to quality means you receive castings that meet your
            exact specifications, every time. Experience the difference that
            rigorous quality control makes.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            Request Quality Documentation
          </a>
        </div>
      </section>
    </div>
  );
}
