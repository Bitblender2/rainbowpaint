import "boxicons";
import image from "./assets/fading-384x250.jpg";

function Card() {
  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt="mapped" />
      </div>
      <div className="card-body">
        <h2>Card Title</h2>
        <p>Card Description</p>
      </div>
      <div className="learn-more">
        <a href="/learn-more">Learn more</a>
        <box-icon name="right-arrow-alt"></box-icon>
      </div>
    </div>
  );
}

export default Card;
