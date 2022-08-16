import React from 'react';

interface LoadingItemsProps {
    loading: boolean;
    children: React.ReactElement;
}

export const LoadingItems: React.FC<LoadingItemsProps> = ({
    loading,
    children,
}) => {
    return loading ? (
        <article className="my-4 text-xl text-center">
            Items are loading...
        </article>
    ) : (
        children
    );
};
