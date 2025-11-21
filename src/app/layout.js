import { Analytics } from '@vercel/analytics/next';
import { Ubuntu } from "next/font/google";
import { URL } from "url";
import ClientTransition from "./_components/ClientTransition";
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
      "Gaber Usef professional portfolio. ملف أعمال جابر يوسف: مطور واجهات أمامية متخصص في بناء تطبيقات ويب حديثة عالية الأداء.",
    keywords: [
      "Front-End Developer", "React Developer", "Next.js", "Tailwind CSS", "JavaScript", "Web Development", "Portfolio", "UI/UX", "Web Performance",
      "مطور واجهات أمامية", "مطور React", "Next.js", "Tailwind CSS", "جافاسكريبت", "تطوير الويب", "ملف أعمال", "تصميم واجهة المستخدم", "أداء الويب"
    ],
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
                  "name": "Gaber Usef | جابر يوسف",
                  "url": "https://gaberuseff.com",
                  "image": "https://gaberuseff.com/me.jpg",
                  "jobTitle": "Front-End Developer | مطور واجهات أمامية",
                  "sameAs": [
                    "https://github.com/Gaberuseff",
                    "https://www.linkedin.com/in/gaberuseff/"
                  ]
                },
                {
                  "@type": "WebSite",
                  "url": "https://gaberuseff.com",
                  "name": "Gaber Usef Portfolio | موقع جابر يوسف",
                  "availableLanguage": ["ar-EG", "en-US"]
                }
              ]
            })
          }} />
      </head>

      <body className={`${ubuntu.className} bg-[var(--bg-color)]
        text-gray-800 min-h-screen antialiased`}>
        <Header />

        <main className='max-w-7xl mx-auto px-4 sm:px-6'>
          <ClientTransition>
            {children}
          </ClientTransition>
        </main>

        <Footer />

        <Analytics />
      </body>
    </html>
  );
}