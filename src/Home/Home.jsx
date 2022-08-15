import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import Cards from "../Cards/Cards";
import Popular from "../Popular/Popular";
import Carousel from "../Carousel/Carousel";
const apikey = "841ce5600131e8ed0e4f432f1a8bf713";
const popapi = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`;
const trendapi = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=1`;
function Home() {
  const [pop, setpop] = useState(false);
  const [trend, settrend] = useState(false);
  const [text, settext] = useState({
    pophead: "List of Popular Movies",
    trendhead: "List of Trending Movies",
    pop: "Show Popular",
    trend: "Show trending",
  });
  const clickpop = (event) => {
    
    if(text.pop == "Show Popular")
    {
      
      settext(prevState => ({
        ...prevState,
        pop: "Hide Popular"
    }));
    }
    else if(text.pop == "Hide Popular")
    {
      settext(prevState => ({
        ...prevState,
        pop: "Show Popular"
    }));
      
    }
    else{}
    console.log("deactive")
    event.currentTarget.classList.toggle('notactive');
    
    setpop((prev) => !prev);
    
  };
  const clicktrend = (event) => {
    if(text.trend == "Show trending")
    {
      
      settext(prevState => ({
        ...prevState,
        trend: "Hide trending"
    }));
    }
    else if(text.trend == "Hide trending")
    {
      settext(prevState => ({
        ...prevState,
        trend: "Show trending"
    }));
      
    }
    else{}
    event.currentTarget.classList.toggle('notactive');
    settrend((prev) => !prev);
  };
  return (
    <>
      <div className="navv">
        {" "}
        <Navbar />
      </div>
      <div className="butn">
        <span onClick={clickpop}><button  >{text.pop}</button></span>
        <span onClick={clicktrend}><button >{text.trend}</button></span>
      </div>
      <Carousel />
      {pop ? <Popular text={text.pophead} value={popapi} /> : ""}
      {trend ? <Popular text={text.trendhead} value={trendapi} /> : ""}
    </>
  );
}

export default Home;
