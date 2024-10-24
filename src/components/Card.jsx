import image from "../assets/fading-384x250.jpg";
import "boxicons";

function Card() {
  const items = [
    {
      title: "Lefflorescence",
      description:
        "Efflorescence consists of soluble salts formed on the surface of plaster or brick work by the evaporation of water. .",
    },
    {
      title: "Fading Tips",
      description:
        "Subjective term used to describe the lightening of the color of a pigmented paint following exposure to light, heat, time, temperature, chemicals, etc.",
    },
    {
      title: "Lapping",
      description:
        "Appearance of a denser color or increased gloss where wet and dry layers overlap during paint application.",
    },
  ];
  return (
    <>
      {items.map((item) => (
        <div className="card">
          <div className="card-img">
            <img src={image} alt="mapped" />
          </div>

          <h3>{item.title}</h3>
          <p>{item.description}</p>

          <div className="learn-more">
            <a href="/learn-more">Learn more</a>
            <box-icon name="right-arrow-alt"></box-icon>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
