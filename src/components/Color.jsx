import "./Color.css";
function Color() {
  return (
    <div className="Color">
      <div className="color-year">
        <Palette />
      </div>
      <div className="color-desc">
        <h2>Color of The Year</h2>
        <p>
          From This color of the year , we’re donating proceeds from the sale of
          every tin of paint and roll of wallpaper to our chosen charities.
          We’ve teamed up with Sofas & Stuff, Rose & Grey and Beards & Daisies
          to give you the chance to show your support and win an uplifting room
          transformation for you or a loved one.
        </p>
      </div>
    </div>
  );
}

function Palette() {
  return (
    <div className="palette">
      <div className="palete-color"></div>
      <div className="palete-desc">
        <h4>Encore</h4>
        <p>S 5040-B</p>
        <p>Color of the year</p>
      </div>
    </div>
  );
}

export default Color;
