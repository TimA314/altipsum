import axios from "axios";

const apiKey = "afdbc3f84d3f432b9bacd1050a118c6f";

let getNews = () => {
  const config = {
    method: "GET",
    url: "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=" + apiKey,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

export { getNews };
