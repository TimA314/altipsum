import React from "react";
import { useState } from "react";
import IpsumText from "../Components/IpsumText";
import { getLorem } from "../services/loremService";
import { getNews } from "../services/newsService";
import { getShakespeare } from "../services/shakespeare";
import "./Ipsum.css";

export default function Ipsum() {
  const [text, setText] = useState();

  function handleNewsGenerate(e) {
    e.preventDefault();
    getNews()
      .then((res) => {
        let data = res.data.articles.map(({ description }) => description);
        setText(data);
      })
      .catch((err) => console.log(err));
  }

  function handleShakespeareGenerate(e) {
    e.preventDefault();
    setText(getShakespeare());
  }

  function handleLoremGenerate(e) {
    e.preventDefault();
    setText(getLorem());
  }

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    alert("Text copied");
  };

  return (
    <div className="background">
      <h1>Ipsum</h1>
      <p>Generate Ipsum of your choice</p>
      <button onClick={copy}>Copy</button>
      <br />
      <button type="submit" className="btn" onClick={handleLoremGenerate}>
        Generate Lorem
      </button>
      <button type="submit" className="btn" onClick={handleShakespeareGenerate}>
        Generate Shakespeare
      </button>
      <button type="submit" className="btn" onClick={handleNewsGenerate}>
        Generate News
      </button>
      <IpsumText IpsumText={text} />
    </div>
  );
}
