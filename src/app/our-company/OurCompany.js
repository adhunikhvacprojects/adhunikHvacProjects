'use client';

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';


export default function OurCompany() {

  const [activePage, setActivePage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMyslideInView, setIsMyslideInView] = useState(false);
  const [isPageScrollingAllowed, setIsPageScrollingAllowed] = useState(true);

  const handleWheel = (e) => {
    if (!isMyslideInView || isScrolling) return;

     
    if (e.deltaY > 0 && activePage < pages.length - 1) {
       
      setIsScrolling(true);
      setActivePage((prev) => Math.min(prev + 1, pages.length - 1));  
    } else if (e.deltaY < 0 && activePage > 0) {
      
      setIsScrolling(true);
      setActivePage((prev) => Math.max(prev - 1, 0));  
    } else if (e.deltaY > 0 && activePage === pages.length - 1) {
       
      setIsScrolling(false);
      setIsPageScrollingAllowed(true);
      setIsMyslideInView(false);  
    } else if (e.deltaY < 0 && activePage === 0) {
      
      setIsPageScrollingAllowed(false);
      setIsMyslideInView(true);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsScrolling(false), 800);
    return () => clearTimeout(timeout);
  }, [activePage]);

  useEffect(() => {
    document.body.style.overflow = isPageScrollingAllowed ? "auto" : "hidden";
    return () => (document.body.style.overflow = "auto");
  }, [isPageScrollingAllowed]);

  useEffect(() => {
    const slideElement = document.getElementById("myslide");

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsMyslideInView(entry.isIntersecting);
        setIsPageScrollingAllowed(!entry.isIntersecting);
      },
      { threshold: 1.0 }
    );

    if (slideElement) observer.observe(slideElement);

    return () => {
      if (slideElement) observer.unobserve(slideElement);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activePage, isMyslideInView, isScrolling]);

  const pages = [

    {
      id: 0,
      year: "Overview",

      bgImage:
        "https://res.cloudinary.com/dxenuee4n/image/upload/v1757312695/pic2_nqufnr.webp",
      content: (
        <div className="z-10 text-center">
          <div className="row">
            <div className="col py-12 relative md:static  right-10 md:right-0  justify-center items-center flex flex-col">

            
              <p className="text-md w-[60%]  text-justify font-sans font-thin pt-7 italic md:text-3xl  pb-3">
              Our Story : Engineering Excellence, Redefined.
              </p>

              <p className="text-sm w-[60%]  font-semibold  text-justify font-sans  ">
            Every great company has a story. Ours is one of legacy, evolution, and a relentless pursuit of perfection. It’s a story that begins not with a new name, but with nearly two decades of proven engineering experience.
 </p>

     <p className="text-md w-[60%]  text-justify font-sans font-thin pt-7 italic md:text-3xl  pb-3">
           Chapter 1 : The Foundation (2005 - 2024)
  </p>
              
     <p className="text-sm w-[60%]  text-justify font-sans font-thin  italic  ">
          Building a Legacy of Trust

  </p>
              
              <p className=" text-[12px] md:text-[12xl] w-[60%] text-justify font-sans font-thin pt-4" >
          Our journey began in 2005 as the heart of Adhunik Powertech's HVAC division. For 19 years, we were the minds and hands behind more than 600 complex projects across India. We built a reputation not just for installing systems, but for engineering solutions—tackling the toughest challenges in commercial, industrial, and specialized sectors. We became the trusted team known for our meticulous standards and unwavering commitment to quality.

 </p>

              <p className=" relative  top-16 font-sans font-thin">
                Scroll down to learn more about us.
              </p>

              <div className="row">
                <svg className="arrows">
                  <path className="a1" d="M0 0 L30 32 L60 0"></path>
                  <path className="a2" d="M0 20 L30 52 L60 20"></path>
                  <path className="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
              </div>

            </div>
          </div>
        </div>
      ),
    },


    {

      id: 1,
      year: '2005',

      bgImage: '/blog/2005.webp',
      content: (

        <div className="z-10 text-center">

          <div className="row">
            <div className="col relative md:static  right-5 md:right-0 py-12 justify-center items-center flex flex-col">
       

     <p className="text-md w-[60%]  text-justify font-sans font-thin pt-7 italic md:text-3xl  pb-3">
         Chapter 2: The Turning Point (2025)
  </p>
              
     <p className="text-sm w-[60%] text-justify font-sans font-thin italic ">
         A Legacy Recognized
  </p>
              
              <p className=" text-[12px] md:text-[12xl] w-[60%] text-justify font-sans font-thin pt-4" >
     A pivotal moment arrived in 2025. Our team's dedication and hard work were recognized on a national stage with the prestigious India Business Award for "Best Quality Standards and Services in the HVAC Industry."

 </p>
              <p className=" text-[12px] md:text-[12xl] w-[60%] text-justify font-sans font-thin pt-4" >
   This award wasn't just an accolade; it was a confirmation of our core belief: that true expertise deserves a focused path. It was the catalyst that inspired us to take a bold, strategic step forward.

 </p>

 
              <div className="row">
                <svg className="arrows">
                  <path className="a1" d="M0 0 L30 32 L60 0"></path>
                  <path className="a2" d="M0 20 L30 52 L60 20"></path>
                  <path className="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
              </div>
            </div>
          </div>

        </div>
      ),
    },

 
    {
      id: 2,
      year: '2014',

      bgImage: '/blog/2014.webp',
      content: (

        <div className="z-10 text-center">

          <div className="row">
            <div className="col relative md:static  right-5 md:right-0 py-12 justify-center items-center flex flex-col">
       

     <p className="text-md w-[60%]  text-justify font-sans font-thin pt-7 italic md:text-3xl  pb-3">
        Chapter 3: The Evolution
  </p>
              
     <p className="text-sm w-[60%] text-justify font-sans font-thin italic ">
        Forging a Specialized Future
  </p>
              
              <p className=" text-[12px] md:text-[12xl] w-[60%] text-justify font-sans font-thin pt-4" >
   We asked ourselves: "How can we offer our clients even greater value, agility, and specialized expertise?" The answer was to evolve.

 </p>
              <p className=" text-[12px] md:text-[12xl] w-[60%] text-justify font-sans font-thin pt-4" >
 The award-winning HVAC division was strategically restructured to become Adhunik HVAC Projects, a new, purpose-built company under the banner of Adhunik Guds & Services Private Limited. This was not a separation, but a concentration of our strengths—channeling two decades of experience into a single, powerful entity dedicated exclusively to mastering the art and science of HVAC.

 </p>


              




              <div className="row">
                <svg className="arrows">
                  <path className="a1" d="M0 0 L30 32 L60 0"></path>
                  <path className="a2" d="M0 20 L30 52 L60 20"></path>
                  <path className="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
              </div>
            </div>
          </div>

        </div>
      ),
    },

    {
      id: 3,

      year: '2016',

      bgImage: '/blog/2016.webp',

      content: (

        <div className="z-10 text-center">

          <div className="row">
            <div className="col relative md:static  right-5 md:right-0 py-12 justify-center items-center flex flex-col">
       

     <p className="text-md w-[60%]  text-justify font-sans font-thin pt-7 italic md:text-3xl  pb-3">
       Chapter 4 : Our Integrated Strength Today

  </p>
              
     <p className="text-sm w-[60%] text-justify font-sans font-thin italic ">
     The Adhunik Ecosystem
  </p>
              
              <p className=" text-[12px] md:text-[12xl] w-[60%] text-justify font-sans font-thin pt-4" >

 Today, Adhunik HVAC Projects operates as a center of excellence within a unique and powerful ecosystem. This structure is our promise of quality and seamless execution to you :

 </p>
             
         <ul className=" text-md  w-[60%] text-justify font-sans font-thin pt-4">

            <li className="">
         <strong className=" font-bold text-orange-500">
Focused Expertise : </strong>
          Our team lives and breathes HVAC. This singular focus ensures you receive the most innovative and effective solutions.
            </li>

            <li className="">
         <strong className=" font-bold text-orange-500">
 Integrated Solutions :  </strong>
        As part of a larger family, we collaborate seamlessly with our sister divisions—Adhunik FireXpert (fire safety) and Adhunik Decodive (interiors)—to offer truly comprehensive, single-point solutions for your projects.

            </li>


            <li className="">
         <strong className=" font-bold text-orange-500">
  Unmatched Quality Control : </strong>
     Our strategic partnership with our dedicated manufacturing arm, Om Cooling System (OCS), means we control the quality of our core components from the factory floor to your project site.

            </li>


         </ul> 


              




              <div className="row">
                <svg className="arrows">
                  <path className="a1" d="M0 0 L30 32 L60 0"></path>
                  <path className="a2" d="M0 20 L30 52 L60 20"></path>
                  <path className="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
              </div>
            </div>
          </div>

        </div>
      ),
    },

    

  ];


   const paragraphs = [
    <>
      Adhunik Powertech Private Limited envisions a market influenced by the high-standard products, we manufacture. We believe in setting a mark and so consider the present to be very important. Manufacturing goods is not only part of our work but a venture to satisfy our extended customers. The manufacturing process has extensive steps that involve extra focus like - Design, Material Selection, Raw Material, Manufacturing Standards, and QC Process. The entire setup especially involves the work of a team of well-qualified and experienced engineers and technicians who are qualified and capable of giving out excellent results.  Adhunik Powertech Private Limited is built on the cornerstone of customer satisfaction by timely delivery of products and services at the most competitive prices along with high standards, and we look forward to sticking earnestly to our policy in the future.
    </>
  ];

  const paragraphs2 = [
    <>
      Adhunik Powertech Private Limited aims at providing the latest cooling technologies with sustainable climate control at the fingertips. Our focus while system designing & selection is to provide energy-efficient & cost-effective cooling solutions with near 'zero' maintenance that is for large industrial, institutional, commercial as well as residential premises. .</>,
    <>As our present mission, we would like to claim ourselves as one of the Heating Ventilation, and Air Conditioning Contractors with considerable experience in the field to provide turnkey solutions for HVAC works to meet international standards
    </>,

  ];

  return (
    <>

      <div className="container-fluid">


        <div className="row">


          <div id="myslide" className="   hidden lg:block  h-screen w-full overflow-hidden relative">

            <h1 className=" text-transparent absolute">About Us</h1>
            <div
              className="h-full w-full transition-transform ease-in-out duration-500"
              style={{ transform: `translateY(-${activePage * 100}vh)` }}
            >

              {pages.map((page) => (
                <div
                  key={page.id}
                  className="h-screen flex flex-col items-center justify-center text-white relative"
                  style={{
                    backgroundImage: `url(${page.bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >

                  <div className="absolute inset-0 bg-black opacity-50 z-0">
                    
                  </div>

                  <div className="z-10 text-center">
                    <p className="text-4xl font-bold">{page.title}</p>
                    <p className="text-lg mt-4">{page.description}</p>
                    {page.content}
                  </div>
                </div>
              ))}
            </div>


            <div className="absolute top-[60%]  left-[70%] md:left-auto  md:right-4 transform -translate-y-1/2 flex flex-col items-center">
              {pages.map((page) => (
                <div
                  key={page.id}
                  className={`flex items-center w-40 justify-start mb-4 cursor-pointer transition-all duration-300 ${page.id === activePage
                    ? "opacity-100 scale-105 "
                    : "opacity-50"
                    }`}
                  onClick={() => !isScrolling && setActivePage(page.id)}
                >

                  <div
                    className={`h-8 w-2 rounded-full mr-2 ${page.id === activePage
                      ? "border-2 border-orange-500"
                      : "bg-gray-400"
                      }`}
                  ></div>

                  <div
                    className={`h-[1px] w-5 rounded-full relative right-2 mr-2 ${page.id === activePage
                      ? "border-[1px] border-orange-500"
                      : "bg-gray-400 "
                      }`}
                  ></div>

                  <span className={` font-sans font-normal text-[14px]
                  ${page.id === activePage
                      ? "opacity-100 scale-105 bg-white text-black rounded-full text-[12px] p-1"
                      : " text-white opacity-100 "
                    }
                    `}>
                    {page.year}
                  </span>
                </div>
              ))}
            </div>
          </div>


        </div>

        <div className="  block lg:hidden row h-screen flex flex-col mt-10  w-full overflow-hidden justify-center items-center">
          <p className="py-2 text-sm">

            &gt;&gt; SWIPE RIGHT TO SEE MORE


          </p>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >

            <SwiperSlide>


              <div className="z-10  text-center">
          <div className="row bg-[#0000005d] ">
            <div className="col py-2 relative md:static  justify-center items-center flex flex-col">

            
              <p className=" text-md px-4 w-full text-justify font-sans font-thin pt-7 italic   pb-3">
              Our Story : Engineering Excellence, Redefined.
              </p>

              <p className="text-[11px]  px-4 w-full font-semibold  text-justify font-sans  ">

            Every great company has a story. Ours is one of legacy, evolution, and a relentless pursuit of perfection. It’s a story that begins not with a new name, but with nearly two decades of proven engineering experience.

 </p>

     <p className="text-md w-full px-4 text-justify font-sans font-thin pt-2 italic md:text-3xl  pb-2">
           Chapter 1 : The Foundation (2005 - 2024)
  </p>
              
     <p className="text-sm w-full px-4 text-justify font-sans font-thin  italic  ">
          Building a Legacy of Trust
  </p>
              
              <p className=" text-[11px]   w-full px-4 text-justify font-sans font-thin pt-2" >
          Our journey began in 2005 as the heart of Adhunik Powertech's HVAC division. For 19 years, we were the minds and hands behind more than 600 complex projects across India. We built a reputation not just for installing systems, but for engineering solutions—tackling the toughest challenges in commercial, industrial, and specialized sectors. We became the trusted team known for our meticulous standards and unwavering commitment to quality.
 </p>

              

               

            </div>
          </div>
        </div>

            </SwiperSlide>

            <SwiperSlide>

              <div className="z-10  text-center">
          <div className="row bg-[#0000005d] ">
            <div className="col py-2 relative md:static  justify-center items-center flex flex-col">

            
              <p className=" text-md px-4 w-full text-justify font-sans font-thin pt-7 italic   pb-3">
              Chapter 2: The Turning Point (2025)
              </p>
              <p className=" text-md px-4 w-full text-justify font-sans font-thin pt-7 italic   pb-3">
              A Legacy Recognized
              </p>

              <p className="text-[11px]  px-4 w-full font-semibold  text-justify font-sans  ">

            A pivotal moment arrived in 2025. Our team's dedication and hard work were recognized on a national stage with the prestigious India Business Award for "Best Quality Standards and Services in the HVAC Industry."

 </p>

   
              
              <p className=" text-[11px]   w-full px-4 text-justify font-sans font-thin pt-2" >
        This award wasn't just an accolade; it was a confirmation of our core belief: that true expertise deserves a focused path. It was the catalyst that inspired us to take a bold, strategic step forward.
 </p>

              

               

            </div>
          </div>
        </div>

            </SwiperSlide>

            <SwiperSlide>



              <div className="z-10  text-center">
          <div className="row bg-[#0000005d] ">
            <div className="col py-2 relative md:static  justify-center items-center flex flex-col">

            
              <p className=" text-md px-4 w-full text-justify font-sans font-thin pt-7 italic   pb-3">
             Chapter 3: The Evolution
              </p>
              <p className=" text-md px-4 w-full text-justify font-sans font-thin pt-7 italic   pb-3">
            Forging a Specialized Future
              </p>

              <p className="text-[11px]  px-4 w-full font-semibold  text-justify font-sans  ">

          We asked ourselves: "How can we offer our clients even greater value, agility, and specialized expertise?" The answer was to evolve.

 </p>

   
              
              <p className=" text-[11px]   w-full px-4 text-justify font-sans font-thin pt-2" >
       The award-winning HVAC division was strategically restructured to become Adhunik HVAC Projects, a new, purpose-built company under the banner of Adhunik Guds & Services Private Limited. This was not a separation, but a concentration of our strengths—channeling two decades of experience into a single, powerful entity dedicated exclusively to mastering the art and science of HVAC.

 </p>

              

               

            </div>
          </div>
        </div>


            </SwiperSlide>

            <SwiperSlide>

             <div className="z-10  text-center">
          <div className="row bg-[#0000005d] ">
            <div className="col py-2 relative md:static  justify-center items-center flex flex-col">

            
              <p className=" text-md px-4 w-full text-justify font-sans font-thin pt-7 italic   pb-3">
              Chapter 4 : Our Integrated Strength Today

              </p>

              <p className=" text-md px-4 w-full text-justify font-sans font-thin pt-7 italic   pb-3">
            The Adhunik Ecosystem
              </p>

              <p className="text-[11px]  px-4 w-full font-semibold  text-justify font-sans  ">

        Today, Adhunik HVAC Projects operates as a center of excellence within a unique and powerful ecosystem. This structure is our promise of quality and seamless execution to you :

 </p>

   
              
            <ul className=" text-md px-4    text-justify font-sans font-thin pb-4">

            <li className="">
         <strong className=" font-bold text-orange-500">
Focused Expertise : </strong>
          Our team lives and breathes HVAC. This singular focus ensures you receive the most innovative and effective solutions.
            </li>

            <li className="">
         <strong className=" font-bold text-orange-500">
 Integrated Solutions :  </strong>
        As part of a larger family, we collaborate seamlessly with our sister divisions—Adhunik FireXpert (fire safety) and Adhunik Decodive (interiors)—to offer truly comprehensive, single-point solutions for your projects.

            </li>


            <li className="">
         <strong className=" font-bold text-orange-500">
  Unmatched Quality Control : </strong>
     Our strategic partnership with our dedicated manufacturing arm, Om Cooling System (OCS), means we control the quality of our core components from the factory floor to your project site.

            </li>


         </ul> 



              

               

            </div>
          </div>
        </div>




            </SwiperSlide>

 
          </Swiper>
        </div>


      </div>


 <div className="row">
    


        <section className="pb-24 pt-14 relative">

          <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full  justify-start   items-center gap-12  flex md:flex-row flex-col-reverse">
         
              <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                  <img
                    className="rounded-xl object-cover"
                    src="https://images.pexels.com/photos/257770/pexels-photo-257770.jpeg"
                    alt="about Us image"
                    
                    loading="lazy"
                  />
                </div>
                <img
                  className="sm:ml-0 ml-auto rounded-xl object-cover"
                  src="https://images.pexels.com/photos/11744190/pexels-photo-11744190.jpeg"
                  alt="about Us image"
                
                  loading="lazy"
                />
              </div>

              
              <div className=" text-gray-500 w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex transition-colors duration-500 ease-in-out hover:border-orange-500 border-2 border-gray-300 rounded-xl px-6  py-6">
                <div className="w-full flex-col justify-center items-start gap-8 flex">
                  <div className="w-full py-12 flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2 className="text-gray-800   font-bold font-manrope leading-normal lg:text-start text-center">

                     Mission : Our Purpose Today

                    </h2>




                    <div className=" text-base  leading-relaxed   space-y-4">
                          <p className="font-sans text-sm font-thin  text-justify ">

                            Our mission is to leverage our 19+ year engineering legacy to deliver superior, end-to-end HVAC solutions. We are dedicated to providing our clients with meticulously designed, energy-efficient systems that ensure unparalleled reliability, performance, and peace of mind.

                          </p>
                    
                    </div>


                  </div>

                </div>
 

              </div>


            </div>
          </div>
        </section>

        <section className="pb-10 relative">
          <div
            className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto  "
          >
            <div className="w-full text-gray-500 justify-start items-center gap-8 flex md:flex-row flex-col-reverse  ">
               
              <div className="w-full   flex-col justify-center lg:items-start items-center gap-10 inline-flex transition-colors duration-500 ease-in-out hover:border-orange-500 border-2 border-gray-300 rounded-xl px-6  py-24 ">
                <div className="w-full flex-col justify-center items-start gap-8 flex ">
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex ">
                    <h2 className="text-gray-800 font-bold font-manrope leading-normal lg:text-start text-center">

                    Vision : Our Aspiration for the Future

                    </h2>

                    <div className=" text-sm  leading-relaxed  space-y-4">
                       <p className="font-sans font-thin  text-justify ">
                        To be India's most respected HVAC project contractor, recognized for setting the industry benchmark in engineering innovation, sustainable solutions, and unwavering client trust.

                       </p>
                       <h2 className=" text-base text-gray-800 font-bold font-manrope leading-normal lg:text-start text-center">

                        The Next Chapter : Our Promise to You

                       </h2>


                          <p className="font-sans font-thin  text-justify ">

                    Our story is still being written, and its next chapter is centered on our clients. We carry the legacy, the awards, and the experience of our past to build a future of unparalleled HVAC excellence. We are more than a contractor; we are your dedicated partner in engineering environments that are efficient, reliable, and built to last.

                       </p>

                    </div>
                  </div>
                </div>
              </div>

              
              <img
                className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
                src="https://images.pexels.com/photos/19431067/pexels-photo-19431067.jpeg"
                alt="about Us image"
                loading="lazy"
                 height={300}
                  width={500}
              />
            </div>
          </div>
        </section>


 

<p className=" text-center py-12 text-4xl bg-linear-to-r from-cyan-500 to-teal-500 bg-clip-text   font-extrabold text-transparent ...">
   Welcome to Adhunik HVAC Projects <br />  <span className=" text-3xl">
    Welcome to the next chapter
   </span>

</p>
      </div>

    </>
  )
}
