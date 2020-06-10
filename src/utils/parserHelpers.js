export const cleanNumber = str => {
  // Converts string into a clean number
  const clean = str.replace(/[\s,]/, "");
  return +clean;
};

export const toTitleCase = phrase =>
  phrase
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
