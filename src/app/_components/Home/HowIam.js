import AboutText from "./AboutText";

function HowIam() {
    return (
        <section className="py-8 grid grid-cols-1 md:grid-cols-2 sm:gap-8 gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold">Who I am?</h2>
            <AboutText />
        </section>
    )
}

export default HowIam;
