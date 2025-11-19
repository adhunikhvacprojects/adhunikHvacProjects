"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { 
  ThermometerSnowflake, 
  Wind, 
  Flame, 
  Snowflake, 
  Maximize, 
  Settings, 
  Activity, 
  CalendarCheck, 
  AlertTriangle, 
  Zap, 
  Cpu, 
  Server,
  Clock,
  ShieldCheck,
  Award
} from "lucide-react";

export default function WinterHVACMaintenance() {

  const winterChallenges = [
    {
      title: "1. Increased Thermal Load",
      description: "In frigid conditions, the system must run continuously to overcome heat loss through walls and windows. This high-demand operation accelerates wear on motors and heat exchangers.",
      icon: <ThermometerSnowflake className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "2. Freezing & Icing Threat",
      description: "Moisture can freeze on outdoor coils (evaporators). While modern units defrost automatically, excessive ice acts as an insulator, reducing heat transfer and potentially damaging fan blades.",
      icon: <Snowflake className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "3. Reduced Component Efficiency",
      description: "Cold thickens lubricants, forcing motors to work harder on startup. Additionally, denser cold air alters fan dynamics and can impact airflow sensor calibration in large AHUs.",
      icon: <Wind className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "4. Safety Risks (CO & Fire)",
      description: "For combustion systems, cracked heat exchangers or blocked flues can release deadly Carbon Monoxide (CO). Winter is the peak season for CO poisoning risks.",
      icon: <AlertTriangle className="w-8 h-8 text-cyan-600" />
    }
  ];

  const checklistPoints = [
    {
      title: "1. The Air Filter Mandate",
      description: "Restricted airflow causes short-cycling and overheating. For Delhi NCR, inspect monthly and replace every 1-3 months based on MERV ratings.",
      icon: <Wind className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "2. Heating Element Inspection",
      description: "A safety critical step. We check heat exchangers for microscopic cracks and ensure the burner flame is a steady blue to prevent CO leaks.",
      icon: <Flame className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "3. Deep Clean Outdoor Unit",
      description: "We remove debris and test the defrost cycle sensor—a common failure point—to ensure coils remain ice-free and efficient.",
      icon: <Snowflake className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "4. Ductwork & Insulation",
      description: "Poor ducts lose 30% of heat. We seal leaks with mastic sealant and check insulation to prevent condensation and heat loss.",
      icon: <Maximize className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "5. Calibrate Thermostat/BMS",
      description: "We verify sensor accuracy and optimize setback features (lowering temp when unoccupied) to save up to 10% on bills.",
      icon: <Settings className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "6. System-Critical Checks",
      description: "Tightening electrical connections to prevent fire hazards, lubricating motors for cold starts, and verifying refrigerant charge levels.",
      icon: <Activity className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "7. Annual Maintenance Contract",
      description: "The best defense is a plan. Our AMCs cover pre-winter, mid-season, and pre-summer checks to guarantee operational uptime.",
      icon: <CalendarCheck className="w-8 h-8 text-cyan-600" />
    }
  ];

  const modernUpgrades = [
    {
      title: "VRF/VRV Technology",
      description: "Unmatched efficiency for large buildings. Modulates capacity to the exact load, avoiding energy waste in fluctuating Delhi temps.",
      icon: <Server className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Inverter Technology",
      description: "Compressors adjust speed smoothly rather than hard cycling, maintaining consistent heat with minimal energy expenditure.",
      icon: <Zap className="w-8 h-8 text-cyan-600" />
    },
    {
      title: "Smart Automation (BMS)",
      description: "Predictive maintenance that flags issues like high current draw before a catastrophic breakdown occurs.",
      icon: <Cpu className="w-8 h-8 text-cyan-600" />
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
                How to Maintain Peak HVAC Performance in Low Temperatures
              </h1>
              <p className="text-sm text-gray-700 mb-4 text-justify">
                When winter hits Delhi NCR, we rely on our heating systems to keep our spaces safe and comfortable. Just like a car, your HVAC system needs extra care to perform when the temperature drops.
              </p>
              <p className="text-sm text-gray-700 mb-6 text-justify">
                The challenges of low temperatures put immense stress on heating components. From sensitive heat exchangers to outdoor condensers, ignoring seasonal strain can lead to crippling energy waste and failure. We, at AdhunikHvac Projects, provide engineered solutions to keep the heat flowing efficiently.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center gap-2 p-3 bg-cyan-50 rounded-lg">
                  <Clock className="w-6 h-6 text-cyan-700" />
                  <span className="font-semibold text-cyan-800 text-sm">19+ Years Legacy</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-cyan-50 rounded-lg">
                  <ShieldCheck className="w-6 h-6 text-cyan-700" />
                  <span className="font-semibold text-cyan-800 text-sm">Safety First</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-cyan-50 rounded-lg">
                  <Zap className="w-6 h-6 text-cyan-700" />
                  <span className="font-semibold text-cyan-800 text-sm">Energy Efficient</span>
                </div>
              </div>
              
              <div className="flex justify-center md:justify-start">
                <Link href="/support-form" className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                  Get Professional Guidance
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative w-full md:w-6/12 h-80 md:h-[28rem]">
              <Image
                src="https://res.cloudinary.com/dxenuee4n/image/upload/v1763539094/hvac-performance_2_bar1zl.webp" 
                alt="Outdoor commercial HVAC units on a rooftop with a banner reading. How to Maintain Peak HVAC Performance in Low Temperatures."
                fill
                className="object-cover rounded-xl shadow-lg"
                priority
              />
            </div>
          </section>

          {/* Section 1: The Winter Challenge */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">The Winter Challenge: Why Low Temps Cripple Systems</h2>
              <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm">
                Many believe the cooling cycle is the only time systems are stressed. In reality, the heating cycle faces the toughest test during peak winter.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {winterChallenges.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                  <div className="flex items-center gap-4 mb-4">
                    {item.icon}
                    <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 text-justify">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: The 7-Point Checklist */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">The 7-Point Winter HVAC Maintenance Checklist</h2>
              <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm">
                To ensure your system withstands the winter strain, we advocate for a structured, multi-point maintenance protocol that goes beyond simple filter changes.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {checklistPoints.map((point, index) => (
                <div key={index} className={`bg-white p-6 rounded-lg shadow-md border-l-4 border-cyan-600 ${index === 6 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                  <div className="flex items-center gap-4 mb-4">
                    {point.icon}
                    <h3 className="text-lg font-semibold text-gray-800">{point.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 text-justify">{point.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Modern Upgrades & Trust (Unified Section) */}
          <section className="mb-16">
            {/* Part A: Upgrades Grid */}
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-800">Long-Term Efficiency & Modern Upgrades</h2>
              <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm">
                Older systems cannot compete with modern technology. Upgrading to high-efficiency standards is often the most cost-effective solution.
              </p>
            </div>
            
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {modernUpgrades.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 text-justify">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Part B: INTERACTIVE CARD (Redesigned as Columns with Centered Text) */}
            <div className="group relative bg-gradient-to-br from-cyan-50 via-white to-blue-50 rounded-2xl p-8 border border-cyan-100 shadow-lg hover:shadow-2xl hover:border-cyan-300 transition-all duration-500 overflow-hidden">
                
                {/* Centered Header Content */}
                <div className="relative z-10 flex flex-col items-center">
                   <div className="text-center max-w-3xl mb-10">
                      <h3 className="text-xl md:text-3xl font-bold text-cyan-800 mb-4 group-hover:text-cyan-600 transition-colors">
                        Why Trust Adhunik Hvac Projects?
                      </h3>
                      <p className="text-sm text-gray-700">
                        Trust is earned through results. Our distinction as a top HVAC contractor in Delhi NCR stems from our commitment to engineering excellence in mission-critical environments.
                      </p>
                   </div>
                   
                   {/* The "Little Columns" Grid */}
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                      
                      {/* Column 1 */}
                      <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group/card">
                         <div className="bg-cyan-100 p-3 rounded-full mb-4 group-hover/card:bg-cyan-600 group-hover/card:text-white transition-colors duration-300">
                            <ShieldCheck className="w-8 h-8 text-cyan-600 group-hover/card:text-white" />
                         </div>
                         <h4 className="font-bold text-gray-800 mb-2">Turnkey Expertise</h4>
                         <p className="text-xs text-gray-600">Design, engineer, install, and maintain under one roof.</p>
                      </div>

                      {/* Column 2 */}
                      <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group/card">
                         <div className="bg-cyan-100 p-3 rounded-full mb-4 group-hover/card:bg-cyan-600 group-hover/card:text-white transition-colors duration-300">
                            <Award className="w-8 h-8 text-cyan-600 group-hover/card:text-white" />
                         </div>
                         <h4 className="font-bold text-gray-800 mb-2">Global Standards</h4>
                         <p className="text-xs text-gray-600">Compliant with ISHRAE, ASHRAE, NBC, and CPWD.</p>
                      </div>

                      {/* Column 3 */}
                      <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group/card">
                         <div className="bg-cyan-100 p-3 rounded-full mb-4 group-hover/card:bg-cyan-600 group-hover/card:text-white transition-colors duration-300">
                            <Clock className="w-8 h-8 text-cyan-600 group-hover/card:text-white" />
                         </div>
                         <h4 className="font-bold text-gray-800 mb-2">24/7 AMC Support</h4>
                         <p className="text-xs text-gray-600">Guaranteed uptime with engineers who know your system.</p>
                      </div>

                   </div>
                </div>
            </div>
          </section>

          {/* Conclusion Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-cyan-800 mb-4">Final Thoughts: Prepare Your HVAC Before Winter Hits</h2>
              <p className="text-gray-600 text-sm mb-4 text-justify">
                Maintaining peak HVAC performance in low temperatures requires vigilance and technical expertise. Don't wait for a system failure to occur on the coldest day of the year. Protect your investment and ensure a comfortable, efficient winter.
              </p>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="bg-gradient-to-r from-cyan-600 to-cyan-800 rounded-xl p-8 text-white shadow-lg">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Is Your Facility Winter-Protected?</h2>
              <p className="text-cyan-100 mb-8 text-sm">
                Partner with the experts who have built a 19+ years legacy in HVAC contracting. Contact AdhunikHvac Projects today for a comprehensive pre-winter inspection.
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