
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
      description: ' Estimating the Heating and Cooling Requisites ',
      item2: " Our engineer would consider and prepare a plan that shares the information on the overall load calculation as to how much heating and cooling capacity would be required of various equipment. "
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
      description: ' Evaluate and Delineate Plans ',
      item2: "Before the start-up of any new project our HVAC design engineers ensure to understand the overall layout of the project which is with regards to the planning, schematics, and blueprints."
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
      description: 'Anticipate Oxygenating Requisites ',
      item2: " We will always be cordial and modest, respecting the rights and needs of others to strengthen healthy social relationships and improve the quality of life in our communities. "
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
      description: 'Determine Budget Expenses ',
      item2: "Post accreditation from the client on the system design and specification we provide valuable support on the budget estimation of the project by evaluating proper technical specification and commercial cost."
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
      description: ' Coordinate with Project Teams  ',
      item2: "The team of engineers coordinates and cooperates with the team of architects and contractors who are part of the project when the work is assigned to design heating and cooling systems."
    },
    {
      id: 6,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#e8f1f5]">
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clipRule="evenodd"
          />
        </svg>
      ),
      description: ' Adhere to All Building Codes  ',
      item2: "We follow all the respective building codes and practices that are defined as well as mandatory for the successful implementation of HVAC services in the projects."
    },
    // Add more items as needed
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
        <div className="container mx-auto    shadow-none p-2">
            <h1 className="text-3xl  md:text-4xl font-bold text-center mb-8 text-gray-800">
              Your Trusted HVAC Contractor in Delhi NCR & Across India – ADHUNIK HVAC PROJECTS
            </h1>
          </div>
        <p className="text-gray-700 text-justify mb-6 font-sans">
            Welcome to ADHUNIK HVAC PROJECTS, your reliable partner for comprehensive HVAC (Heating, Ventilation, and Air Conditioning) solutions. We serve the diverse needs of clients across Delhi NCR (including Noida, Gurugram, Faridabad, and Ghaziabad) and extend our expertise throughout India. With a strong foundation built on years of experience and a commitment to excellence, we deliver expert, energy-efficient HVAC services tailored to commercial, industrial, and residential projects of all scales.
          </p>
        </div>


      </div>
    </section>

      <section className=' md:px-9'>
        <div className="px-4 pb-0 md:py-12 max-w-7xl mx-auto  ">
       


       

          <h2 className="text-2xl font-semibold text-gray-800 md:mt-10 mb-4 text-center md:text-left">
            Comprehensive HVAC Services Tailored to Your Needs
          </h2>
          <p className="text-gray-700 text-justify mb-4  font-sans">
            At ADHUNIK HVAC PROJECTS, we understand that every project has unique requirements. Our skilled team of engineers and technicians provides a complete spectrum of HVAC services, ensuring optimal comfort, efficiency, and air quality for your specific environment.
          </p>

          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            {[
              {
                title: 'Expert HVAC Design and Consultation –',
                description:
                  'Our process begins with a thorough understanding of your needs and project specifications. We provide expert consultation and design services, developing customized HVAC systems that are both effective and energy-efficient, adhering to relevant Indian standards and building codes.'
              },
              {
                title: 'Professional HVAC Installation –',
                description:
                  'We handle the seamless installation of a wide range of HVAC systems, including central air conditioning, VRF/VRV systems, chillers, heat pumps, ventilation systems, and more. Our meticulous installation ensures optimal performance and longevity of your investment.'
              },
              {
                title: 'Reliable HVAC Repair and Maintenance –',
                description:
                  'Our responsive repair and maintenance services are designed to minimize downtime and maximize the lifespan of your HVAC equipment. We offer comprehensive maintenance plans and are available for prompt and efficient repairs when you need them most, across Delhi NCR and India.'
              },
              {
                title: 'Commercial HVAC Solutions –',
                description:
                  'We cater to the complex HVAC demands of commercial spaces, including offices, retail outlets, hotels, hospitals, educational institutions, and more. Our solutions are designed for comfort, efficiency, and scalability'
              },
              {
                title: 'Industrial HVAC Expertise –',
                description:
                  'ADHUNIK HVAC PROJECTS possesses the expertise to handle the specialized HVAC requirements of industrial facilities, including process cooling, ventilation for manufacturing units, and precise temperature and humidity control for sensitive environments.'
              },
              {
                title: 'Energy-Efficient HVAC Upgrades and Retrofits –',
                description:
                  'We help businesses and homeowners transition to more energy-efficient HVAC systems, reducing energy consumption, lowering utility costs, and contributing to a sustainable future.'
              },
              {
                title: 'Indoor Air Quality Solutions –',
                description:
                  'Ensuring healthy indoor environments is paramount. We offer a range of air quality solutions, including air purifiers, filtration systems, humidifiers, and dehumidifiers, tailored to the specific air quality challenges in Delhi NCR and beyond.'
              },
              {
                title: 'Ventilation System Design and Installation –',
                description:
                  'Proper ventilation is crucial for air quality and comfort. We design and install effective ventilation systems for various applications, ensuring optimal airflow and the removal of pollutants.'
              }
            ].map((item, index) => (
              <li key={index} className="text-justify font-sans">
                <span className="font-semibold">{item.title}</span>&nbsp;{item.description}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4 text-center md:text-left">
            Why Choose ADHUNIK HVAC PROJECTS as Your HVAC Contractor ?
          </h2>
          <p className="text-gray-700 text-justify mb-4 font-sans">Selecting the right HVAC contractor is a critical decision. Here's why ADHUNIK HVAC PROJECTS is the preferred choice for clients across Delhi NCR and India:
          </p>


          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            {[
              {
                title: 'Extensive Experience –',
                description: 'With years of experience in the HVAC industry, we possess the knowledge and expertise to handle projects of any complexity',
              },
              {
                title: 'Commitment to Quality –',
                description: 'We are dedicated to delivering high-quality workmanship and using reliable, energy-efficient equipment from leading manufacturers',
              },
              {
                title: 'Expert Team –',
                description: 'Our team of qualified engineers and certified technicians are highly skilled and committed to providing exceptional service',
              },
              {
                title: 'Customer-Centric Approach –',
                description: 'We prioritize understanding your unique needs and providing tailored solutions that exceed your expectations',
              },
              {
                title: 'Pan-India Reach –',
                description: 'While our base is in Delhi NCR, we have the capability and resources to serve clients across India',
              },
              {
                title: 'Focus on Energy Efficiency –',
                description: 'We are committed to providing and recommending energy-efficient HVAC solutions that save you money and reduce your environmental impact',
              },
              {
                title: 'Adherence to Standards –',
                description: 'We adhere to all relevant Indian standards, building codes, and safety regulations',
              },
              {
                title: 'Transparent Communication –',
                description: 'We believe in clear and open communication throughout every stage of your project',
              },
              {
                title: 'Comprehensive Support –',
                description: 'We are your dedicated HVAC partner from initial consultation to post-installation support.',
              },
            ].map((item, index) => (
              <li key={index} className="text-justify font-sans">
                <span className="font-semibold  ">{item.title}</span> {item.description}
              </li>
            ))}
          </ul>



          <h2 className="text-2xl font-semibold text-center md:text-left  text-gray-800 mt-10 mb-4">
            Serving Delhi NCR and Beyond
          </h2>


          <p className="text-gray-700 text-justify mb-6 font-sans">
            Our primary service areas in Delhi NCR include Noida, Gurugram, Faridabad, and Ghaziabad. We also serve Sonipat, Panipat, Rohtak, Rewari, Palwal, Bhiwadi, Meerut, Neemrana, Tapukara, Bawal, Manesar, Dharuhera, Muzaffarnagar, Jaipur, and Chandigarh. However, our commitment to providing quality HVAC solutions extends across India. Contact us to discuss your project, regardless of your location.
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
                      <h2 className="text-3xl text-gray-800 font-semibold mb-4  text-center md:text-left ">Consultancy & Design</h2>
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
                <div className="  w-full mt-2 text-gray-100 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-secondary">
                    {/* SVG content */}
                  </svg>
                  <h2 className=" w-full text-2xl font-bold text-white  md:text-4xl ps-3"> HVAC Project Planning and Execution Steps </h2>
                </div>
                <div className="mt-5 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:divide-y-0 xl:grid-cols-3">
                  {features.map((feature) => (
                    <div key={feature.id} className=" group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                      <div className="relative space-y-8 py-12 p-8 text-[#eff0f4]">
                        <div className="space-y-1 text-[#eff0f4] ">
                          <ul className="list-none flex flex-row">
                            <div className="h-full w-fit pe-3 ">{feature.icon}</div>
                            <li className="text-[#F1F2FD]   font-sans font-normal  ">{feature.description}</li>

                          </ul>
                        </div>

                        <div className=" pt-0 mt-0    font-sans font-thin ">
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
                  loading="lazy" alt="Consultancy Design" className="w-full h-auto rounded-lg px-5" />
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
                    <p className=' font-normal   text-justify font-sans'>



                      We at <strong>ADHUNIK HVAC PROJECTS</strong> are committed to achieving customer satisfaction by timely delivery of <strong>HVAC solutions</strong> and
                      services at the most competitive prices, conforming to high standards through continuous improvement with an eye on <strong>Safety, Wastage, and Environmental Care</strong>. Whether you have a project in Delhi NCR or anywhere in India, our team is ready to assist you. Contact us today for a consultation, a quote, or to discuss your specific requirements.
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






