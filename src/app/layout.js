import { Analytics } from '@vercel/analytics/next';
import { Ubuntu } from "next/font/google";
import { URL } from "url";
import Footer from "./_components/Footer";
import Header from "./_components/Header/Header";
import ClientTransition from "./_components/ClientTransition";
import "./globals.css";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"], // Load desired font weights
});

export async function generateMetadata({ params: { lang } }) {
  const metadataBase = new URL("https://gaberuseff.com");

  const enMetadata = {
    title: "Gaber Usef | Front-End Developer",
    description:
      "The professional portfolio of Gaber Usef, a skilled Front-End Developer specializing in creating modern, responsive, and high-performance web applications using React, Next.js, and Tailwind CSS. Explore my projects and get in touch.",
    keywords: ["Front-End Developer", "React Developer", "Next.js", "Tailwind CSS", "JavaScript", "Web Development", "Portfolio", "UI/UX", "Web Performance"],
  };

  const arMetadata = {
    title: "جابر يوسف | مطور واجهات أمامية",
    description: "ملف الأعمال الاحترافي لـ جابر يوسف، مطور واجهات أمامية متخصص في إنشاء تطبيقات ويب حديثة ومتجاوبة وعالية الأداء باستخدام React و Next.js و Tailwind CSS. استكشف مشاريعي وتواصل معي.",
    keywords: ["مطور واجهات أمامية", "مطور React", "Next.js", "Tailwind CSS", "Front-End Developer", "JavaScript", "تطوير الويب", "ملف أعمال", "تصميم واجهة المستخدم وتجربة المستخدم", "أداء الويب"],
  };

  const metadata = lang === 'ar' ? arMetadata : enMetadata;

  return {
    ...metadata,
    metadataBase,
    creator: "Gaber Usef",
    alternates: {
      canonical: `/${lang}`,
      languages: {
        'en-US': '/en',
        'ar-EG': '/ar',
      },
    },
  };
}

export default function RootLayout({ children, params: { lang } }) {
  return (
    <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
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