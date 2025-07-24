import { ArrowRight } from 'lucide-react';
import Link from './Link';

function ButtonLink({ children, className, href, ...props }) {
    return (
        <Link
            href={href}
            {...props}
            className={`
            group
                ${className}
            `}
        >
            <span>{children}</span>
            <ArrowRight className="h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
        </Link>
    );
}

export default ButtonLink;
