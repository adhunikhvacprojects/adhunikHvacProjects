'use client'
import Image from 'next/image';
import { Suspense, useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

export default function SupportForm() {
    // const notifye = () => toast.error(" Invalid Details ");
    // const notifys = () => toast(" Message Sent ");
    const router = useRouter();
    const phoneNumber = "8287885885";

    const handlePhoneCall = () => {
        window.location.href = `tel:${phoneNumber}`;
    };
    const emailAddress = "info@adhunikpowertech.com";

    const handleEmailSend = () => {
        window.location.href = `mailto:${emailAddress}`;
    };
    const locationAddress = "DCG1-0102, Tower -1, DLF Corporate Green Sector-74A Gurugram (HR) 122004";

    const handleGetLocation = () => {
        // Constructing the Google Maps URL with the address
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationAddress)}`;
        // Opening the URL in a new tab
        window.open(mapsUrl, '_blank');
    };



    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        city: "",
        state: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const form = useRef();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const newErrors = {};
        // Basic validation rules
        if (formData.name.trim() === "") {
            newErrors.name = "Name is required";
        }
        if (formData.phoneNumber.trim() === "") {
            newErrors.phoneNumber = "Phone Number is required";

        }
        else if (!/^\d{10}$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = "Phone Number must be exactly 10 digits";
        }
        if (formData.email.trim() === "") {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email address";
        }
        if (formData.city.trim() === "") {
            newErrors.city = "City is required";
        }
        if (formData.state.trim() === "") {
            newErrors.state = "State is required";
        }
        if (formData.message.trim() === "") {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (validateForm()) {

            emailjs
                .sendForm("service_rurf2x7", "template_l7fwlg4", form.current, {
                    publicKey: "MhRQ4EQ146BN6g6VJ",
                })
                .then(() => {
                    notifys();
                    console.log("SUCCESS!");

                    setTimeout(() => {
                        router.push("/");
                    }, 5000);
                })
                .catch((error) => {
                    console.log("FAILED...", error);
                });
            console.log("Form validate");
        } else {
            // Form validation failed
            console.log("Form validation failed");
            notifye();
        }
    };

    const contactDetails = [
        {
            id: 1,
            title: 'Phone',
            value: phoneNumber,
            icon: (
                <svg
                    className="mx-auto my-auto w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                </svg>
            ),
            onClick: handlePhoneCall,
        },
        {
            id: 2,
            title: 'E-mail',
            value: emailAddress,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="mx-auto my-auto w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                </svg>
            ),
            onClick: handleEmailSend,
        },
        {
            id: 3,
            title: 'Location',
            value: locationAddress,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="mx-auto my-auto w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                </svg>
            ),
            onClick: handleGetLocation,
        }
    ];

    return (
        <>
            <ToastContainer />

            <div className="w-full  ">
                <div className=" w-full p-7   items-center justify-center ">

                    <p className="text-5xl pt-4 text-center h-full mt-16">
                    Support Form
                     </p>

                </div>

                <div className=" w-full ">
                    <div className="text-center">

                        <div className="justify-around grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4 group p-5">
                            {contactDetails.map((detail) => (
  <div key={detail.id}   className=" shadow-2xl  border-2 border-gray-100 transition-transform hover:!blur-none group-hover:scale-[.85] hover:!scale-100 p-4 rounded-xl mix-blend-luminosity cursor-pointer"
                                >
                                    <div className="w-auto h-auto">{detail.icon}</div>
                                    <h4 className="uppercase text-[18px] font-sans py-3 font-bold">{detail.title}</h4>
                                    <p className="text-sm leading-7  font-light opacity-50">{detail.value}</p>
                                    <button
                                        className="bg-btn_primary py-2.5 px-8  text-[14px] rounded-full hover:text-gray-400"
                                        onClick={detail.onClick}
                                    >
                                        Get in Touch
                                    </button>
                                </div>


                            ))}
                        </div>

                    </div>

                    <div className=" w-full bg-[white] mt-5 flex flex-col md:flex-row items-center justify-center mx-auto">



                        <div className="h-fit justify-center items-center flex w-full md:w-7/12">
                            <img
                                src="/contactus.webp" 
                                alt="Description of the image"
                                className="w-full h-auto object-cover"
                                loading='lazy'
                                height="300"
                                width='300'
                            />
                        </div>



                        <div className="h-fit w-auto lg:w-5/12  mt-5">

                            <form
                                className="w-auto m-3 md:m-7"
                                // onSubmit={sendEmail}
                                // ref={form}
                            >
                                <h1 className="text-4xl mb-7 capitalize">Talk to our expert.</h1>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-first-name"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            placeholder="Enter Name"
                                        />
                                        {errors.name && (
                                            <p className="text-red-500">{errors.name}</p>
                                        )}
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-last-name"
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            type="text"
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            placeholder="Enter Phone Number"
                                        />
                                        {errors.phoneNumber && (
                                            <p className="text-red-500">{errors.phoneNumber}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Email ID
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            placeholder="Enter Email ID"
                                        />
                                        {errors.email && (
                                            <p className="text-red-500">{errors.email}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-city"
                                        >
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            placeholder="Gurugram"
                                        />
                                        {errors.city && (
                                            <p className="text-red-500">{errors.city}</p>
                                        )}
                                    </div>
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-state"
                                        >
                                            State
                                        </label>
                                        <input
                                            type="text"
                                            name="state"
                                            value={formData.state}
                                            onChange={handleChange}
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            placeholder="Haryana"
                                        />
                                        {errors.state && (
                                            <p className="text-red-500">{errors.state}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="text-area mt-5">
                                    <label
                                        htmlFor="message"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Your message
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Write here..."
                                    ></textarea>
                                    {errors.message && (
                                        <p className="text-red-500">{errors.message}</p>
                                    )}
                                </div>
                                <button
                                    type="submit"

                                    className="w-full button bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded mt-5"
                                >
                                    BOOK A CONSULTATION
                                </button>
                            </form>

                        </div>
                    </div>

                    <div className="w-full h-full">
                        <div className="google-maps-embed">


                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.3866213825036!2d76.99470307554475!3d28.40758867578828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1820517a67c3%3A0x2674661964851cd9!2sAdhunik%20Powertech%20Private%20Limited!5e0!3m2!1sen!2sin!4v1726057699009!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"
                                className=" w-full h-[50vh]"
                                style={{ border: 0 }}
                                loading="lazy"
                                title="Google Maps Embed"

                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
