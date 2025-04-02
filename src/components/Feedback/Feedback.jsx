const Feedback = ({ good, neutral, bad }) => {
  const totalRating = good + neutral + bad;
  const positiveRating = totalRating
    ? Math.round((good / totalRating) * 100)
    : 0;

  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalRating}</p>
      <p>Positive: {positiveRating}%</p>
    </div>
  );
};
export default Feedback;
