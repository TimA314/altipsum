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
        let data = res.data.articles.map(({ description }) => description);
        setNewsData(data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="background">
      <h1>Ipsum</h1>
      <p>Generate Ipsum of your choice</p>
      <br />
      <button type="submit" className="btn" onClick={handleNewsGenerate}>
        Generate News
      </button>
      <IpsumText IpsumText={newsData} />
    </div>
  );
}
