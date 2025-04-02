const Options = ({ updateRating, resetRating, totalFeedback }) => {
  return (
    <div>
      <button onClick={() => updateRating('good')}>Good</button>
      <button onClick={() => updateRating('neutral')}>Neutral</button>
      <button onClick={() => updateRating('bad')}>Bad</button>
      {totalFeedback > 0 && (
        <button type="button" onClick={resetRating}>
          Reset
        </button>
      )}
    </div>
  );
};
export default Options;
