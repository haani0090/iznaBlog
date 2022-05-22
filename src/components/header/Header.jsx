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
        src="https://images.pexels.com/photos/285814/pexels-photo-285814.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
    </div>
  );
}
