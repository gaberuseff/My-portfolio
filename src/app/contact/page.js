import ArrowRightUpLineIcon from "remixicon-react/ArrowRightUpLineIcon";
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import LinkedinFillIcon from "remixicon-react/LinkedinFillIcon";
import FacebookFillIcon from "remixicon-react/FacebookFillIcon";
import InstagramLineIcon from "remixicon-react/InstagramLineIcon";
import WhatsappFillIcon from "remixicon-react/WhatsappFillIcon";
import ButtonLink from "../_components/ButtonLink";
import { getCv } from "../_services/data-service";

async function ContactPage() {
    const socialLinks = [
        { href: "https://github.com/Gaberuseff", label: "GitHub" },
        { href: "https://www.linkedin.com/in/gaberuseff/", label: "LinkedIn" },
        { href: "https://www.facebook.com/gaberuseff/", label: "Facebook" },
        { href: "https://www.instagram.com/gaberuseff/", label: "Instagram" },
        { href: "https://wa.me/+201098922786", label: "WhatsApp" },
    ];

    const cvLink = await getCv();

    return (
        <section className="pt-12">
            <div>
                <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
                <p className="p-small max-w-5xl">
                    If you have any questions, want to collaborate, or just want to say hello,
                    feel free to reach out! I&apos;m always open to discussing new projects,
                    creative ideas, or opportunities to be part of your vision.
                </p>
            </div>

            <div className="flex items-center gap-4">
                <a href="mailto:dev.gaber@gmail.com" rel="noopener noreferrer"
                    className="text-gray-600 flex items-center gap-2 mt-4 sm:text-2xl text-xl">
                    <span>
                        dev.gaber@gmail.com
                    </span>
                    <ArrowRightUpLineIcon />
                </a>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-6">Follow Me</h2>
                <div className="flex items-center flex-wrap gap-6">
                    {socialLinks.map((link, index) => (
                        <a key={index} href={link.href} target="_blank" rel="noopener noreferrer"
                            className="text-gray-600 flex items-center gap-2 hover:text-[#14130d] transition-colors">
                            {link.label === "GitHub" && <GithubFillIcon className="w-6 h-6" />}
                            {link.label === "LinkedIn" && <LinkedinFillIcon className="w-6 h-6" />}
                            {link.label === "Facebook" && <FacebookFillIcon className="w-6 h-6" />}
                            {link.label === "Instagram" && <InstagramLineIcon className="w-6 h-6" />}
                            {link.label === "WhatsApp" && <WhatsappFillIcon className="w-6 h-6" />}
                            <span>{link.label}</span>
                        </a>
                    ))}
                </div>
            </div>

            <div className="mt-12">
                <ButtonLink href={cvLink} target="_blank" className='btn-primary'>Show CV</ButtonLink>
            </div>
        </section >
    );
}

export default ContactPage;