// import './App.css';

import Button from "./Button";
import Counter from "./Counter";
import Greeting from "./Greeting";
import React, { useEffect, useState } from "react";

function App() {

  // state
  const [num, setNum] = useState(0);


  useEffect(() => {
    //실행코드
    const nums = Math.floor(Math.random() * 10) + 1; // 1~10 랜덤 숫자 생성
    console.log("🚀 ~ Counter ~ num:", nums)
    setNum(nums); // 랜덤 숫자 state에 저장
  }, [])


  return <div>
    <Greeting />
    <Button />
    <Counter num={num}/>
  </div>;
}

export default App;
