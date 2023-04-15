import React, { useEffect, useState } from "react";

const SomeData = () => {
  const [data, setData] = useState<undefined | any[]>();

  const fetchData = async () => {
    const resp = await fetch(`https://swapi.py4e.com/api/films/`);
    const data = await resp.json();
    setData(data.results);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log("data =", data);
  return (
    <div>
      {data &&
        data.map((item) => (
          <div>
            <h1>Title: {item.title}</h1>
            <h2>Epidsode: {item.episode_id}</h2>
            <h3>Director: {item.director}</h3>
            <h4>Opening crawl: {item.opening_crawl}</h4>
          </div>
        ))}
    </div>
  );
};

export default SomeData;
