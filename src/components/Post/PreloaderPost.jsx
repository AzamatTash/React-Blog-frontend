import React from 'react';
import ContentLoader from 'react-content-loader'

const PreloaderPost = () => {
    return (
        <ContentLoader
            speed={2}
            width={540}
            height={480}
            viewBox="0 0 540 480"
            style={{ width: '100%', height: 'auto'}}
            backgroundColor="#d6d6d6"
            foregroundColor="#cccccc"
        >
            <rect x="0" y="0" rx="10" ry="10" width="540" height="344" />
            <rect x="0" y="355" rx="15" ry="15" width="30" height="30" />
            <rect x="40" y="359" rx="5" ry="5" width="150" height="10" />
            <rect x="40" y="372" rx="4" ry="4" width="100" height="8" />
            <rect x="0" y="395" rx="10" ry="10" width="323" height="21" />
            <rect x="0" y="1000" rx="10" ry="10" width="540" height="200" />
            <rect x="2" y="430" rx="5" ry="5" width="278" height="9" />
            <rect x="508" y="430" rx="5" ry="5" width="30" height="9" />
        </ContentLoader>
    );
};

export default PreloaderPost;