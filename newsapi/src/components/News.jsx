import React, { useEffect, useState } from "react";
import Card from "./Card";
import Nav from "./Nav";

const News = ({ category }) => {
  console.log(category);
  const [data1, setdata1] = useState([]);
  const api = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=bfc012c15f26498682bc3604ce8e6b35`;
  async function fetchapi() {
    const res = await fetch(api);
    const data1 = await res.json();
    console.log(data1);
    setdata1(data1.articles);

    // console.log(data1.articles);
  }
  useEffect(() => {
    fetchapi();
  }, [category]);
  return (
    <div>
      <div className="container">
        <div className="row">
          {data1.map((ele, index) => (
            <div className="col">
              <Card
                key={index}
                src={ele.urlToImage}
                title={ele.title}
                para={ele.description}
                url={ele.url}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
