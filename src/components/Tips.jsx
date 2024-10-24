import Btn from "./Btn";
import Card from "./Card";
import "./Tips.css";
function Tips() {
  return (
    <div className="tips">
      <h3>PAINTING TIPS</h3>
      <p>Do it the right way</p>
      <div className="Cards">
        <Card />
      </div>
      <Btn btn="View More" />
    </div>
  );
}

export default Tips;
