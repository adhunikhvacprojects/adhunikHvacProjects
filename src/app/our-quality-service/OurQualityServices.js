
'use client'
import Image from 'next/image';
import React from 'react'

export default function OurQualityServices() {




  const features = [

    {
      id: 1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#e8f1f5]">
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clipRule="evenodd"
          />
        </svg>
      ),
      description: 'Expert HVAC Design and Consultation',
      item2: "Our process begins with a thorough understanding of your needs. We provide expert consultation to develop customized HVAC systems that are both effective and energy-efficient, adhering to all relevant Indian standards and building codes."
    },

    {
      id: 2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#e8f1f5]">
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clipRule="evenodd"
          />
        </svg>
      ),
      description: 'Professional HVAC Installation ',
      item2: "We handle the seamless installation of a wide range of systems, including central air conditioning, VRF/VRV systems, chillers, and specialized ventilation. Our meticulous installation ensures optimal performance and longevity for your investment."
    },

    {
      id: 3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#e8f1f5]">
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clipRule="evenodd"
          />
        </svg>
      ),
      description: 'Reliable HVAC Repair and Maintenance (AMCs)',
      item2: "Our responsive repair and maintenance services, available through comprehensive Annual Maintenance Contracts (AMCs), are designed to minimize downtime and maximize the lifespan of your HVAC equipment."
    },


    {
      id: 4,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#e8f1f5]">
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clipRule="evenodd"
          />
        </svg>
      ),
      description: 'Energy-Efficient HVAC Upgrades and Retrofits',
      item2: "We help businesses transition to more energy-efficient HVAC systems, reducing energy consumption, lowering utility costs, and contributing to a sustainable future."
    },

    {
      id: 5,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#e8f1f5]">
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clipRule="evenodd"
          />
        </svg>
      ),
      description: 'Indoor Air Quality (IAQ) Solutions',
      item2: "Ensuring a healthy indoor environment is paramount. We offer a range of air quality solutions, including high-efficiency filtration systems and humidifiers/dehumidifiers, tailored to the specific challenges in Delhi NCR and beyond."
    },


     
  ];


  const tasks = [
    {
      text: "Begin work",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 me-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
      ),
    },
    // You can add more items here if you want
    {
      text: "Manage workflow for all project tasks",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 me-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
      ),
    },
    {
      text: "Issue management",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 me-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
      ),
    },
    {
      text: "Risk management",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 me-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
      ),
    },
    {
      text: "Manage change of orders",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 me-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
      ),
    },
    {
      text: "Manage project communications with clients",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 me-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
      ),
    },
    {
      text: "Verify when milestones are reached",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 me-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
      ),
    },
    {
      text: <>  <div>
        Conduct gateway reviews as required
      </div> </>,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 me-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
      ),
    },
    {
      text: "Report on project status regularly to the clients",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 me-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
      ),
    },
    { text: " Ensure the project is completed within the promised time without compromising the standardsProject Execution" }
  ];


  return (
    <>

    <section className=' pt-32 px-5 md:px-9'>
      <div className="row w-full flex  flex-col md:flex-row gap-9">
        <div className="md:w-6/12">
        <div className="">
                   <Image
                     width={500}
                     height={500}
                     loading="lazy"
                     src="/HVAC Contractor.webp"
                      alt="Consultancy Design"
                      className=" object-center w-full h-full   px-5  rounded-3xl" />
                  
                </div>
        </div>
        <div className="md:w-6/12 flex flex-col justify-center item-center">
        <div className="container mx-auto    shadow-none ">
            <h1 className=" text-lg md:text-2xl md:text-left  font-bold text-center mb-2 text-gray-800">
             A Commitment to End-to-End Excellence

            </h1>
          </div>
        <p className="text-gray-700 text-sm text-justify mb-6 font-sans">
        At Adhunik HVAC Projects, we provide a comprehensive suite of services designed to deliver performance, reliability, and peace of mind at every stage of your project. Our process is built on a 19+ year legacy of engineering excellence, ensuring a seamless journey from the initial blueprint to flawless execution and long-term support.

         </p>

           <div className="px-4 md:px-0 pb-0  max-w-7xl mx-auto  ">
       
 
          <h2 className=" text-lg md:text-2xl font-semibold text-gray-800  mb-4 text-center md:text-left">
       Design & Engineering
         </h2>

          <p className="text-gray-700 text-sm text-justify mb-4  font-sans">
        Every successful HVAC project begins with a flawless plan, and our Design & Engineering phase combines strategic planning with technical expertise to create systems that are powerful, efficient, and built to last. We work closely with clients and partners to translate project requirements into a comprehensive blueprint, ensuring every technical aspect is perfected before procurement or construction begins.
<br />
  Our capabilities in this phase include:
  </p>

          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            {[
              {
                title: 'Needs Assessment –',
                description:
                  'We start by meticulously gathering data on your facility, operational needs, and long-term goals to inform every decision.'
              },
          
              {
                title: 'Advanced System Modeling –',
                description:
                  'We utilize advanced software for precise load calculations, P&ID development, line sizing, and energy mass balance to design the optimal layout and ensure peak performance.'
              },
              
              {
                title: 'Comprehensive Documentation –',
                description:
                  'We develop all necessary technical documents, including plot plans, 2D/3D models, isometrics, and a detailed material take-off (MTO) to ensure clarity and accuracy.'
              },
              
              {
                title: 'Safety & Efficiency Focus –',
                description:
                  'We engineer for a comfortable and safe indoor environment with superior air quality, focusing on energy modeling to maximize the efficiency of your building and deliver cost-effective solutions.'
              },
          
            
            ].map((item, index) => (
              <li key={index} className=" text-sm font-thin text-justify font-sans">
                <span className="font-semibold">{item.title}</span>&nbsp;{item.description}
              </li>
            ))}
          </ul>
          
          </div>
        </div>


      </div>
    </section>

      <section className=' pt-4 md:pt-0 md:px-9'>
        <div className="px-4 pb-0 md:py-12 max-w-7xl mx-auto  ">
       
 
          <h2 className="text-2xl font-semibold text-gray-800 md:mt-10 mb-4 text-center md:text-left">
      Project Execution 
         </h2>

          <p className="text-gray-700 text-sm text-justify mb-4  font-sans">
     Our project execution is defined by precision, safety, and an unwavering commitment to timelines. We manage every phase of the installation with meticulous attention to detail, ensuring a seamless workflow from start to finish. All projects are executed under strict adherence to NBC, CPWD, and NABH guidelines, while following ISHRAE, ASHRAE, and ISO standards to guarantee the highest levels of safety and performance.
    <br />
                        This phase includes:
  </p>
                        

          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            {[
              {
                title: 'Professional Oversight –',
                description:
                  'Our dedicated engineers and on-site managers oversee every task, ensuring milestones are met on schedule and the project stays on track.'
              },
              {
                title: 'Proactive Management –',
                description:
                  'We proactively manage any issues that arise, ensuring quick adjustments and clear communication to minimize any disruption.'
              },
            
              {
                title: 'Transparent Communication –',
                description:
                  'We believe in complete transparency and provide regular project status reports to keep you informed and confident at every stage.'
              },

              {
                title: 'Quality Assurance –',
                description:
                  'We are committed to completing every project within the promised time, without ever compromising on our award-winning quality standards.'
              },
            
            ].map((item, index) => (
              <li key={index} className="  text-sm text-justify font-sans">
                <span className="font-semibold">
                {item.title}
                </span>&nbsp;
                {item.description}
              </li>
            ))}
          </ul>


          <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4 text-center md:text-left">
         AMC & Ongoing Support
 </h2>
          <p className=" text-sm text-gray-700 text-justify mb-4 font-sans">
        Our commitment to our clients extends far beyond project completion. We believe in building long-term partnerships to ensure your system operates at peak performance for its entire lifespan. Our comprehensive Annual Maintenance Contracts (AMCs) and ongoing support services are designed to protect your investment, maximize efficiency, and provide you with complete peace of mind.
            <br />
            Our after-sales support includes:

          </p>
          


          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            {[
              {
                title: 'Proactive Maintenance –',
                description: 
                  'We provide regularly scheduled inspections and preventative servicing to identify and address potential issues before they can lead to costly downtime.',
              },

              {
                title: 'Dedicated Technical Support –',
                description: 
                  ' Our expert service team is always available to provide timely repairs, technical assistance, and operational guidance whenever you need it.'

',
              },

              {
                title: 'Performance Optimization –',
                description: 
                  'We continuously monitor and tune your system to ensure it operates at maximum energy efficiency, helping to reduce your long-term operational costs.',
              },

              {
                title: 'System Longevity –',
                description: 'Through meticulous care and professional support, we aim to maximize the operational lifespan of your HVAC equipment, ensuring you get the most out of your investment.',
              },
           
            ].map((item, index) => (
              <li key={index} className=" text-sm text-justify font-sans">
                <span className="font-semibold  ">{item.title}</span> {item.description}
              </li>
            ))}
          </ul>



         
        

 
         
          <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4 text-center md:text-left">
         Technologies & Systems We Master

 </h2>
 
          <p className="text-gray-700 text-justify mb-4 font-sans">
      Our engineering team possesses deep expertise across a wide range of modern HVAC technologies and systems. We have a proven track record of successfully installing and commissioning:


          </p>


          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            {[
              {
                title: 'Variable Refrigerant Flow (VRF/VRV) Systems',
              },

              {
                title: 'Chiller Plants (Water-Cooled & Air-Cooled)',
              },

              {
                title: 'Precision Air Conditioning (PAC) for Data Centers',
               },

              {
                title: 'Air Handling Units (AHUs) & Fan Coil Units (FCUs)',
             },
           
              {
                title: 'Ductable & Packaged Air Conditioners',
             },

              {
                title: 'Industrial Ventilation & Exhaust Systems',
             },
           
            ].map((item, index) => (
              <li key={index} className=" text-sm text-justify font-sans">
                <span className="font-semibold  ">{item.title}</span> {item.description}
              </li>
            ))}
          </ul>



         
         
          <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4 text-center md:text-left">
        Specialized Solutions for Demanding Industries

 </h2>

          <p className="text-gray-700 text-justify mb-4 font-sans">

We recognize that every industry has its unique set of challenges. We engineer tailored solutions to meet the strict compliance and operational needs of specialized sectors, including

          </p>


          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            {[
              {
                title: 'Pharmaceutical & Healthcare -',
                description:"Designing and executing compliant HVAC systems for Clean Rooms, OTs, and laboratories where air quality is critical.",
              },
              {
                title: 'Manufacturing & Industrial -',
                description:"Implementing robust ventilation and process cooling to manage high heat loads and ensure worker safety.",
              },
              {
                title: 'IT & Data Centers -',
                description:"Delivering redundant, mission-critical cooling to protect sensitive digital infrastructure.",
              },

            ].map((item, index) => (
              <li key={index} className=" text-sm text-justify font-sans">
                <span className="font-semibold  ">{item.title}</span> {item.description}
              </li>
            ))}
          </ul>




         
          <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4 text-center md:text-left">
       Our Commitment to Quality & Safety

 </h2>

          <p className="text-gray-700  text-sm text-justify mb-4 font-sans">

At Adhunik HVAC Projects, quality and safety are not just procedures; they are the foundation of our culture. Every project is meticulously planned and executed to ensure the well-being of our team, our clients' staff, and the public. Our adherence to the highest ISO, ISHRAE, and ASHRAE standards is a testament to our unwavering commitment to delivering not just a successful project, but a safe and reliable long-term asset.

          </p>


        
          <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4 text-center md:text-left">
      Your Trusted HVAC Contractor in Delhi NCR & Across India

 </h2>

          <p className="text-gray-700  text-sm text-justify mb-4 font-sans">

At Adhunik HVAC Projects, we provide a comprehensive suite of services designed to deliver performance, reliability, and peace of mind at every stage of your project. Our process is built on a 19+ year legacy of engineering excellence, ensuring a seamless journey from the initial blueprint to flawless execution and long-term support for commercial, industrial, and residential projects of all scales.

          </p>


        

         



        </div>
      </section>

      <div className=" container mx-auto w-auto   p-7   rounded-xl">
            <div className="flex items-center justify-center h-full">

              <div className="w-full flex-col justify-center lg:items-start items-center gap-3 flex">
                <div className="inline-flex items-center justify-center w-full mx-auto my-7 md:mb-0 relative">
                  <hr className="w-[90%] h-px my-8 bg-gray-300 border-0" />
                  <h2 className="absolute px-2 md:px-3 text-gray-700 -translate-x-1/2 bg-white left-1/2 text-center text-[20px] md:text-2xl capitalize font-semibold font-sans">
                  Our Quality Services
                  </h2>
                </div>



            
      

              </div>

            </div>
          </div>

      <section>
        <div className="row  ">
          <section className="about-area md:py-16 ">
            <div className="container mx-auto md:px-10">
              <div className="flex  flex-col-reverse  justify-around gap-5  lg:flex-row ">

                <div className="   lg:w-1/2 w-full mb-8 lg:mb-0">
                  <div className="about-content">
                    <div className="section-title px-4 text-justify ">
                      <h2 className="text-3xl text-gray-800 font-semibold mb-4  text-center md:text-left ">Design & Engineering</h2>
                      <p className="mb-4 font-sans font-normal text-gray-700 ">
                        <strong> ADHUNIK HVAC PROJECTS </strong>  provides HVAC solutions (Engineering, procurement, and execution) to clients of various industries, executing turnkey HVAC projects all over India.
                      </p>
                      <p className="mb-4 font-sans font-normal text-gray-700">
                        Our team of professional engineers collects the necessary data through deep interaction with the owners and users to crystallize the thinking of all concerned. A Design concept report is prepared to summarize requirements, proposed scheme, basis of design, and budgetary cost estimate, for approval of owners and users.

                      </p>
                      <p className="mb-4 font-sans font-normal text-gray-700">
                        At <strong>ADHUNIK HVAC PROJECTS</strong>  our HVAC engineer takes the core responsibility to prepare the design/layout of the heating and cooling systems along with the control systems while keeping in mind the respective standards to be followed.
                      </p>

                      <button
                        className="rounded-md bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 mt-5"
                        onClick={() => {
                          window.location.href = 'mailto:sales@adhunikpowertech.com?subject=Enquiry%20Now&body=Hello, I would like to enquire about your services.';
                        }}
                      >
                        Enquiry Now
                      </button>

                    </div>



                  </div>
                </div>

                <div className="lg:w-1/2 w-full pb-5">
                  <div className="about-company-1 rounded-xl  ">
                    <img src="/cd.jpg " loading="lazy" alt="Consultancy Design" height={300}
                  width={500}
                      className=" object-center   px-5 " />
                  </div>
                </div>

              </div>


            </div>


          </section>

          <section>
            <div className="bg-[#283e56] p-4 relative">
              <div className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20">
                <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
                <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
              </div>
              <div className="max-w-7xl mx-auto  py-4 md:px-12 xl:px-6">

                <div className="  w-full mt-2 text-gray-100 flex items-center flex-col">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-secondary">
                    {/* SVG content */}
                  </svg>
                  <h2 className=" w-full text-2xl font-bold text-white  md:text-3xl "> 
                  HVAC Project Planning and Execution Steps 
                  </h2>
                  <p className=' text-sm py-2'>We understand that every project is unique. Our skilled team of engineers and technicians offers a comprehensive range of HVAC services, ensuring optimal comfort, efficiency, and air quality tailored to your specific environment.
</p>
                </div>

                <div className="mt-5 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:divide-y-0 xl:grid-cols-3 ">

                  {features.map((feature) => (
                    <div key={feature.id} className=" group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                      <div className="relative space-y-8 py-12 p-8 text-[#eff0f4]">
                        <div className="space-y-1 text-[#eff0f4] ">
                          <ul className="list-none flex flex-row">
                            <div className="h-full  w-fit pe-3 ">
                            {feature.icon}
                            </div>
                            <li className="text-[#F1F2FD] font-bold  font-sans">{feature.description}</li>

                          </ul>
                        </div>

                        <div className=" text-sm pt-0 mt-0    font-sans font-thin ">
                          {feature.item2}
                        </div>

                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>


   


          <section className="about-area pt-16 ">
            <div className="container mx-auto md:px-10">
              <div className="flex flex-wrap ">

                <div className="lg:w-1/2 w-full">
                  <div className="about-company-1">
                    <img src=" dd.jpg "  height={300}
                  width={500}
                  loading="lazy" alt="Design & Engineering" className="w-full h-auto rounded-lg px-5" />
                  </div>
                </div>

                <div className="   lg:w-1/2 w-full mb-8 lg:mb-0 mt-4">
                  <div className="about-content">

                    <div className="section-title px-4">
                      <h2 className="text-3xl font-semibold mb-4  text-center md:text-start"> Detailed Engineering </h2>
                      <p className="mb-4  text-justify font-normal font-sans " >

                        We have over    <strong> 19+ years</strong> of experience in the HVAC Industry. Our focus while system designing & selection is to provide energy-efficient & cost-effective cooling solutions with minimum maintenance that is for large <strong> industrial, institutional, commercial </strong>  as well as residential premises.

                      </p>

                      <p className="mb-4   text-justify font-sans font-normal">
                        In <strong>  Detailed Engineering</strong> , we consider creating a comfortable indoor environment along with improved air quality. By considering this process of work we create a balanced environment that is convenient and comfortable to work, live, and play in and out. Not only this but we also consider safety as well as the energy efficiency of the building.
                      </p>

                      <p className="mb-4  text-justify font-sans font-normal">
                        Our engineers are Highly skilled and experienced with in-depth knowledge of <strong> HVAC systems </strong>    having a detailed understanding of building standards and regulations.
                      </p>
                    </div>




                  </div>
                </div>



              </div>


              <div className="container mx-auto px-4">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="about-content text-gray-800 md:pt-5">
                      <p className="mb-4  text-justify font-sans font-normal ">
                        In the <strong>detailed engineering</strong> phase, we ensure that the design is developed to a point where
                        the technical input for all procurement and construction tendering is defined in sufficient
                        detail.
                      </p>

                      <p className="mb-4  text-justify font-sans font-normal">
                        We offer services of basic and extended engineering like the development of <strong>PFD, P&amp;ID, Line
                          sizing, Energy mass balance, Utility consumption summary, Electrical load list, PDS, IPDS,</strong>
                        and more.
                      </p>

                      <p className="mb-4  text-justify font-sans font-normal">
                        Our <strong>Front End engineering design services (FEED)</strong> and basic engineering cover all aspects of
                        the engineering process, including plot <strong>plans, 2D/3D models, isometrics, material take-off
                          (MTO),</strong> and more required to move from the initial planning stage to procurement and
                        construction.
                      </p>

                      <p className='font-sans font-normal  text-justify'>
                        Our team carries out design and analysis to suggest improvements for various types
                        of equipment, such as <strong>storage tanks, pressure vessels, towers, shell and tube heat
                          exchangers, amount of budget, type of material, etc.</strong>
                      </p>

                      <div className="row flex  justify-center  md:justify-self-start ">
                        <button
                          className="rounded-md bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 mt-5"
                          onClick={() => {
                            window.location.href = 'mailto:sales@adhunikpowertech.com?subject=Enquiry%20Now&body=Hello, I would like to enquire about your services.';
                          }}
                        >
                          Enquiry Now
                        </button>
                      </div>

                    </div>


                  </div>
                </div>



              </div>

            </div>


          </section>

          <div className=" container mx-auto w-auto  p-7   rounded-xl">
            <div className="flex items-center justify-center h-full">


            </div>
          </div>


 <section className=' md:px-9'>
        <div className="px-4 pb-0 md:py-12 max-w-7xl mx-auto  ">
       

<div className="continaer">
     <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4 text-center md:text-left">
     Specialized Expertise for Demanding Industries

 </h2>

          <p className="text-gray-700 text-justify mb-4 font-sans">

We possess the expertise to handle the specialized requirements of diverse facilities.

          </p>


          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            {[
              {
                title: 'Commercial HVAC Solutions -',
                description:"We cater to the complex HVAC demands of commercial spaces, including offices, retail outlets, hotels, hospitals, and educational institutions. Our solutions are designed for comfort, efficiency, and scalability.",
              },
              {
                title: 'Industrial HVAC Expertise -',
                description:" We handle the specialized HVAC requirements of industrial facilities, including process cooling, ventilation for manufacturing units, and precise temperature and humidity control for sensitive environments like clean rooms and data centers.",
              },
            

            ].map((item, index) => (
              <li key={index} className=" text-sm text-justify font-sans">
                <span className="font-semibold  ">{item.title}</span> {item.description}
              </li>
            ))}
          </ul>

</div>

<div className="continaer">
     <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4 text-center md:text-left">
    Why Choose Adhunik HVAC Projects ?

 </h2>

          <p className="text-gray-700 text-justify mb-4 font-sans">

Selecting the right HVAC contractor is a critical decision. Here's why we are the preferred choice for clients across Delhi NCR and India :

          </p>


          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            {[
              {
                title: 'Extensive Experience -',
                description:" With a 19+ year legacy in the HVAC industry, we possess the knowledge to handle projects of any complexity.",
              },
              {
                title: 'Commitment to Quality -',
                description:" We are dedicated to delivering high-quality workmanship and using reliable, energy-efficient equipment.",
              },
            
              {
                title: 'Expert Team -',
                description:"Our team of qualified engineers and certified technicians are highly skilled and committed to exceptional service.",
              },
            
              {
                title: 'Customer-Centric Approach -',
                description:"We prioritize understanding your unique needs and providing tailored solutions that exceed your expectations.",
              },

              {
                title: 'Pan-India Reach -',
                description:"While based in Delhi NCR, we have the capability and resources to serve clients across India.",
              },
            
              {
                title: 'Adherence to Standards -',
                description:"We meticulously follow all relevant Indian standards, building codes (ISHRAE, ASHRAE, NBC), and safety regulations.",
              },
            
              {
                title: 'Comprehensive Support -',
                description:"We are your dedicated HVAC partner from initial consultation to post-installation support and maintenance.",
              },
            

            ].map((item, index) => (
              <li key={index} className=" text-sm text-justify font-sans">
                <span className="font-semibold  ">{item.title}</span> {item.description}
              </li>
            ))}
          </ul>

</div>


</div>
</section>

          <section className="about-area pt-10 pb-10 bg-gray-100 relative">
            <div className="container mx-auto px-4">
              <div className="row flex flex-row  flex-wrap-reverse">
                {/* Left Column */}
                <div className="col-lg-7 md:w-7/12 pt-10 ">
                  <div className="about-content space-y-6">
                    <div className="section-title  text-justify  md:px-10">
                      <h2 className="text-2xl font-bold mb-4 ">Project Execution</h2>
                      <p className=' font-normal font-sans '>
                        We execute all the projects under <strong>NBC, CPWD &amp; NABH guidelines . We also follow ISHRAE, ASHRAE &amp; ISO Standards. </strong>
                        We are committed to safety, measurement &amp; precautions during the execution of the work.


                      </p>
                      <p className='font-normal font-sans'>
                        Our team of <strong>professional engineers</strong> oversees that tasks are completed on time, while workflow continues smoothly.
                        Project monitoring and control are significant in this phase, as issues will always arise and require quick adjustments as the project progresses.


                      </p>
                      <br />
                      <p className=' pb-2'><strong>Project Execution Phase Activities include:</strong></p>

                      <ul className="space-y-2 text-left list-disc list-inside">
                        {tasks.map((task, index) => (
                          <li key={index} className="flex items-center">
                            {task.icon && task.icon} {/* Render icon if available */}
                            {task.text}
                          </li>
                        ))}
                      </ul>
                      <div className="row flex  justify-center  md:justify-self-start ">
                        <button
                          className="rounded-md bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 mt-5"
                          onClick={() => {
                            window.location.href = 'mailto:sales@adhunikpowertech.com?subject=Enquiry%20Now&body=Hello, I would like to enquire about your services.';
                          }}
                        >
                          Enquiry Now
                        </button>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="col-lg-5 md:w-5/12 col-md-12 mt-6 lg:mt-0">
                  <div className="about-company-1">
                    <img src="/pe.jpg" loading="lazy"  height={300}
                  width={500} alt="Project Execution" className="rounded-lg shadow-lg" />
                  </div>
                </div>

              </div>


              <div className="row mt-5">


                <div className="col-lg-12">
                  <div className="about-content">
                    <p className=' font-normal  text-sm py-4  text-justify font-sans'>



                      We at <strong>ADHUNIK HVAC PROJECTS</strong> are committed to achieving customer satisfaction by timely delivery of <strong>HVAC solutions</strong> and
                      services at the most competitive prices, conforming to high standards through continuous improvement with an eye on <strong>Safety, Wastage, and Environmental Care</strong>. Whether you have a project in Delhi NCR or anywhere in India, our team is ready to assist you. Contact us today for a consultation, a quote, or to discuss your specific requirements.
                    </p>

                    <h2 className=' text-2xl pt-8 font-semibold mb-4  text-center md:text-left'>
                    Serving Delhi NCR and Beyond
  
                    </h2>

                    <p className=' font-normal  text-sm pb-4  text-justify font-sans'>
                      Our primary service areas include Noida, Gurugram, Faridabad, Ghaziabad, Sonipat, Panipat, Rohtak, Rewari, Palwal, Bhiwadi, Meerut, Manesar, Dharuhera, Muzaffarnagar, Jaipur, and Chandigarh. However, our commitment to providing quality HVAC solutions extends across India. Contact us to discuss your project, regardless of your location.

                    </p>
                  </div>
                </div>


                <div className=" container mx-auto w-auto  p-7   rounded-xl">
            <div className="flex items-center justify-center h-full">

              <div className="w-full flex-col justify-center lg:items-start items-center gap-3 flex">
             



              
                <a
                  href="tel:8287885885"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "tel:8287885885";
                  }}
                  className="self-center rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-blue-600 active:shadow-none shadow-lg bg-gradient-to-tr from-blue-600 to-blue-500 border-blue-700 text-white"
                >
                  <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-52 group-hover:h-32 opacity-10"></span>
                  <span className="relative">Contact Our team</span>
                </a>

              </div>

            </div>
          </div>




              </div>
            </div>



          </section>




        </div>
      </section>

    </>
  )
}






