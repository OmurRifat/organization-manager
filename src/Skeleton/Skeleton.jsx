import React from 'react';

const Skeleton = () => {
    return (
        <div>
            
<div role="status" className="max-w-sm animate-pulse">
    <div className="h-6  rounded bg-gray-500 max-w-[360px] mb-12"></div>
    <div className="h-6  rounded bg-gray-500 max-w-[360px] mb-12"></div>
    <div className="h-6  rounded bg-gray-500 max-w-[360px] mb-12"></div>
    <div className="h-6  rounded bg-gray-500 max-w-[360px] mb-12"></div>
    <span className="sr-only">Loading...</span>
</div>
        </div>
    );
};

export default Skeleton;