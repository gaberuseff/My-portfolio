import Image from "next/image"
import ButtonLink from "../ButtonLink"
import Features from "./Features"
import HeroText from "./HeroText"

function Hero() {
    return (
        <section className="sm:py-16 py-8 px-2 flex flex-col gap-18">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative w-full aspect-square md:h-full 
                    md:aspect-auto order-1 md:order-2 overflow-hidden rounded-[5%]">
                    <Image
                        src="/myimg.webp"
                        alt="Gaber Usef"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>

                <div className="max-w-3xl flex flex-col items-start 
                    justify-center gap-4 order-2 md:order-1">
                    <HeroText />

                    <ButtonLink href={"/contact"} className="mt-8 btn-primary">
                        Get in Touch
                    </ButtonLink>
                </div>
            </div>

            <Features />
        </section>
    )
}

export default Hero
