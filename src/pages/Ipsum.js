import React from "react";
import { useState } from "react";
import { getNews } from "../services/newsService";
import "./Ipsum.css";

export default function Ipsum() {
  const [newsData, setNewsData] = useState();

  function handleNewsGenerate(e) {
    e.preventDefault();
    getNews()
      .then((res) => setNewsData(res.data.articles))
      .catch((err) => console.log(err));
    console.log(newsData);
  }

  return (
    <div className="background">
      <h1>Ipsum</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Paragraphs:
          </label>
          <input
            type="number"
            className="form-control"
            name="amount"
            placeholder="5"
          ></input>
          <button type="submit" className="btn" onClick={handleNewsGenerate}>
            Generate
          </button>
        </div>
      </form>
      <article></article>
    </div>
  );
}
