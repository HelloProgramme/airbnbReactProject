import React, { memo, useEffect, useState } from "react";

import Myrequest from "@/services";
const home = memo(() => {
  // 定义状态
  const [highScore, setHighScore] = useState({});

  // 写上空数组，表示没有依赖，只执行一次
  useEffect(() => {
    console.log("home的回调函数");
    Myrequest.get({ url: "/home/highscore" }).then((result) => {
      console.log(result);
      setHighScore(result);
    });
  }, []);

  return (
    <div>
      <h2>home</h2>
      <p>标题：{highScore.title}</p>
      <ul>
        {highScore?.list?.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
});

export default home;
