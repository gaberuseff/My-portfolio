function HeroText() {
    return (
        <div>
            <h1 className="sm:text-4xl md:text-5xl text-2xl font-serif font-normal mb-2">
                Hey. I&apos;m <span className="font-serif">Gaber</span>,
            </h1>

            <h2 className="leading-tight">
                <span className="block sm:text-5xl text-4xl md:text-7xl font-black tracking-tight mb-2">A Front-End </span>
                <span className="block sm:text-5xl text-4xl md:text-7xl italic font-serif mb-2">Web</span>
                <span className="block sm:text-5xl text-4xl md:text-7xl font-black tracking-tight">Developer</span>
            </h2>

            <p className="mt-8 text-base md:text-2xl font-serif text-gray-800
                            max-w-sm">
                I create beautiful and functional web experiences using the latest technologies and best practices.
                Let&apos;s build something amazing together!
            </p>

        </div>
    )
}

export default HeroText
