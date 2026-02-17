import { Target, Eye, Award, Users, Factory, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: Award,
      title: "Quality First",
      description:
        "We maintain the highest standards in every casting we produce, ensuring consistent quality and reliability.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description:
        "Our customers' success drives us. We work closely with OEMs to deliver tailored solutions.",
    },
    {
      icon: Factory,
      title: "Innovation",
      description:
        "Continuous improvement in processes and technology keeps us at the forefront of the industry.",
    },
    {
      icon: TrendingUp,
      title: "Sustainable Growth",
      description:
        "We believe in responsible manufacturing that supports long-term partnerships and environmental stewardship.",
    },
  ];

  const milestones = [
    { year: "2026", event: "Company Established" },
    { year: "2026", event: "First Major Automotive OEM Partnership" },
    { year: "2026", event: "ISO Quality Certification" },
    { year: "2026", event: "Expansion of Machining Capabilities" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1717386255893-59c0846cdef0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwcGxhbnQlMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzcxMzM0ODEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Manufacturing plant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Us
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Building a legacy of precision casting excellence since 2026
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1761519609252-3b868e540398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMGludGVyaW9yJTIwbWFjaGluZXJ5fGVufDF8fHx8MTc3MTMzNDgwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Factory floor"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <div className="text-blue-600 font-semibold mb-2 uppercase tracking-wider text-sm">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                The Organiser Castech Pvt. Ltd.
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Established in 2026, The Organiser Castech Pvt. Ltd. has
                  rapidly emerged as a trusted name in the iron casting industry.
                  Our foundry specializes in manufacturing high-quality Grey Iron
                  and Ductile Iron castings for diverse industrial applications.
                </p>
                <p>
                  With a strong focus on precision engineering and quality
                  assurance, we serve leading OEMs in the automotive,
                  agricultural, and general engineering sectors. Our
                  state-of-the-art facility combines traditional casting
                  expertise with modern manufacturing technology.
                </p>
                <p>
                  We are committed to building long-term partnerships with our
                  clients by delivering consistent quality, timely delivery, and
                  technical support throughout the product development cycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-xl shadow-lg border border-slate-200">
              <div className="flex items-center mb-6">
                <div className="h-14 w-14 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Eye className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                To be recognized as the most reliable and innovative iron casting
                partner in the industry, known for precision, quality, and
                customer-centric solutions that drive our clients' success.
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-lg border border-slate-200">
              <div className="flex items-center mb-6">
                <div className="h-14 w-14 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                To deliver superior Grey Iron and Ductile Iron castings through
                advanced manufacturing processes, continuous innovation, and
                unwavering commitment to quality, while fostering a culture of
                excellence and sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-blue-600 font-semibold mb-2 uppercase tracking-wider text-sm">
              Our Values
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              What Drives Us Forward
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="flex gap-4 p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-slate-600">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Policy */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="h-16 w-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Quality Policy
            </h2>
            <div className="text-lg text-slate-300 leading-relaxed space-y-4">
              <p>
                At The Organiser Castech, quality is not just a department—it's
                our commitment to every customer, every casting, every time.
              </p>
              <p>
                We are dedicated to meeting and exceeding customer expectations
                through:
              </p>
              <ul className="text-left max-w-2xl mx-auto space-y-2 mt-6">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>Strict adherence to international quality standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>
                    Comprehensive in-process and final inspection protocols
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>Continuous training and skill development programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>
                    Investment in advanced testing and measurement equipment
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">•</span>
                  <span>
                    Regular audits and continual improvement initiatives
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Highlight */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-blue-600 font-semibold mb-2 uppercase tracking-wider text-sm">
              Infrastructure
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              State-of-the-Art Facility
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our modern manufacturing facility is equipped with advanced
              machinery and technology to support complex casting requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1769491188458-2728c8d44628?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2x0ZW4lMjBtZXRhbCUyMGZvdW5kcnklMjBwb3VyaW5nfGVufDF8fHx8MTc3MTMzNDgwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Melting facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex items-end">
                <p className="text-white font-semibold p-4">Melting Facility</p>
              </div>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1602223114290-ba6de2938acc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDTkMlMjBtYWNoaW5pbmclMjBwcmVjaXNpb258ZW58MXx8fHwxNzcxMjMyOTk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="CNC machining"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex items-end">
                <p className="text-white font-semibold p-4">Machining Center</p>
              </div>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1700727448542-50531bc60211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwaW5zcGVjdGlvbiUyMGxhYm9yYXRvcnl8ZW58MXx8fHwxNzcxMzM0ODA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Quality lab"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex items-end">
                <p className="text-white font-semibold p-4">Testing Laboratory</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-blue-600 font-semibold mb-2 uppercase tracking-wider text-sm">
              Our Journey
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Key Milestones
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex gap-6 items-start p-6 bg-white rounded-xl shadow-sm"
                >
                  <div className="flex-shrink-0 h-16 w-16 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-slate-900 font-medium">
                      {milestone.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
