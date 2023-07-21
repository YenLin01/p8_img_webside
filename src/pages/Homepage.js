import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/Search";
import Picture from "../components/Picture";

const Homepage = () => {
  let [data, setData] = useState(null);
  let [page, setPage] = useState(1);
  let [input, setInput] = useState();
  let [currentSearch, setCurrentSearch] = useState("");
  let initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  let searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;
  let authKey = "ivan7CkUhJwIu3V8FfUbUBtuXLh7YnrqASvbYQGau78uIUpigFkfdSAX";

  const morePicture = async (url) => {
    let newURL;
    setPage(page + 1);
    if (currentSearch === null) {
      newURL = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${
        page + 1
      }`;
    }
    let result = await axios.get(newURL, {
      headers: { Authorization: authKey },
    });
    setData(data.concat(result.data.photos));
  };

  useEffect(() => {
    search(initialURL);
  }, []);

  const search = async (url) => {
    let result = await axios.get(url, {
      headers: { Authorization: authKey },
    });
    setData(result.data.photos);
    setCurrentSearch(input);
  };
  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          search(searchURL);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
      <div className="morePicture">
        <button onClick={morePicture}>more!!</button>
      </div>
    </div>
  );
};

export default Homepage;
