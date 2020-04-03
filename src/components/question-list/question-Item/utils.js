export const getTopChoice = (choices = []) => {
  if (choices && choices.length) {
    const topChoice = Math.max(...choices.map(choice => choice.votes));
    return choices
      .filter(choice => choice.votes === topChoice)
      .map(choice => choice.choice)
      .slice(0, 1)
      .join('');
  }
};

export const getTotalVotes = (choices = []) => {
  if (choices && choices.length) {
    return choices.reduce((total, choice) => (total += choice.votes), 0);
  }
};
