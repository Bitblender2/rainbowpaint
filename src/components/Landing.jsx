import Btn from "./Btn";

function Landing() {
  return (
    <div className="Home">
      <div className="heading">
        <h1 className="text-[4rem] text-white text-center">
          BEAUTIFYING MALAWI SINCE 1990
        </h1>
        <Btn btn="Read Our Story" Classname="btn" />
      </div>

      <div className="floting">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
}

export default Landing;
