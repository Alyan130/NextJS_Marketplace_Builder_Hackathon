// "use client"

// import localFont from "next/font/local";
// import "./globals.css";
// import TopBar from "@/components/layout/topbar";
// import Header from "@/components/layout/middlebar";
// import Footer from "@/components/layout/footer";
// import Providers from "./providers";


// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });


// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
 

//   return (
  
//      <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <Providers>
//         <TopBar/>
//         <Header/>
//         {children}
//         <Footer/>
//         </Providers>
//       </body>
//     </html>
//   );
// }


"use client";

import { useEffect } from "react";
import localFont from "next/font/local";
import "./globals.css";
import TopBar from "@/components/layout/topbar";
import Header from "@/components/layout/middlebar";
import Footer from "@/components/layout/footer";
import Providers from "./providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}) {
  useEffect(() => {
    // Load Botpress script dynamically
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.botpress.init) {
        window.botpress.init({
          botId: "d3aea06d-0f04-4701-bec3-b457caf79902",
          configuration: {
            website: {},
            email: {},
            phone: {},
            termsOfService: {},
            privacyPolicy: {},
            color: "#008B8B",
            variant: "solid",
            themeMode: "light",
            fontFamily: "inter",
            radius: 1,
          },
          clientId: "1eff1740-ce4e-4abf-9360-d4cfc01ef59d",
        });
      } else {
        console.error("Botpress failed to initialize.");
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <TopBar />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

