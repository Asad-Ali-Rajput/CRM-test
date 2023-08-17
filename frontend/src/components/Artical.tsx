import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface ArticleProps {
    articleId: string;
    title: string;
    author: string;
    date: string;
    content: string;
    status: string;
  }

const ArticalCard: React.FC<ArticleProps> = ({ articleId, title, author, date, content, status }) => {
  const articleUrl = `/articles/${articleId}`;
  const [articleData] = useState({
    articleId: articleId,
    title: title,
    content: content,
    status: status,
  });
  const router = useRouter();
  const handleCardClick = () => {
    router.push({
      pathname: `/articles/${articleId}`,
      query:articleData,
      
    });
  };
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" onClick={handleCardClick}>
      {/* <Link href={articleUrl}> */}
        <>
          <article className="overflow-hidden rounded-lg shadow-lg">
          {/* <a href="#"> */}
           <Image
             alt="Placeholder"
             className="block h-auto w-full"
             width={200}
             height={200}
             src=""
           />
         {/* </a> */}
            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 className="text-lg">
                <p className="no-underline hover:underline text-black">
                  {title}
                </p>
              </h1>
              <p className="text-grey-darker text-sm">{date}</p>
            </header>

            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
              <div className="flex items-center no-underline hover:underline text-black">
                <p className="ml-2 text-sm">{author}</p>
              </div>
              <div
             className="no-underline text-grey-darker hover:text-red-dark"
             
           >
             <span className="hidden">Like</span>
             <i className="fa fa-heart"></i>
           </div>
            </footer>
          </article>
        </>
      {/* </Link> */}
    </div>
  );
};

export default ArticalCard;
