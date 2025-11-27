"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { 
  Wind, 
  Gauge, 
  Zap, 
  Thermometer, 
  Volume2, 
  Droplets, 
  ShieldAlert, 
  FileCheck, 
  Activity, 
  Settings, 
  Hammer, 
  ClipboardCheck,
  ArrowRight,
  CheckCircle2,
  Building2,
  Calculator,
  MonitorPlay,
  Scale
} from "lucide-react";

export default function DuctingDesignBlog() {

  // Section 1 Data: Efficiency & Static Pressure
  const efficiencyPoints = [
    {
      title: "1. The Hidden Cost: Static Pressure",
      description: "Static Pressure is the resistance the fan motor must overcome. Design errors like sharp 90-degree elbows or abrupt transitions create massive friction, forcing the system to work harder.",
      icon: <Gauge className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "2. The Energy Tax (Fan Laws)",
      description: (
        <span>
          Power consumption is proportional to the cube of speed. A small increase in resistance forces the motor to speed up, spiking electricity usage by 15-30% unnecessarily.
        </span>
      ),
      icon: <Zap className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "3. The Design Solution",
      description: "We ensure designs use smooth transitions, long radius elbows, and optimally sized straight runs. This minimizes frictional losses, allowing fans to run slower and save substantial energy.",
      icon: <Settings className="w-8 h-8 text-cyan-600" />
    }
  ];

  // Section 2 Data: Comfort & Distribution
  const comfortPoints = [
    {
      title: "1. Hot and Cold Spots",
      description: "Poor design creates imbalance. Areas near the AHU get a 'blast' of excessive cooling, while distant corners starve for air, creating uncomfortable hot spots.",
      icon: <Thermometer className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "2. Acoustic Issues (Noise)",
      description: "Undersized ducts require high air velocity to meet CFM needs. This generates distracting 'whooshing' or whistling noises that exceed commercial Noise Criteria (NC) levels.",
      icon: <Volume2 className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "3. The Balancing Act",
      description: "We use the 'Static Regain' or 'Equal Friction' methods to manage pressure drops, guaranteeing the exact required CFM reaches every single terminal unit.",
      icon: <Scale className="w-8 h-8 text-cyan-600" />
    }
  ];

  // Section 3 Data: IAQ (Mapped to Modern Upgrades style)
  const iaqPoints = [
    {
      title: "Leakage & Air Loss",
      description: "Poorly sealed joints allow conditioned air to escape and, critically, suck in dust and humid, unconditioned air from ceiling voids, degrading IAQ.",
      icon: <Wind className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Moisture & Mold Risks",
      description: "Leakage introduces humidity into insulated spaces, leading to condensation and mold growth—a serious health and liability issue for facility managers.",
      icon: <Droplets className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "SMACNA Testing",
      description: "We adhere to strict SMACNA standards, using specialized equipment to test for leakage and verify joint integrity before commissioning.",
      icon: <ShieldAlert className="w-8 h-8 text-cyan-600" />
    }
  ];

  return (
    <>
      <div className="bg-gray-50 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Hero Section */}
          <section className="flex flex-col-reverse md:flex-row-reverse gap-8 items-center mb-16">
            <div className="w-full md:w-6/12">
              <h1 className="text-2xl md:text-3xl font-bold text-cyan-800 mb-4 leading-tight text-center md:text-left">
                Why Proper Ducting Design Matters in Commercial Buildings
              </h1>
              <p className="text-sm text-gray-700 mb-4 text-justify">
                In any modern commercial building—be it a high-rise office, a sprawling retail center, or a specialized data center—the HVAC system is a massive engine. Yet, even the most expensive Chiller or AHU is rendered useless without its essential partner: the ducting network.
              </p>
              <p className="text-sm text-gray-700 mb-6 text-justify">
                Often treated as an afterthought, the duct system is actually the building’s vascular system. When improperly designed, it becomes the single largest point of failure, silently sabotaging energy efficiency, comfort, and Indoor Air Quality (IAQ).
              </p>
              
              {/* Badges */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center gap-2 p-3 bg-cyan-50 rounded-lg">
                  <Activity className="w-6 h-6 text-cyan-700" />
                  <span className="font-semibold text-cyan-800 text-sm">Vascular System</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-cyan-50 rounded-lg">
                  <Zap className="w-6 h-6 text-cyan-700" />
                  <span className="font-semibold text-cyan-800 text-sm">Energy Savings</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-cyan-50 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-cyan-700" />
                  <span className="font-semibold text-cyan-800 text-sm">Precision Design</span>
                </div>
              </div>
              
              <div className="flex justify-center md:justify-start">
                <Link href="/support-form" className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                  Consult Our Engineers
                </Link>
              </div>
            </div>
            {/* Hero Image */}
            <div className="relative w-full md:w-6/12 h-80 md:h-[28rem]">
              <Image
                src="https://res.cloudinary.com/dxenuee4n/image/upload/v1764267199/Commercial_ducting_design_Importance_xnyyvl.webp" 
                alt="HVAC technician inspecting and adjusting commercial ducting system to ensure proper airflow and efficient ducting design in commercial buildings."
                fill
                className="object-contain rounded-xl shadow-lg"
                priority
              />
            </div>
          </section>

          {/* Section 1: Efficiency & Static Pressure */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">The Anatomy of Efficiency: Impact on Costs</h2>
              <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm">
                The primary purpose of design is simple: deliver the right air to the right place. The biggest enemy of this goal is excessive Static Pressure.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {efficiencyPoints.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-cyan-600 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    {item.icon}
                    <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 text-justify">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Comfort & Uniformity */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">Comfort & Uniformity: Eliminating Hot Spots</h2>
              <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm">
                In a commercial environment, occupant comfort directly impacts productivity. Nothing disrupts a workspace faster than uneven temperatures or noisy air distribution.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {comfortPoints.map((point, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-cyan-600 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    {point.icon}
                    <h3 className="text-lg font-semibold text-gray-800">{point.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 text-justify">{point.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: IAQ (Cards Style) */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">Indoor Air Quality (IAQ) & System Longevity</h2>
              <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm">
                While ductwork moves air, it also defines the quality of that air. Poor installation leads to cross-contamination and health risks.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {iaqPoints.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 text-justify">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Part B: THE ADHUNIK DIFFERENCE (Interactive Gradient Card) */}
            <div className="group relative bg-gradient-to-br from-cyan-50 via-white to-blue-50 rounded-2xl p-8 border border-cyan-100 shadow-lg hover:shadow-2xl hover:border-cyan-300 transition-all duration-500 overflow-hidden">
                
                {/* Centered Header Content */}
                <div className="relative z-10 flex flex-col items-center">
                   <div className="text-center max-w-3xl mb-10">
                      <h3 className="text-xl md:text-3xl font-bold text-cyan-800 mb-4 group-hover:text-cyan-600 transition-colors">
                        The Adhunik HVAC Projects Difference
                      </h3>
                      <p className="text-sm text-gray-700">
                        For large commercial projects across Pan India, we don't just install sheet metal—we engineer performance. From Load Analysis to Testing, Adjusting, and Balancing (TAB).
                      </p>
                   </div>
                   
                   {/* The "Little Columns" Grid */}
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                      
                      {/* Column 1 */}
                      <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group/card">
                         <div className="bg-cyan-100 p-3 rounded-full mb-4 group-hover/card:bg-cyan-600 group-hover/card:text-white transition-colors duration-300">
                            <Calculator className="w-8 h-8 text-cyan-600 group-hover/card:text-white" />
                         </div>
                         <h4 className="font-bold text-gray-800 mb-2">Detailed Load Analysis</h4>
                         <p className="text-xs text-gray-600">Calculating precise cooling loads to determine exact CFM per zone.</p>
                      </div>

                      {/* Column 2 */}
                      <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group/card">
                         <div className="bg-cyan-100 p-3 rounded-full mb-4 group-hover/card:bg-cyan-600 group-hover/card:text-white transition-colors duration-300">
                            <MonitorPlay className="w-8 h-8 text-cyan-600 group-hover/card:text-white" />
                         </div>
                         <h4 className="font-bold text-gray-800 mb-2">Advanced Modeling</h4>
                         <p className="text-xs text-gray-600">Visualizing airflow and predicting pressure drops before construction begins.</p>
                      </div>

                      {/* Column 3 */}
                      <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group/card">
                         <div className="bg-cyan-100 p-3 rounded-full mb-4 group-hover/card:bg-cyan-600 group-hover/card:text-white transition-colors duration-300">
                            <Hammer className="w-8 h-8 text-cyan-600 group-hover/card:text-white" />
                         </div>
                         <h4 className="font-bold text-gray-800 mb-2">Fabrication & TAB</h4>
                         <p className="text-xs text-gray-600">SMACNA-compliant fabrication validated by rigorous Balancing (TAB).</p>
                      </div>

                   </div>
                </div>
            </div>
          </section>

          {/* Conclusion Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-800 mb-4">Ducting is Not Just Sheet Metal—It's Performance</h2>
              <p className="text-gray-600 text-sm mb-4 text-justify">
                If you invest millions in a state-of-the-art cooling plant but use substandard or poorly designed ductwork, you are effectively limiting your system's performance to the quality of that metal pathway. You will pay more in energy, suffer from inconsistent comfort, and face higher maintenance costs.
              </p>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="bg-gradient-to-r from-cyan-600 to-cyan-800 rounded-xl p-8 text-white shadow-lg">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Get Expert HVAC Solutions for Your Commercial Facility</h2>
              <p className="text-cyan-100 mb-8 text-sm">
               Reach out to us to ensure your building’s “unseen network” is designed and optimized for maximum performance.gineered for peak performance from day one.
              </p>
              <div className="flex justify-center">
                <Link href="/support-form" className="bg-white text-md font-bold text-cyan-800 hover:bg-cyan-100 py-3 px-8 rounded-lg transition duration-300">
                  CONTACT US NOW
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}