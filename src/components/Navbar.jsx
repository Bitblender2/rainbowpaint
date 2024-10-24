import logo from "../RB-Logo.png";
import Btn from "./Btn";

function Navbar() {
  return (
    <div className="w-full">
      <header className="w-full flex items-center justify-between bg-white shadow-[rgba(0,0,0,0.24)_0px_3px_8px] px-[30px] py-0;">
        <div className="logo">
          <img src={logo} alt="logo" className="w-[200px]" />
        </div>
        <nav>
          <ul className="flex items-center gap-[30px] text-[1.2rem] text-[#2e1065] font-medium">
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Color</li>
            <li>Media</li>
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
