import { getCategories } from "../api";
import { useEffect, useState } from "react";
import "../CSS/categories.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCategories().then((categories) => {
      setCategories(categories);
      setLoading(false);
    });
  }, []);

  return (
    <div className="product-categories">
      <h1 style={{ textAlign: "center", padding: "10px" }}>
        Product Categories
      </h1>
      <ul className="categories">
        {categories.map((category) => {
          return (
            <div key={category.category_id} className="category-card">
              <img
                src={category.image_url}
                alt="category picture"
                style={{ width: "200px", height: "200px" }}
              />
              <div>
                <h2>{category.category_name}</h2>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
