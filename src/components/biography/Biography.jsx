import "./biography.scss"

export default function Biography() {
  const data = [
    {
      id: 1,
      title: "My background",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      desc:
        "With an unorthodox background primarily in civil engineering, I have experience being the end user of industry software such as AutoCAD, Civil3D and more. I hope to bring these skills to a front-end or full stack position and help alleviate issues to bring clients what they need.",
    },
    {
      id: 2,
      title: "Why do I code?",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      desc:
        "During the pandemic, I began to consider a career change due to a lack of jobs in the civil engineering industry. By seeing the impact that some of my peers had by working on the vaccine-ontario charity project to make such a large impact with their coding skills, I began to rekindle my interest in using my skills to make real change in the world.",
      featured: true,
    },
    {
      id: 3,
      title: "My Skills",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      desc:
        "Having worked in many different fields in past co-ops, I bring strong communication and collaboration skills. I'm never afraid to face new challenges or ask for help, and as a life long learner, I look forward to learning something new everyday.",
    },
  ];
  return (
    <div className="biography" id="biography">
      <h1>About Me<span> (Tap photos to learn more!)</span></h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img
                className="main"
                src={d.img}
                alt=""
              />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}