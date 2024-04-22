export const capitaliseEachWord = (sentence: string): string => {
  return sentence
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
};
