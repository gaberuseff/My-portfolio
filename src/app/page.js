import Hero from "./_components/Home/Hero"
import HowIam from "./_components/Home/HowIam"
import TechStack from "./_components/Home/TechStack"
import WhyMe from "./_components/Home/WhyMe"
import Works from "./_components/Works/Works"

function page() {
  return (
    <div className="flex flex-col">
      <Hero />

      <HowIam />

      <TechStack />

      <Works />

      <WhyMe />
    </div>
  )
}

export default page
