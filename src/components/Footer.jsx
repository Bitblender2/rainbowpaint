import logo from "../RB-Logo.png";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="upper">
        <div className="snap">
          <Logo />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            dolorum soluta vitae exercitationem asperiores, hic mollitia sequi
            laudantium. Id, quo.
          </p>
          <Socilas />
        </div>
        <Links />
        <Contact />
        <Newsletter />
      </div>
      <Rights />
    </div>
  );
}
function Socilas() {
  return (
    <div className="socials">
      <box-icon type="logo" name="twitter" color="white"></box-icon>
      <box-icon type="logo" name="facebook" color="white"></box-icon>
      <box-icon type="logo" name="instagram" color="white"></box-icon>
    </div>
  );
}

function Links() {
  return (
    <div className="imp-links">
      <h3>Important links</h3>
      <div className="links">
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/media">Media</a>
          </li>
          <li>
            <a href="/carear">Carear</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
function Contact() {
  return (
    <div className="Cont">
      <h3>Contact</h3>
      <div className="contact">
        <p>Blantyre Office</p>
        <p> Along Masuko Chipembere Highway, Limbe, Malawi</p>
        <p>+(265) 0 887 375 743</p>
      </div>
    </div>
  );
}

function Newsletter() {
  return (
    <div className="newsletter">
      <div className="desc">
        <h3>Newsletter</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          reiciendis eveniet magnam in rerum possimus .
        </p>
      </div>
      <div className="email">
        <input type="email" placeholder="Enter your email" />
        <button className="sub">
          <a href="/submit">Subscribe</a>
        </button>
      </div>
    </div>
  );
}
function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
  );
}
function Rights() {
  return (
    <div className="rights">
      <p>© 2024 RainBow Paints. All Rights Reserved</p>
    </div>
  );
}

export default Footer;
