import React from "react";

const Newsletter = () => {
    const styles = {
        h2:{
            color: '#313131'
        },
        p:{
            color: "#828282"
        },
        primary:{
            border : '1px solid #2A9D8F'
        },
        
        
    }
  return (
    <>
      <div className="text-center pt-28">
      <h2 style={styles.h2} className="text-5xl font-semibold mb-6">Subscribe to Our Newsletter</h2>
      <p style={styles.p} className="font-normal pb-10 text-lg">Do not miss the information and news from us. Subscribe now!</p>
      </div>

      
<div className="px-2 md:px-0">
<div id="newsletter-banner" className="flex justify-center mb-48  max-w-sm  md:max-w-md  lg:max-w-xl mx-auto" style={styles.primary}>
    <div className=" mx-auto py-6 ">
        <form action="#" className="flex lg:w-[500px] items-center justify-between flex-row">
            <input type="email" id="email" placeholder="Enter your email" className="bg-white border-none outline-none text-gray-900 text-sm rounded-lg focus:outline-none focus:border-none p-3  dark:text-white" required />
            <button style={{backgroundColor:'#2A9D8F'}} type="submit" className="text-white focus:outline-none font-medium rounded-lg text-sm ml-6 md:ml-4  px-5 py-3 text-center ">Subscribe</button>
        </form>
    </div>
    
</div>
</div>

    </>
  );
};

export default Newsletter;
