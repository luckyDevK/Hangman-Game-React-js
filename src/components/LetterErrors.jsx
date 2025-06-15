const LetterErrors = ({ wrongLetters }) => {
  return (
    <>
      <div className="absolute right-5 top-14">
        <h3 className="text-2xl font-semibold">Wrong</h3>
        <p className="text-xl">{wrongLetters.map((letter) => letter).join()}</p>
      </div>
    </>
  );
};

export default LetterErrors;
