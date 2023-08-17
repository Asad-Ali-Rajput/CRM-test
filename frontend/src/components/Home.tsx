import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ArticalCard from "./Artical";
import Link from "next/link";

const HomeUI = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    
    if (token) {
      fetch("http://localhost:8080/content/", {
        method: "GET",
        headers: {
          Authorization: `${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          setArticles(data); // Assuming the response structure has an "articles" key
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="container max-w-full max-h-full mt-20 mx-auto px-4 md:px-12">
        <Link href="/addarticle">
          <div className="flex justify-center w-44 items-center px-6 py-2 rounded-lg text-slate-50 bg-indigo-600">
            <span className="pr-3">+</span>
            Add Article
          </div>
        </Link>
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {articles ? articles.map((article: any) => (
            <ArticalCard
              key={article.id}
              articleId={article.id}
              title={article.title}
              author={article.author}
              date={article.date}
              content={article.content}
              status={article.status}
            />
          )) : null}
        </div>
      </div>
    </>
  );
};

export default HomeUI;
