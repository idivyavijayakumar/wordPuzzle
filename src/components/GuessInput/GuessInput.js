import { useState } from "react";

const GuessInput = ({ handleSubmitGuess, gameStatus }) => {
  const [tentativeGuess, setTentativeGuess] = useState("");
  // const name = "maryjane";
  // console.log(name.length);

  function handleSubmit(e) {
    e.preventDefault();

    if (tentativeGuess.length !== 5) {
      window.alert("Please enter exactly 5 characters");
    } else {
      // console.log(guess);
      handleSubmitGuess(tentativeGuess);
      setTentativeGuess("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        placeholder={gameStatus !== "running" ? "Game over" : "type ur guess"}
        disabled={gameStatus !== "running" ? true : false}
        required
        minLength={5}
        maxLength={5}
        // pattern="[A-Za-z]{5}"
        value={tentativeGuess}
        onChange={(e) => {
          const nextGuess = e.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
        id="guess-input"
        type="text"
      />
    </form>
  );
};

export default GuessInput;
