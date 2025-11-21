"use client"
import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon';
import Link from './Link';
import { motion } from 'framer-motion';

function ButtonLink({ children, className, href, ...props }) {
    return (
        <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link
                href={href}
                {...props}
                className={`
                group
                    ${className}
                `}
            >
                <span>{children}</span>
                <ArrowRightLineIcon className="h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </Link>
        </motion.div>
    );
}

export default ButtonLink;
