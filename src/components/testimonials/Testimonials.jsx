import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name : "Roxane Gay",
      title: "Business Man",
      img: "https://freedesignfile.com/upload/2018/07/Beautiful-girl-in-the-blossoming-garden-Stock-Photo-01.jpg",
      icon: "assets/youtube.png",
      desc: "You have to be consistent. You have to be yourself. You have to be committed to what you're doing. You have to not be afraid to be ambitious"
    },
    {
      id: 2,
      name : "Hannah Lavon",
      title: "Founder of Pals Socks",
      img: "https://images.hindustantimes.com/img/2022/08/02/550x309/Katrina_Kaif_1659431467488_1659431467711_1659431467711.jpg",
      icon: "assets/linkedin.png",
      desc: "A flower does not think of competing with the flower next to it. It just blooms. Don't be afraid. Be focused. Be determined. Be hopeful. Be empowered.",
      featured : true,
    },
    {
      id: 3,
      name : "Jeniffer winget",
      title: "President of Garden Streets",
      img: "https://www.tellychakkar.com/sites/www.tellychakkar.com/files/images/story/2020/06/09/Jennifer-Winget.jpg",
      icon: "assets/twitter.png",
      desc: "Run your own race. Don't be distracted by what others are doing.  Set and go after your own goals"
    },
  ]
  return (
    <div className='testimonials' id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((p) => (
          <div className={p.featured ? "card featured": "card"}>
          <div className="top">
            <img src="assets/down-right-arrow.png" className="left"/>
            <img src={p.img} className="user"/>
            <img src={p.icon} className="right"/>
          </div>
          <div className="center">
            {p.desc}
          </div>
          <div className="bottom">
            <h3>{p.name}</h3>
            <h4>{p.title}</h4>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}
