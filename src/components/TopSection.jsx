import logo from "../images/Troll.png";

export default function TopSection() {
  return (
    <header>
      <nav>
        <div className="header-img">
          <img src={logo} alt="" />
          <p>Meme Generator</p>
        </div>
        <p className="header-title">React Course - Project 3</p>
      </nav>
    </header>
  );
}
