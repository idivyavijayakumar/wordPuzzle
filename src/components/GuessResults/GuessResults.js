import { range } from "../../utils";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

const GuessResults = ({ guesses, answer }) => {
  // console.log(range(NUM_OF_GUESSES_ALLOWED));

  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess
          answer={answer}
          key={num}
          guess={guesses[num] ? guesses[num].value : undefined}
        />
      ))}
    </div>
  );
};

export default GuessResults;
