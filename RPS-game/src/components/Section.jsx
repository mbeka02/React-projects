import Rock from "../images/icon-rock.svg";
import Paper from "../images/icon-paper.svg";
import Scissors from "../images/icon-scissors.svg";

export default function Section({ makeChoice }) {
  return (
    <div className="image-container">
      <div data-id="Rock" onClick={makeChoice} className="rock"></div>

      <div data-id="Paper" onClick={makeChoice} className="paper"></div>

      <div data-id="Scissors" onClick={makeChoice} className="scissors"></div>
    </div>
  );
}
