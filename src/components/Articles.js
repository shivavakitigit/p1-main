import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";

const Articles = () => {
  const noOfArticles = 8;
  const [articles, setArticles] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  const fetchArticleImages = async (title) => {
    const apiKey = process.env.REACT_APP_IMG_API_KEY;
    const cx = process.env.REACT_APP_CX_API_KEY;

    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${title}&searchType=image`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.items.map((item) => item.link).slice(0, 1);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    // const fetchArticles = () => {
    //   //const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;
    //   // const NEWS_API_KEY2 = process.env.REACT_APP_NEWS_API_KEY2;
    //   fetch(`https://newsapi.org/v2/everything?q=f1&sortBy=relevance&language=en`, {
    //     headers: {
    //       "x-api-key": "35b375c55dc24b02b8cfb82232e933d9",
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       const articleData = data.articles.slice(0, noOfArticles);
    //       setArticles(articleData);
    //       return Promise.all(articleData.map((article) => fetchArticleImages(article.title)));
    //     })
    //     .then((imageUrlsData) => setImageUrls(imageUrlsData))
    //     .catch((err) => console.error(err));
    // };

    const fetchArticles = () => {
      const apiKey = "49cabf7a99106c000ebb01cba0299bd9";
      fetch(
        `https://gnews.io/api/v4/top-headlines?q=formula+one&lang=en&max=${noOfArticles}&category=sports&apikey=` +
          apiKey
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("🚀 ~ file: Articles.js:35 ~ .then ~ data:", data);

          const articleData = data.articles.slice(0, noOfArticles);
          setArticles(articleData);
          return Promise.all(articleData.map((article) => fetchArticleImages(article.title)));
        })
        .then((imageUrlsData) => setImageUrls(imageUrlsData))
        .catch((err) => console.error(err));
    };

    fetchArticles();
  }, []);

  return (
    <div className="articles-wrap row">
      {articles.map((article, i) => (
        <ArticleCard key={i} article={article} imageUrls={imageUrls[i]} />
      ))}
    </div>
  );
};

export default Articles;
