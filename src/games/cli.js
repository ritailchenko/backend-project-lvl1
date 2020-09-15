const greeting = (name) => {
  const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);

  return nameCapitalized;
};

export default greeting;
