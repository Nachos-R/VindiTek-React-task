export default value => {
  const text = value
    .split('')
    .filter(character => /\w/.test(character))
    .join('')
    .toLowerCase();
  const capitalized = text.charAt(0).toUpperCase() + text.slice(1);
  return capitalized;
};
