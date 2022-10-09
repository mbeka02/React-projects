import { useState } from "react";
import Scorecard from "./components/Scorecard";
import Section from "./components/Section";
import "./App.css";
import { useEffect } from "react";
import Endgame from "./components/Endgame";
import Rules from "./components/Rules";
import Modal from "./components/Modal";
import { AnimatePresence } from "framer-motion";

function App() {
  const [choice, setChoice] = useState("");
  const [score, setScore] = useState(0);
  const [isPlayed, setIsPlayed] = useState(false);
  const [game, setGame] = useState("");
  const [house, setHouse] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const arr = ["Rock", "Paper", "Scissors"];

  const makeChoice = (e) => {
    setChoice(e.target.dataset.id);
    makeHouse();
    setIsPlayed(true);
  };
  const makeHouse = () => {
    setHouse(arr[Math.floor(Math.random() * arr.length)]);
  };
  useEffect(() => {
    res();
  }, [choice]);

  const res = () => {
    if (choice === "Rock" && house === "Scissors") {
      setScore((prev) => prev + 1);
      setGame("you win");
    } else if (choice === "Scissors" && house === "Paper") {
      setScore((prev) => prev + 1);
      setGame("you win");
    } else if (choice === "Paper" && house === "Rock") {
      setScore((prev) => prev + 1);
      setGame("you win");
    } else if (choice === house) {
      setGame("Draw");
    } else {
      setGame("you lose");
    }
  };

  const newRound = () => {
    setIsPlayed(false);
    setChoice("");
  };

  const close = () => {
    setModalOpen(false);
  };
  const toggle = () => {
    setModalOpen((prev) => !prev);
  };
  return (
    <div className="App">
      <Scorecard score={score} />

      {isPlayed ? (
        <Endgame
          newRound={newRound}
          game={game}
          house={house}
          choice={choice}
        />
      ) : (
        <Section makeChoice={makeChoice} />
      )}
      <Rules modalOpen={modalOpen} toggle={toggle} />
      <AnimatePresence initial={false} mode={"wait"}>
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </div>
  );
}

export default App;
