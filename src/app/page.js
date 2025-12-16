import Hero from "./_components/Home/Hero"
import HowIam from "./_components/Home/HowIam"
import TechStack from "./_components/Home/TechStack"
import WhyMe from "./_components/Home/WhyMe"
import Works from "./_components/Works/Works"
import ClientTransition from "./_components/ClientTransition"

export async function generateMetadata() {
  const title = "Gaber Usef | جابر يوسف"
  const description = "Gaber Usef (جابر يوسف) - Professional Front-End Developer portfolio showcasing modern web projects built with React, Next.js, and Tailwind CSS. مطور واجهات أمامية محترف - ملف أعمال يعرض مشاريع ويب حديثة."
  return {
    title,
    description,
    keywords: ["Gaber Usef", "جابر يوسف", "Front-End Developer", "React Portfolio", "Next.js Projects", "مطور واجهات أمامية", "ملف أعمال"],
    alternates: { canonical: "/" },
    openGraph: { type: "website", url: "https://gaberuseff.com/", title, description, images: [{ url: "/me.jpg", width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title, description, images: ["/me.jpg"] }
  }
}

function page() {
  return (
    <ClientTransition>
      <div className="flex flex-col">
        <Hero />

        <HowIam />

        <TechStack />

        <Works />

        <WhyMe />
      </div>
    </ClientTransition>
  )
}

export default page