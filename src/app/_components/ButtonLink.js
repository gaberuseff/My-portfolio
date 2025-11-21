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
                    ${className}
                `}
            >
                <span>{children}</span>
                <ArrowRightLineIcon className="h-5 w-5" />
            </Link>
        </motion.div>
    );
}

export default ButtonLink;
