import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WatsapButton from "@/components/watsap";
import Script from "next/script";
import { GoogleTagManager } from '@next/third-parties/google'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
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
    imageAlt: "Adhunik HVAC Projects - HVAC & Air Cooling Solutions",
  },
  openGraph: {
    title: "Top HVAC Contractor in Delhi NCR | Adhunik HVAC Projects",
    type: "website",
    url: "https://www.adhunikhvacprojects.com",
    siteName: "Adhunik HVAC Projects - HVAC Experts",
    image: "https://adhunikhvacprojects.com/apple-touch-icon.png",
    locale: "en_IN",
    creator: "Adhunik HVAC Projects",

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
   
   
    <head>

   <meta itemProp="name" content="Adhunik HVAC Projects" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Adhunik HVAC Projects",
              "url": "https://www.adhunikhvacprojects.com",
              "alternateName": "Adhunik HVAC Projects",
            }),
          }}
        />


     
  <Script
      async src="https://www.googletagmanager.com/gtag/js?id=G-D7JKZ9C6RS"
        strategy="afterInteractive"
      />

      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-D7JKZ9C6RS');
        `}
      </Script>

        <GoogleTagManager gtmId="G-D7JKZ9C6RS" />
        
        <meta name="google-site-verification" content="NvZ4IN4DrHMOm2iwZo-ONRq9_7U8g_ntzz0_MaRVVc8" />

        

        <Script id="google-analytics" >

          {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-D7JKZ9C6RS');`}

        </Script>


        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        <link rel="icon" href="/favicon.ico" sizes="any" />


        <link
          rel="preload"
          href="/fonts/Poppins/Poppins-Medium.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Analytics />
      <SpeedInsights />

        <WatsapButton phoneNumber="+919599050534" />

        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
