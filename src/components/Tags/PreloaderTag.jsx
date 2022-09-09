import React from 'react';
import ContentLoader from 'react-content-loader';

const PreloaderTag = () => {
    return (
        <div>
            <ContentLoader
                speed={2}
                width={280}
                height={15}
                viewBox="0 0 280 15"
                backgroundColor="#d6d6d6"
                foregroundColor="#cccccc"
            >
                <rect x="10" y="0" rx="10" ry="5" width="160" height="15" />
            </ContentLoader>
        </div>
    );
};

export default PreloaderTag;