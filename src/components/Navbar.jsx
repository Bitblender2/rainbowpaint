import logo from "../RB-Logo.png";
import Btn from "./Btn";

function Navbar() {
  return (
    <div className="Navbar ">
      <header>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/color">Color</a>
            </li>
            <li>
              <a href="/media">Media</a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-[30px]">
          <Btn btn="Get in touch" />
          <Btn
            Classname="bg-[#2e1065] text-white rounded-[10px] border-[none] hover:bg-white hover:text-[#2e1065]"
            btn="Paint Calculator"
          />
          {/* <button className="btn">Paint Calculator</button> */}
        </div>
      </header>
    </div>
  );
}

export default Navbar;
