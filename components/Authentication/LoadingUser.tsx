import React from 'react';

interface LoadingUserProps {
    loading: boolean;
    children: React.ReactElement;
}

export const LoadingUser: React.FC<LoadingUserProps> = ({
    loading,
    children,
}) => {
    return loading ? (
        <article className="flex flex-col min-h-screen">
            <section className="m-auto mt-48">
                <h1 className="pb-2 text-4xl font-title">Inventory</h1>
                Loading your inventory...
            </section>
        </article>
    ) : (
        children
    );
};
