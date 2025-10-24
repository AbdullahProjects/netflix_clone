import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import HeroImage from '../../assets/hero_banner.jpg'
import HeroTitle from '../../assets/hero_title.png'
import PlayIcon from '../../assets/play_icon.png'
import InfoIcon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
        {/* Navbar */}
        <Navbar/>

        {/* Hero Section */}
        <div className="hero">
            <img src={HeroImage} alt="" className='banner-image' />
            <div className="hero-caption">
                <img src={HeroTitle} alt="" className='caption-img' />
                <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial. There's always something new to discover and new TV shows and movies are added every week!</p>
                <div className="hero-btns">
                    <button className="btn"><img src={PlayIcon} alt="" />Play</button>
                    <button className="btn dark-btn"><img src={InfoIcon} alt="" />Info</button>
                </div>
                <TitleCards/>
            </div>
        </div>

        <div className="more-cards">
          <TitleCards title={"Blockbuster Movies"}/>
          <TitleCards title={"Only on Netflix"}/>
          <TitleCards title={"Upcomming"}/>
          <TitleCards title={"Top Pics For You"}/>
        </div>

        <div className="divider"></div>

        <Footer/>
    </div>
  )
}

export default Home