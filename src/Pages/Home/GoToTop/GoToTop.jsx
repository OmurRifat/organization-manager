import React from 'react';

const GoToTop = () => {

    const goToBtn = () => {
        window.scrollTo({top:0, left:0, behavior: 'smooth'})
    }




    return (
        <div className='top-btn bg-red-500' onClick={goToBtn}>
            btn
        </div>
    );
};

export default GoToTop;