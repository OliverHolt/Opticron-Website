import axios from "axios";

const myApi = axios.create({
  baseURL: "http://localhost:5000",
});

export const getArticles = () => {
  return myApi.get("/api/articles").then(({ data }) => {
    return data.articles;
  });
};

export const getSpecialOffers = () => {
  return myApi.get("/api/specialoffers").then(({ data }) => {
    return data.specialOffers;
  });
};

export const getCategories = () => {
  return myApi.get("/api/categories").then(({ data }) => {
    return data.categories;
  });
};
