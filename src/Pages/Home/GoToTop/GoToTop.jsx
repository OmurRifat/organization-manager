import React, { useEffect, useState } from 'react';
import { FaArrowUp } from "react-icons/fa";


const GoToTop = () => {
    const [visible, setVisible] = useState(false)

    const goToBtn = () => {
        window.scrollTo({top:0, left:0, behavior: 'smooth'})
    }

    const listenToScroll = () => {
        let height = 250;
        const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
        console.log('scroll',windowScroll);
        if(windowScroll > height){
           setVisible(true)
        }
        else{
           setVisible(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',listenToScroll);
        return () => window.removeEventListener('scroll',listenToScroll);
    },[])


    return (
        <>
            {visible &&
            <div className='top-btn animate-bounce right-3 drop-shadow-2xl backdrop-blur-xl bottom-1 fixed flex items-center justify-center cursor-pointer mb-4 rounded-3xl w-12 h-12 bg-[#4f9f96]' onClick={goToBtn}>
            <FaArrowUp className='text-xl'></FaArrowUp>
        </div>
        }
        </>
    );
};

export default GoToTop;