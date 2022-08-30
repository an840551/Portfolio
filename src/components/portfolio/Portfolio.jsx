import { useEffect, useState } from "react";
import PortfolioList from "../portfoliolist/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured"
    },
    {
      id: "developer",
      title: "Developer"
    },
    {
      id: "web",
      title: "Web App"
    },
    {
      id: "desktop",
      title: "Desktop App"
    },
    {
      id: "designer",
      title: "Designer"
    },
    {
      id: "creator",
      title: "Creator"
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "developer":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "desktop":
        setData(mobilePortfolio);
        break;
      case "designer":
        setData(designPortfolio);
        break;
      case "creator":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
        break;
    }
  }, [selected]);

  return (
    <div className='portfolio' id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {
          list.map((item) => (
            <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
          ))
        }
      </ul>
      <div className="container">
        {data.map((d) => (
        <div className="item">
          <img src= {d.img}
            alt="" />
          <h3>{d.title}</h3>
        </div>
        ))}
      </div>
    </div>
  )
}
