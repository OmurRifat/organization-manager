import React from 'react';

const Skeleton = () => {
    return (
        <div>
            
<div role="status" class="max-w-sm animate-pulse">
    <div class="h-6  rounded bg-gray-500 max-w-[360px] mb-12"></div>
    <div class="h-6  rounded bg-gray-500 max-w-[360px] mb-12"></div>
    <div class="h-6  rounded bg-gray-500 max-w-[360px] mb-12"></div>
    <div class="h-6  rounded bg-gray-500 max-w-[360px] mb-12"></div>
    <span class="sr-only">Loading...</span>
</div>
        </div>
    );
};

export default Skeleton;