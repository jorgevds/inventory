import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface ActiveLinkProps {
    url: string;
    label: string;
}

export const ActiveLink: React.FC<ActiveLinkProps> = ({ url, label }) => {
    const router = useRouter();

    return (
        <Link href={url}>
            <a className={router.pathname === url ? "active" : ""}>{label}</a>
        </Link>
    );
};
