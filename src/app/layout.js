import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WatsapButton from "@/components/watsap";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata = {
 
  title: {
    default: "Top HVAC Contractor in Delhi NCR | Adhunik HVAC Projects",
    template: "%s",
  },
  description:
    "Top turnkey HVAC contractor in Delhi NCR & India. We provide award-winning design and installation for industrial & commercial clients. 19+ years of experience. Contact us!",

  keywords: [
    "HVAC contractor",

    "turnkey HVAC projects",

    "industrial HVAC solutions",

    "commercial HVAC services",

    "HVAC design and installation",

    "HVAC engineering company",

    "MEP contractors",

    "HVAC contractor in Delhi NCR",

    "HVAC projects Gurgaon",

    "industrial ventilation Noida",

    "top HVAC company in Delhi",

    "pan-India HVAC contractor",

    "cleanroom HVAC design",

    "hospital OT ventilation",

    "HVAC for data centers",

    "pharmaceutical HVAC solutions",

    "warehouse ventilation contractor",

    "factory cooling solutions",

    "Adhunik HVAC Projects",

    "Adhunik Guds & Services",

    "Adhunik Powertech legacy",
  ],

  robots: "index,follow",
  appleMobileWebAppCapable: "yes",
  appleMobileWebAppTitle: "Adhunik hvac projects",
  appleMobileWebAppStatusBarStyle: "default",
  robots: "index, follow",

  alternates: {
    canonical: "https://www.adhunikhvacprojects.com",
  },

  twitter: {
    site: "@adhunikhvacprojects",
    title: "Top HVAC Contractor in Delhi NCR | Adhunik HVAC Projects",
    description:
      "Award-winning design & installation for industrial and commercial clients, built on a 19+ year legacy of excellence.",
    card: "summary",
    image: "https://adhunikhvacprojects.com/apple-touch-icon.png",
    imageAlt: "Adhunik Powertech - HVAC & Air Cooling Solutions",
  },
  openGraph: {
    title: "Top HVAC Contractor in Delhi NCR | Adhunik HVAC Projects",
    type: "website",
    url: "https://www.adhunikhvacprojects.com",
    siteName: "Adhunik Powertech - HVAC Experts",
    image: "https://adhunikhvacprojects.com/apple-touch-icon.png",
    locale: "en_IN",
    creator: "Adhunik Powertech",

    images: [
      {
        url: "https://adhunikhvacprojects.com/apple-touch-icon.png",
        width: 1200,
        height: 630,
        alt: "Adhunik HVAC Projects - Industrial HVAC Installation",
      },
    ],
  },

  additionalMeta: [
    { httpEquiv: "X-UA-Compatible", content: "IE=EmulateIE7" },
    {
      httpEquiv: "Accept-CH",
      content: "DPR, Viewport-Width, Width, Save-Data",
    },
  ],

  link: [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WatsapButton phoneNumber="+919599050534" />

        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
