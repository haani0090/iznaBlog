import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Welcome To World Of </span>
        <span className="headerTitleLg">Izna Blog🔥</span>
      </div>
      <img
        className="headerImg"
        src="https://www.pexels.com/photo/person-sitting-facing-laptop-computer-with-sketch-pad-57690/"
        alt=""
      />
    </div>
  );
}
