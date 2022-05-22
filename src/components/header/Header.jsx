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
        src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtpbmclMjBvbiUyMGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&h=650&w=940"
        alt=""
      />
    </div>
  );
}
