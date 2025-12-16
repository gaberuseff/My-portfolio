import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Ubuntu } from "next/font/google";
import { URL } from "url";
import Footer from "./_components/Footer";
import Header from "./_components/Header/Header";
import "./globals.css";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"], // Load desired font weights
});

export async function generateMetadata({ params: { lang } = { lang: 'en' } }) {
  const metadataBase = new URL("https://gaberuseff.com");
  const siteName = "Gaber Usef"
  const ogImage = "/me.jpg"

  const enMetadata = {
    title: {
      default: "Gaber Usef | Front-End Developer — جابر يوسف | مطور واجهات أمامية",
      template: "%s — Gaber Usef | جابر يوسف"
    },
    description:
      "Gaber Usef (جابر يوسف) - Professional Front-End Developer specializing in React, Next.js, and modern web applications. مطور واجهات أمامية محترف متخصص في React و Next.js وتطبيقات الويب الحديثة.",
    keywords: [
      // Name variations
      "Gaber Usef", "Gaber Youssef", "Gaber Yousef", "جابر يوسف", "جابر يوسف مطور", "Gaberuseff",
      // Job titles - English
      "Front-End Developer", "Frontend Developer", "React Developer", "Next.js Developer", "Web Developer",
      "JavaScript Developer", "UI Developer", "Full Stack Developer",
      // Job titles - Arabic
      "مطور واجهات أمامية", "مطور فرونت اند", "مطور React", "مطور Next.js", "مطور ويب",
      "مطور جافاسكريبت", "مطور واجهات مستخدم", "مطور مصري",
      // Technologies
      "React", "Next.js", "Tailwind CSS", "JavaScript", "HTML", "CSS",
      "Supabase", "Vercel", "Git", "GitHub",
      // Skills & Services
      "Web Development", "Responsive Design", "Web Performance", "SEO Optimization",
      "Portfolio Website", "Modern Web Apps", "Single Page Applications", "Progressive Web Apps",
      "تطوير الويب", "تصميم متجاوب", "أداء الويب", "تحسين محركات البحث",
      // Location
      "Egypt Developer", "Egyptian Developer", "Front-End Developer Egypt", "مطور مصري", "مطور في مصر",
      // Portfolio related
      "Portfolio", "Projects", "Web Portfolio", "Developer Portfolio", "ملف أعمال", "معرض أعمال"
    ],
    author: "Gaber Usef | جابر يوسف",
  };

  const arMetadata = enMetadata;

  const metadata = lang === 'ar' ? arMetadata : enMetadata;

  return {
    ...metadata,
    metadataBase,
    creator: "Gaber Usef",
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
    themeColor: "#ebe5df",
    openGraph: {
      type: "website",
      url: `https://gaberuseff.com/`,
      title: typeof metadata.title === 'string' ? metadata.title : metadata.title.default,
      description: metadata.description,
      siteName,
      images: [{ url: ogImage, width: 1200, height: 630, alt: siteName }]
    },
    twitter: {
      card: "summary_large_image",
      title: typeof metadata.title === 'string' ? metadata.title : metadata.title.default,
      description: metadata.description,
      images: [ogImage]
    },
    alternates: {
      canonical: `/`,
    },
  };
}

export default function RootLayout({ children, params: { lang } = { lang: 'en' } }) {
  return (
    <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "name": "Gaber Usef",
                  "alternateName": [
                    "جابر يوسف",
                    "Gaber Youssef",
                    "Gaber Yousef",
                    "Gaberuseff"
                  ],
                  "url": "https://gaberuseff.com",
                  "image": "https://gaberuseff.com/me.jpg",
                  "jobTitle": "Front-End Developer",
                  "description": "Professional Front-End Developer specializing in React, Next.js, and modern web applications. مطور واجهات أمامية محترف متخصص في React و Next.js",
                  "knowsAbout": [
                    "React",
                    "Next.js",
                    "JavaScript",
                    "TypeScript",
                    "Tailwind CSS",
                    "Web Development",
                    "UI/UX Design",
                    "Responsive Design",
                    "Web Performance"
                  ],
                  "nationality": "Egyptian",
                  "sameAs": [
                    "https://github.com/Gaberuseff",
                    "https://www.linkedin.com/in/gaberuseff/"
                  ]
                },
                {
                  "@type": "WebSite",
                  "url": "https://gaberuseff.com",
                  "name": "Gaber Usef Portfolio",
                  "alternateName": "موقع جابر يوسف",
                  "description": "Professional portfolio of Gaber Usef (جابر يوسف), Front-End Developer",
                  "inLanguage": ["en", "ar"],
                  "availableLanguage": ["ar-EG", "en-US"],
                  "author": {
                    "@type": "Person",
                    "name": "Gaber Usef"
                  }
                },
                {
                  "@type": "ProfessionalService",
                  "name": "Gaber Usef - Front-End Development Services",
                  "alternateName": "جابر يوسف - خدمات تطوير الواجهات الأمامية",
                  "url": "https://gaberuseff.com",
                  "description": "Professional front-end development services including React, Next.js, and modern web application development",
                  "provider": {
                    "@type": "Person",
                    "name": "Gaber Usef"
                  },
                  "areaServed": "Worldwide",
                  "serviceType": "Web Development"
                }
              ]
            })
          }} />

        <script type="text/javascript">
          {`(function (c, l, a, r, i, t, y) {
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
            t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
            y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
          })(window, document, "clarity", "script", "ugwseh3cnz");`}
        </script>
      </head>

      <body className={`${ubuntu.className} bg-[var(--bg-color)]
        text-gray-800 min-h-screen antialiased`}>
        <SpeedInsights />
        <Header />

        <main className='max-w-7xl mx-auto px-4 sm:px-6'>
          {children}
        </main>

        <Footer />

        <Analytics />
      </body>
    </html>
  );
}