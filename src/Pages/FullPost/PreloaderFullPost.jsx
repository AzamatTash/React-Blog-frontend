import React from 'react';
import ContentLoader from 'react-content-loader';

const PreloaderFullPost = () => {
    return (
        <div>
            <ContentLoader
                speed={2}
                width={540}
                height={565}
                viewBox='0 0 540 565'
                style={{ width: '100%', height: '100%' }}
                backgroundColor='#d6d6d6'
                foregroundColor='#cccccc'
            >
                <rect x='0' y='0' rx='10' ry='10' width='540' height='344' />
                <rect x='0' y='360' rx='10' ry='10' width='323' height='21' />
                <rect x='2' y='550' rx='5' ry='5' width='278' height='9' />
                <rect x='508' y='550' rx='5' ry='5' width='30' height='9' />
                <rect x='2' y='400' rx='5' ry='5' width='538' height='10' />
                <rect x='2' y='415' rx='5' ry='5' width='538' height='10' />
                <rect x='2' y='430' rx='5' ry='5' width='538' height='10' />
                <rect x='2' y='445' rx='5' ry='5' width='538' height='10' />
                <rect x='2' y='460' rx='5' ry='5' width='538' height='10' />
                <rect x='2' y='475' rx='5' ry='5' width='538' height='10' />
                <rect x='2' y='490' rx='5' ry='5' width='538' height='10' />
                <rect x='2' y='505' rx='5' ry='5' width='538' height='10' />
                <rect x='2' y='520' rx='5' ry='5' width='538' height='10' />
            </ContentLoader>
        </div>
    );
};

export default PreloaderFullPost;