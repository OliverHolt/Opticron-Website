import { getArticles } from "../api";
import { useEffect, useState } from "react";
import "../CSS/articles.css";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticles().then((article) => {
      setArticles(article);
      setLoading(false);
    });
  }, []);

  return (
    <ul className="main">
      {articles.map((article) => {
        return (
          <div key={article.article_id} className="article-card">
            <h2>{article.title}</h2>
            <br />
            <br />
            <img
              src={article.image_url}
              alt="Article picture"
              style={{ width: "200px", height: "200px" }}
            />
            <p>{article.description}</p>
            <button type="submit" className="article-button">
              View
            </button>
          </div>
        );
      })}
    </ul>
  );
};

export default Articles;
