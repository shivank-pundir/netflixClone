import React from "react";
import "./home.css";
import Navbar from "../../Navbar/Navbar.jsx";
import hero_banner from "../../../assests/hero_banner.jpg";
import hero_title from "../../../assests/hero_title.png";
import play_icon from "../../../assests/play_icon.png";
import info_icon from "../../../assests/info_icon.png";
import TitleCards from "../../TitleCards/TitleCards.jsx";
import Footer from "../../Footer/Footer.jsx";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="hero-img" />
      </div>
      <div className="hero-caption">
        <img src={hero_title} alt="" className="caption-img" />
        <p>
          Perhaps more than any other genre of movie, science-fiction films are
          a treat for the eyes, dazzling audiences with breathtaking special
          effects, fantastic technology, and far-off worlds
        </p>
        <div className="hero-btns">
          <button className="btn">
            <img src={play_icon} alt="" />
            Play
          </button>
          <button className="btn dark-btn">
            <img src={info_icon} alt="" />
            More Info
          </button>
          
        </div>
        <div className="title-cards">
                  <TitleCards />

        </div>
      </div>
      
        <div className="more-card">
          <TitleCards title={"Blockbuster Movies"} category="top_rated" />
          <TitleCards title={"Only on Netflix"} category="popular" />
          <TitleCards title={"Upcoming"} category="upcoming" />
          <TitleCards title={"Top Picks for you"} category="now_playing" />
        </div>
      
      <Footer />
    </div>
  );
};

export default Home;
