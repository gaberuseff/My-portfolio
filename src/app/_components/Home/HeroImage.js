import Image from "next/image"

function HeroImage() {
    return (
        <div className="relative w-full aspect-square md:h-full 
            md:aspect-auto order-1 md:order-2 overflow-hidden rounded-[10%]">
            <Image
                src="/me.png"
                alt="Gaber Usef"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
            />
        </div>
    )
}

export default HeroImage
