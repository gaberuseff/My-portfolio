"use client";

import NextLink from "next/link";
import React, { useEffect, useRef, useState } from "react";

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
        }
        return () => {
            if (linkElement) {
                linkElement.removeEventListener("mouseover", setPrefetchListener);
                linkElement.removeEventListener("mouseleave", removePrefetchListener);
            }
        };
    }, [prefetching]);

    return (
        <NextLink href={href} ref={linkRef} className={className}
            prefetch={prefetching} {...rest}>
            {children}
        </NextLink>
    );
};

export default Link;