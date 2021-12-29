import React from "react";
import { useState } from "react";
import IpsumText from "../Components/IpsumText";
import { getNews } from "../services/newsService";
import "./Ipsum.css";

export default function Ipsum() {
  const [newsData, setNewsData] = useState();

  function handleNewsGenerate(e) {
    e.preventDefault();
    getNews()
      .then((res) => {
        // console.log(res.data.articles);
        let data = res.data.articles.map(({ description }) => description);
        setNewsData(data);
      })
      .catch((err) => console.log(err));
    console.log(newsData);
  }

  return (
    <div className="background">
      <h1>Ipsum</h1>
      <br />
      <button type="submit" className="btn" onClick={handleNewsGenerate}>
        Generate
      </button>
      <IpsumText IpsumText={newsData} />
    </div>
  );
}
