import React from "react";
import forest from '../../../assets/forest.png'
import tree1 from '../../../assets/tree1.png'
import tree2 from '../../../assets/tree2.png'
import tree3 from '../../../assets/tree3.png'
import tree4 from '../../../assets/tree4.png'
import { Link } from "react-router-dom";
import './Blog.css'
const Blog = () => {

 



  const styles = {
    primary: {
      color: "#2A9D8F",
    },
    secondary: {
      color: "#4D4D4D",
    },
    paraColor: {
      color: "#656565",
    },
  };
  return (
    <>
      <div className="pt-24 pb-10 pl-10 pr-6 md:pr-0 md:pl-24 md:text-left text-center">
        <h3 style={styles.primary} className="text-2xl mb-4 font-medium">
        Explore the Events
        </h3>
        <h2 style={styles.secondary} className="font-semibold mb-5 text-4xl">
          Latest News, Articles & Events
        </h2>
        <p style={styles.paraColor} className="font-normal text-xl">
          Read and follow the events and programs that we do for a better earth
        </p>
      </div>
     <div className="grid md:grid-cols-2 gap-10 px-10 md:px-24">
      <div>
      <img className="pb-6" src={forest} alt='picture of forest'/>
      <h3 style={styles.secondary} className="font-medium mb-5 text-2xl">Save Forests for a Healthy and Beautiful Earth</h3>
      <p style={styles.paraColor} className="text-justify mb-6 md:mb-0 w-full md:w-4/5  pb-4 text-xl">Forests have many benefits for all of us. But looking at the current data, the worlds forests, especially in Indonesia, are starting to be threatened. To not cause more severe damage we must prevent it in a way.</p>
      </div>
      <div className="blogs">
      {/* blog--->1 */}
          <div className="flex mb-12">
            <div className="pr-6">
              <h3 style={styles.secondary} className="text-xl mb-6 font-medium">Get to know the definition, function and types of forest</h3>
              <p style={styles.paraColor} className="text-lg">1 January 2022</p>
            </div>
            <div>
               <img src={tree1} alt='tree image 1'/>
            </div>
          </div>
      {/* blog--->2 */}
          <div className="flex mb-12">
            <div className="pr-6">
              <h3 style={styles.secondary} className="text-xl mb-6 font-medium">Climbing Mount Ciremai with Growing for Environment</h3>
              <p style={styles.paraColor} className="text-lg">10 December 2021</p>
            </div>
            <div>
               <img src={tree2} alt='tree image 2'/>
            </div>
          </div>
      {/* blog--->3 */}
          <div className="flex mb-12">
            <div className="pr-6">
              <h3 style={styles.secondary} className="text-xl mb-6 font-medium">Program: Training on Planting and Caring for Trees</h3>
              <p style={styles.paraColor} className="text-lg">9 December 2021</p>
            </div>
            <div>
               <img src={tree3} alt='tree image 3'/>
            </div>
          </div>
      {/* blog--->4 */}
          <div className="flex">
            <div className="pr-6">
              <h3 style={styles.secondary} className="text-xl mb-6 font-medium">Growing To Become The Best Earth Care Platform Version of ccin</h3>
              <p style={styles.paraColor} className="text-lg">1 December 2022</p>
            </div>
            <div>
               <img src={tree4} alt='tree image 4'/>
            </div>
          </div>
      </div>
      </div>
      <div className="w-60 mx-auto text-center mt-20 pb-20">
        <Link  to='/allnews' className="px-8 py-3 explore-btn  font-normal rounded-lg border  border-green-600 outline-none focus:border-none focus:outline-none">Explore More News</Link>
      </div>
    </>
  );
};

export default Blog;
