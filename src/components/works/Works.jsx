import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
    const data=[
      {
        id: "1",
        icon: "./assets/mobile.png",
        title: "Full Stack Developer",
        desc: "Created fully functionable websites using frontend and backend technologies. This includes E-commerce website and portfolio",
        img: "https://www.scnsoft.com/application-development/desktop-app-development/how-to-make-a-desktop-app_cover_upd.svg",
      },
      {
        id: "2",
        icon: "./assets/globe.png",
        title: "Backend Developer",
        desc: "Having strong grasp in backed technologies like Java, Java web development, Java backend, Spring-boot, hibernate and many more which helps me to create many functionalable and acceptable projects.",
        img: "https://www.qualdev.com/wp-content/uploads/2020/02/Web-Development-101-What-Does-a-Web-Development-Company-Do.jpg",
      },
      {
        id: "3",
        icon: "./assets/writing.png",
        title: "SDET/SDE",
        desc: "Strong command in API creation using Spring and React. Knowledge in SDET technologies with writing various automated scripts.",
        img: "https://www.technotification.com/wp-content/uploads/2018/04/software-developer-vs-software-engineer.jpg",
      },
    ];

    const handleClick = (way)=>{
      way === "left" 
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
      setCurrentSlide(currentSlide < data.length-1 ? currentSlide + 1 : 0);
    };
  return (
    <div className='works' id="works">
      <div className="slider" style={{transform: `translateX(-${currentSlide *100}vw)`}}>
        {data.map((d) =>(
          <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt=""/>
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src={d.img} alt=""/>
            </div>
          </div>
        </div>
        ))}
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick("")} />
    </div>
  );
}
