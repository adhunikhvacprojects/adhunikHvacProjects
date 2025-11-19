"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { 
  Ruler, 
  Hammer, 
  ShieldCheck, 
  Stethoscope, 
  Fan, 
  RefreshCw, 
  Factory, 
  Building2, 
  Leaf, 
  ClipboardList, 
  ArrowRight, 
  CheckCircle2,
  Zap,
  ThermometerSun,
  Users
} from "lucide-react";

export default function ComprehensiveHVACServices() {

  const designFeatures = [
    {
      title: "Meticulous Load Calculations",
      description: "We utilize advanced software to quantify all heat sources—solar, people, and machinery—preventing the costly pitfall of oversizing.",
      icon: <Ruler className="w-6 h-6 text-cyan-600" />
    },
    {
      title: "Airflow & Ventilation Analysis",
      description: "Designing systems to meet vital Indoor Air Quality (IAQ) and Air Changes Per Hour (ACH) standards for hospitals and labs.",
      icon: <WindIcon className="w-6 h-6 text-cyan-600" />
    },
    {
      title: "Energy-First Equipment",
      description: "Selecting high-SEER components like Magnetic Bearing Chillers and VRF systems to minimize operational costs.",
      icon: <Zap className="w-6 h-6 text-cyan-600" />
    }
  ];

  const specializedServices = [
    {
      title: "Healthcare & Clean Rooms",
      description: "Designing OTs and ICUs with precise pressure differentials and HEPA filtration to prevent contamination.",
      icon: <Stethoscope className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Pharmaceutical & GMP",
      description: "Implementing sterile air systems for manufacturing that meet stringent global Good Manufacturing Practice standards.",
      icon: <Factory className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Safety Infrastructure",
      description: "Basement ventilation for exhaust management and Lift Pressurization systems for fire safety compliance.",
      icon: <ShieldCheck className="w-8 h-8 text-cyan-600" />
    }
  ];

  const industries = [
    "Commercial Complexes", "Manufacturing Plants", "Hospitals & Healthcare", "Hotels & Hospitality",
    "Educational Institutions", "Data Centers & IT Parks", "Pharma Labs", "Retail Spaces"
  ];

  const processSteps = [
    "Consultation & Assessment",
    "Custom Design & Proposal",
    "Expert Installation",
    "Testing & Commissioning",
    "Handover & Support"
  ];

  return (
    <>
      <div className="bg-gray-50 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Hero Section */}
          <section className="flex flex-col-reverse md:flex-row-reverse gap-8 items-center mb-16">
            <div className="w-full md:w-6/12">
              <h1 className="text-2xl md:text-3xl font-bold text-cyan-800 mb-4 leading-tight text-center md:text-left">
                Our Comprehensive HVAC Contractor Services: Engineering Excellence from Design to Durability
              </h1>
              <p className="text-sm text-gray-700 mb-6 text-justify">
                In modern real estate, the HVAC system is the unseen engine of operational viability. A failure here translates to production halts or critical data loss. At Adhunik HVAC Projects, we don't just install equipment; we deliver holistic, turnkey solutions calibrated to your specific budget and sustainability goals.
              </p>
              
              {/* Intro Badge with Adhunik Powertech Link */}
              <div className="bg-cyan-50 border-l-4 border-cyan-600 p-4 mb-8 rounded-r-lg">
                <p className="text-sm text-gray-800 italic">
                  "Drawing upon a profound 19+ year legacy inherited from{" "}
                  <strong>
                    <Link 
                      href="https://www.adhunikpowertech.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-cyan-700 hover:underline"
                    >
                      Adhunik Powertech
                    </Link>
                  </strong>
                  , we have positioned ourselves as the definitive Top Contractor across Delhi NCR and Pan-India."
                </p>
              </div>
              
              <div className="flex justify-center md:justify-start gap-4">
                <Link href="/support-form" className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                  Contact Us
                </Link>
                 <Link href="/support-form" className="border-2 border-cyan-700 text-cyan-700 hover:bg-cyan-50 font-bold py-3 px-6 rounded-lg transition duration-300">
                  Free Consultation
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative w-full md:w-6/12 h-80 md:h-[28rem]">
              <Image
                src="https://res.cloudinary.com/dxenuee4n/image/upload/v1763553789/hvacservices_gzpvjj.webp" 
                alt="Engineers reviewing HVAC blueprints"
                fill
                className="object-cover rounded-xl shadow-lg"
                priority
              />
            </div>
          </section>

          {/* Phase 1: Design & Engineering */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">Phase 1: Precision Design & Strategic Engineering</h2>
              <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm">
                The foundation of every high-performing system is data-driven design. Skimping here leads to costly inefficiencies.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {designFeatures.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-cyan-600 hover:shadow-lg transition-all">
                  <div className="flex justify-center mb-4 bg-cyan-50 w-12 h-12 mx-auto rounded-full items-center">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 text-justify">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Phase 2: Installation */}
          <section className="mb-16 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="grid md:grid-cols-2">
                <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-cyan-800 mb-4">Phase 2: Flawless Installation & Commissioning</h3>
                    <p className="text-sm text-gray-600 mb-6 text-justify">
                        Even the best design fails without expert execution. Our certified teams handle everything from massive industrial chillers to precision data center cooling.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                            <span><strong>Industrial Systems:</strong> Heavy-duty chillers and air washers.</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                            <span><strong>System Balancing (TAB):</strong> Ensuring every zone receives exact air volume.</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                            <span><strong>Performance Verification:</strong> Testing under full load to guarantee design specs.</span>
                        </li>
                    </ul>
                </div>
                <div className="relative h-64 md:h-auto">
                    <Image 
                        src="https://res.cloudinary.com/dxenuee4n/image/upload/v1763553789/hvacservices_2_gifje5.webp"
                        alt="HVAC Installation Team"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
          </section>

          {/* Phase 3: Specialized Solutions */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">Phase 3: Solutions for Critical Environments</h2>
              <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm">
                In sensitive facilities, standard HVAC is inadequate. We excel where contamination control and pressurization are mission-critical.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {specializedServices.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-cyan-50 to-white p-6 rounded-lg shadow-md border border-cyan-100">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 text-justify">{service.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Phase 4: Maintenance & AMC */}
          <section className="mb-16">
             <div className="bg-cyan-900 text-white rounded-xl p-8 shadow-xl">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-2/3">
                        <h2 className="text-2xl font-bold mb-4">Phase 4: Long-Term Maintenance (AMC)</h2>
                        <p className="text-cyan-100 text-sm mb-4 text-justify">
                            An HVAC system is a long-term investment. Without professional maintenance, efficiency drops sharply. Our <strong>Annual Maintenance Contracts (AMCs)</strong> ensure predictable costs and maximum uptime.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-cyan-800 p-4 rounded-lg">
                                <h4 className="font-bold mb-1 flex items-center gap-2"><RefreshCw className="w-4 h-4" /> Preventive Care</h4>
                                <p className="text-xs text-cyan-200">Routine inspections and lubrication to prevent expensive failures.</p>
                            </div>
                            <div className="bg-cyan-800 p-4 rounded-lg">
                                <h4 className="font-bold mb-1 flex items-center gap-2"><Zap className="w-4 h-4" /> Efficiency Guarantee</h4>
                                <p className="text-xs text-cyan-200">Keeping components in peak condition to sustain energy savings.</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/3 flex justify-center">
                        <ShieldCheck className="w-32 h-32 text-cyan-400 opacity-80" />
                    </div>
                </div>
             </div>
          </section>

          {/* Phase V: Industries */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-800 text-center mb-8">Industries That Trust Adhunik</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {industries.map((ind, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center hover:border-cyan-500 transition-colors">
                        <p className="text-sm font-semibold text-gray-700">{ind}</p>
                    </div>
                ))}
            </div>
          </section>

          {/* Phase VI: Sustainability */}
          <section className="mb-16 flex flex-col md:flex-row gap-6 items-center bg-green-50 p-8 rounded-xl border border-green-100">
             <Leaf className="w-16 h-16 text-green-600 shrink-0" />
             <div>
                 <h3 className="text-xl font-bold text-green-800 mb-2">Commitment to Sustainable Solutions</h3>
                 <p className="text-sm text-gray-700 text-justify">
                    Our ethos is centered on environmental responsibility. By integrating intelligent controls (BMS) and high-efficiency components, we help clients achieve significant reductions in their carbon footprint and operational energy consumption.
                 </p>
             </div>
          </section>

          {/* Phase VII: The Process */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-800 text-center mb-10">From Concept to Comfort: Our Process</h2>
            <div className="relative">
                <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 hidden md:block"></div>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {processSteps.map((step, idx) => (
                        <div key={idx} className="relative bg-white p-4 rounded-lg shadow-md border border-gray-100 z-10 text-center">
                            <div className="w-8 h-8 bg-cyan-600 text-white font-bold rounded-full flex items-center justify-center mx-auto mb-2">
                                {idx + 1}
                            </div>
                            <p className="text-sm font-bold text-gray-800">{step}</p>
                        </div>
                    ))}
                </div>
            </div>
          </section>

          {/* Final CTA / Why Trust (Interactive Card Layout) */}
          <section className="mb-16">
            <div className="group relative bg-gradient-to-br from-cyan-50 via-white to-blue-50 rounded-2xl p-8 border border-cyan-100 shadow-lg hover:shadow-2xl hover:border-cyan-300 transition-all duration-500 overflow-hidden">
                
                {/* Centered Header Content */}
                <div className="relative z-10 flex flex-col items-center">
                   <div className="text-center max-w-3xl mb-10">
                      <h3 className="text-xl md:text-3xl font-bold text-cyan-800 mb-4 group-hover:text-cyan-600 transition-colors">
                        Partner with an Award-Winning HVAC Contractor
                      </h3>
                      <p className="text-sm text-gray-700">
                        Whether you need a massive industrial installation in Haryana or critical clean room solutions in Delhi NCR, our comprehensive services are guaranteed to exceed your expectations.
                      </p>
                   </div>
                   
                   {/* The "Little Columns" Grid */}
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                      
                      {/* Column 1 */}
                      <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group/card">
                         <div className="bg-cyan-100 p-3 rounded-full mb-4 group-hover/card:bg-cyan-600 group-hover/card:text-white transition-colors duration-300">
                            <ThermometerSun className="w-8 h-8 text-cyan-600 group-hover/card:text-white" />
                         </div>
                         <h4 className="font-bold text-gray-800 mb-2">Custom Solutions</h4>
                         <p className="text-xs text-gray-600">Tailored designs perfectly suited to your needs.</p>
                      </div>

                      {/* Column 2 */}
                      <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group/card">
                         <div className="bg-cyan-100 p-3 rounded-full mb-4 group-hover/card:bg-cyan-600 group-hover/card:text-white transition-colors duration-300">
                            <Users className="w-8 h-8 text-cyan-600 group-hover/card:text-white" />
                         </div>
                         <h4 className="font-bold text-gray-800 mb-2">Expert Team</h4>
                         <p className="text-xs text-gray-600">Leveraging the formidable legacy of Adhunik Powertech.</p>
                      </div>

                      {/* Column 3 */}
                      <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group/card">
                         <div className="bg-cyan-100 p-3 rounded-full mb-4 group-hover/card:bg-cyan-600 group-hover/card:text-white transition-colors duration-300">
                            <ArrowRight className="w-8 h-8 text-cyan-600 group-hover/card:text-white" />
                         </div>
                         <h4 className="font-bold text-gray-800 mb-2">Get Started</h4>
                         <Link href="/support-form" className="text-xs text-cyan-700 underline hover:text-cyan-900">
                            Claim Your Free Consultation
                         </Link>
                      </div>

                   </div>
                </div>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}

function WindIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
        <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
        <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
      </svg>
    )
}