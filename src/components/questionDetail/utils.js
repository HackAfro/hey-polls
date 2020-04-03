export const getPercentage = (votes, total) => {
  return votes ? Math.round((votes / total) * 100) : 0;
};


export const isSelected = (choice, selectedChoice) => {
  return choice.url === selectedChoice?.url;
};
