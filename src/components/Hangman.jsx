const Hangman = ({ step }) => {
  const getDisplayValue = (step, target) => {
    return step > target ? "inline" : "none";
  };

  return (
    <>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="150"
          height="300"
          viewBox="0 0 200 350"
        >
          {/* Base */}
          <line
            x1="20"
            y1="330"
            x2="180"
            y2="330"
            stroke="white"
            strokeWidth="6"
          />

          {/* Vertical post */}
          <line
            x1="60"
            y1="330"
            x2="60"
            y2="40"
            stroke="white"
            strokeWidth="6"
          />

          {/* Horizontal post */}
          <line
            x1="60"
            y1="40"
            x2="160"
            y2="40"
            stroke="white"
            strokeWidth="6"
          />

          {/* Hanging rope */}

          <line
            x1="160"
            y1="40"
            x2="160"
            y2="90"
            stroke="white"
            strokeWidth="6"
            display={getDisplayValue(step, 0)}
          />

          {/* Head */}

          <circle
            cx="160"
            cy="120"
            r="25"
            stroke="white"
            strokeWidth="5"
            fill="none"
            display={getDisplayValue(step, 1)}
          />

          {/* Body */}

          <line
            x1="160"
            y1="145"
            x2="160"
            y2="230"
            stroke="white"
            strokeWidth="5"
            display={getDisplayValue(step, 2)}
          />

          {/* Left arm */}

          <line
            x1="160"
            y1="160"
            x2="130"
            y2="200"
            stroke="white"
            strokeWidth="5"
            display={getDisplayValue(step, 3)}
          />

          {/* Right arm */}

          <line
            x1="160"
            y1="160"
            x2="190"
            y2="200"
            stroke="white"
            strokeWidth="5"
            display={getDisplayValue(step, 4)}
          />

          {/* {Left leg} */}
          <line
            x1="160"
            y1="230"
            x2="140"
            y2="280"
            stroke="white"
            strokeWidth="5"
            display={getDisplayValue(step, 5)}
          />

          {/* Right leg */}

          <line
            x1="160"
            y1="230"
            x2="180"
            y2="280"
            stroke="white"
            strokeWidth="5"
            display={getDisplayValue(step, 6)}
          />
        </svg>
      </div>
    </>
  );
};

export default Hangman;
