"use client"
import { motion } from "framer-motion"

function Features() {
    const features = [
        {
            title: "Seamless User Experience",
            description: "Designing intuitive, engaging interfaces that delight users and drive interaction."
        },
        {
            title: "Responsive & Fast Performance",
            description: "Building beautiful, lightning-fast web experiences that work perfectly on any device."
        },
        {
            title: "Scalable Solutions",
            description: "Creating adaptable systems that grow with your business needs and user demands."
        },
        {
            title: "Innovative Design",
            description: "Crafting unique, modern designs that set your brand apart and captivate your audience."
        }
    ];

    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
                hidden: { opacity: 0 },
                show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 }
                }
            }}
            className="grid grid-cols-2 md:grid-cols-4 md:gap-8 gap-3"
        >
            {features.map((feature, index) => (
                <motion.div
                    key={feature.title}
                    variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}
                    className={`flex flex-col items-start relative md:border-r md:border-gray-300 pr-8 ${index === features.length - 1 ? 'border-none' : ''}`}
                >
                    <h3 className="heading-small">{feature.title}</h3>
                    <p className="p-small">{feature.description}</p>
                </motion.div>
            ))}
        </motion.div>
    )
}

export default Features
