import React from "react";
import { useRouter } from "next/router";

const ArticlePage = () => {
  const router = useRouter();
  const { state } = router;
  const { articleId, title, content, status } = router;

  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="w-1/2 mt-10 mb-10 bg-white p-4">
      <h1 className="text-[32px] text-center">{title}</h1>
      <h4 className="my-4"><span>STATUS: </span>{status}</h4>
      <p>{content}</p>
      </div>
    </div>
  );
};

export default ArticlePage;
