import React, { useState, useEffect } from 'react'
import Button from "./Button";
import Counter from "./Counter";    
import Greeting from "./Greeting";
import { useNavigate } from 'react-router-dom';

const Home = () => {
      // state
  const [num, setNum] = useState(0);
  
//   const history = useNavigate(); // history 객체 생성


  useEffect(() => {
    //실행코드
    const nums = Math.floor(Math.random() * 10) + 1; // 1~10 랜덤 숫자 생성
    console.log("🚀 ~ Counter ~ num:", nums)
    setNum(nums); // 랜덤 숫자 state에 저장
  }, [])

  const handleClick = () => { 
    window.location.href = "/info"; // Info 페이지로 이동
  }

  return (
    <div>
        <h1>Home</h1>
        <button type='button' onClick={handleClick}>Info 페이지로 이동</button>
        <Greeting />
        <Button />
        <Counter num={num}/>
    </div>
  )
}

export default Home