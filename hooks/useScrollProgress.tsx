// "use client"
import React, { useState, useEffect } from "react";

const useScrollProgress = () => {
  const [completion, setCompletion] = useState<Number>(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        // @ts-ignore
        setCompletion(Number(currentProgress / scrollHeight).toFixed(2) * 100);
      }
    };

    window.addEventListener("scroll", updateScrollCompletion);
    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);
  return completion;
};

export default useScrollProgress;
