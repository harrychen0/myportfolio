import "./portfolio.scss"
import PortfolioList from "../portfoliolist/PortfolioList";
import { useEffect, useState } from "react";
import {
  // featuredPortfolio,
  trailgrailPortfolio,
  sitestickyPortfolio,
  jobsPortfolio,
  // otherPortfolio
} from "../../data";

export default function Portfolio() {

  const [selected, setSelected] = useState("trailgrail");
  const [data, setData] = useState([]);

  const list = [
    // {
    //   id: "featured",
    //   title: "Featured",
    // },
    {
      id: "trailgrail",
      title: "Trailgrail",
    },
    {
      id: "sitesticky",
      title: "SiteSticky",
    },
    {
      id: "jobs",
      title: "Internships",
    },
    // {
    //   id: "other",
    //   title: "Other",
    // },
  ];

  useEffect(() => {
    switch (selected) {
      // case "featured":
      //   setData(featuredPortfolio);
      //   break;
      case "trailgrail":
        setData(trailgrailPortfolio);
        break;
      case "sitesticky":
        setData(sitestickyPortfolio);
        break;
      case "jobs":
        setData(jobsPortfolio);
        break;
      // case "other":
      //   setData(otherPortfolio);
      //   break;
      default:
        setData(trailgrailPortfolio);
        // setData(featuredPortfolio);
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
