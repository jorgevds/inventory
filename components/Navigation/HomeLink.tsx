import Link from "next/link";
import React from "react";

interface HomeLinkProps {
    className?: string;
}

export const HomeLink: React.FC<HomeLinkProps> = ({ className }) => {
    return (
        <Link href="/">
            <a title="Homepage">
                <h1 className={className}>Inventory</h1>
            </a>
        </Link>
    );
};
