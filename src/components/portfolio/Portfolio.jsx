import "./portfolio.scss"
import PortfolioList from "../portfoliolist/PortfolioList";
import { useEffect, useState } from "react";
import {
  featuredPortfolio,
  yelpcampPortfolio,
  sitestickyPortfolio,
  engineeringPortfolio,
  otherPortfolio
} from "../../data";

export default function Portfolio() {

  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "yelpcamp",
      title: "YelpCamp",
    },
    {
      id: "sitesticky",
      title: "SiteSticky",
    },
    {
      id: "engineering",
      title: "Engineering",
    },
    {
      id: "other",
      title: "Other",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "yelpcamp":
        setData(yelpcampPortfolio);
        break;
      case "sitesticky":
        setData(sitestickyPortfolio);
        break;
      case "engineering":
        setData(engineeringPortfolio);
        break;
      case "other":
        setData(otherPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }

  }, [selected])

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map(item => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map(d => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
