import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <h1>
        此網站使用react所製作的一頁式網站 ，去fetch 來自pexel
        的API，並且可以使用關鍵字去搜索特定圖片網站，版面配置等皆使用的是來自講師所提供的資源
      </h1>

      <Link to="https://www.pexels.com/zh-tw/">
        <h2>
          <h3>特別感謝: pexels</h3>
        </h2>
      </Link>
    </div>
  );
};

export default About;
