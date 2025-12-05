"use client";

import NextLink from "next/link";
import { useEffect, useRef, useState } from "react";

const Link = ({ children, className, href, ...rest }) => {
    const [prefetching, setPrefetching] = useState(false);
    const linkRef = useRef(null);

    const setPrefetchListener = () => {
        setPrefetching(true);
    };
    const removePrefetchListener = () => {
        setPrefetching(false);
    };

    useEffect(() => {
        const linkElement = linkRef.current;
        if (linkElement) {
            linkElement.addEventListener("mouseover", setPrefetchListener);
            linkElement.addEventListener("mouseleave", removePrefetchListener);
            linkElement.addEventListener("focus", setPrefetchListener);
            linkElement.addEventListener("blur", removePrefetchListener);
        }
        return () => {
            if (linkElement) {
                linkElement.removeEventListener("mouseover", setPrefetchListener);
                linkElement.removeEventListener("mouseleave", removePrefetchListener);
                linkElement.removeEventListener("focus", setPrefetchListener);
                linkElement.removeEventListener("blur", removePrefetchListener);
            }
        };
    }, [prefetching]);

    return (
        <NextLink
            href={href}
            ref={linkRef}
            className={className}
            prefetch={true}
            {...rest}>
            {children}
        </NextLink>
    );
};

export default Link;