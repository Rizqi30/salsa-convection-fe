import Hero from "../../assets/hero.jpg";
import "./jumbotron.css";

function Jumbotron() {
  return (
    <div className="jumbotron-container my-4">
      <img src={Hero} alt="hero picture" className="hero-image" />
    </div>
  );
}

export default Jumbotron;
