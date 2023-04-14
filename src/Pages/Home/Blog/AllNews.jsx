import { useState, useEffect } from "react";
import SingleNews from "./SingleNews";

const AllNews = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("/public/news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-4xl text-black mt-5 mb-10 text-center">All News</h2>
      <div className="grid lg:grid-cols-3 md:gap-10 px-5 md:grid-cols-2 grid-cols-1 ">
      {news &&
        news?.map(singleNews => <SingleNews key={singleNews.id} singleNews={singleNews}></SingleNews>)
      }
      </div>
    </div>
  );
};

export default AllNews;
