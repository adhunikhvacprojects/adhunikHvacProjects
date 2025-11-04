import React from 'react'; 
import Link from 'next/link';

export default function SiteMap() {
    const sitemapLinks = [
        { href: '/', text: 'Home', title: 'Go to homepage - Adhunik Hvacprojects' },
        { href: '/support-form', text: 'Contact Us', title: 'Get in touch with our HVAC experts' },
        { href: '/our-Company', text: 'About Us', title: 'Learn more about Adhunik Hvacprojects' },
        { href: '/project-catalogue', text: 'Project Catalogue', title: 'Download or view our detailed project catalogue' },
      
        // --- Projects & Clients ---
        { href: '/overview', text: 'HVAC Overview', title: 'Comprehensive overview of Adhunik Hvacprojects industrial and commercial HVAC services and specialized cooling solutions.' },
        { href: '/our-quality-service', text:'Our Quality Services', title: 'Learn about our certified quality standards, professional execution, and reliable approach to HVAC service delivery.' },
        { href: '/our-projects', text: 'Our Projects', title: 'View our successful portfolio of completed HVAC projects for industrial, commercial, and cleanroom environments across India.' },
        { href: '/our-clients', text: 'Our Clients', title: 'See why top industrial and commercial companies across India choose Adhunik Hvacprojects as their reliable HVAC partner.' },

        // --- Blog/Resource Pages ---
        { href: '/blog', text: 'Blog & Resources', title: 'Read our latest articles, industry news, and expert resources on HVAC technology and solutions.' },
        { href: '/award-winning-hvac-contractor', text: 'Award-Winning HVAC Contractor', title:'Why choose our award-winning HVAC contracting services in Delhi NCR and across India.' },
        { href: '/top-hvac-contractor-delhi-in-ncr',text: 'Top HVAC Contractor in Delhi NCR', title: 'Guide to selecting the best HVAC contractor for your projects in the Delhi NCR region.' },
        { href: '/top-hvac-contractor-in-gurugram', text: 'Top HVAC Contractor in Gurugram', title: 'Find specialized HVAC contractor services for projects located in the Gurugram (Gurgaon) area.' },
        { href: '/what-does-an-hvac-contractor-do', text: 'What Does an HVAC Contractor Do?', title: 'A comprehensive explanation of the roles, responsibilities, and scope of work for a professional HVAC contractor.' },
    ];
    
     return (
    <>

    <main className="  mx-auto px-4 py-8 mt-24">
                <h1 className=" px-4 text-2xl md:text-5xl font-bold mb-6">Sitemap</h1>
                <p className=' text-3xl py-4 underline px-4'> Pages </p>
                <div className=" ">
                    {sitemapLinks.map((link, index) => (
                        <div key={index} className=" p-4 rounded  ">
                            <Link href={link.href} title={link.title} className="text-gray-600 hover:text-cyan-600 hover:underline">
                                {link.text}
                            </Link>
                        </div>
                    ))}
                </div>
             
            </main>

    </>
  )
}