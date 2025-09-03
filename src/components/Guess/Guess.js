import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

const Cell = ({ letters, status }) => {
  const className = status ? `cell ${status}` : `cell`;
  return <span className={className}>{letters}</span>;
};

const Guess = ({ guess, answer }) => {
  const result = checkGuess(guess, answer);

  console.log(result);
  return (
    <div>
      <p className="guess">
        {range(5).map((num) => (
          <Cell
            key={num}
            letters={result ? result[num].letter : undefined}
            status={result ? result[num].status : undefined}
          />
        ))}
      </p>
    </div>
  );
};

export default Guess;
