const generateRandomNumFromRange = (num) => {
  const randomNum = Math.floor(Math.random() * Math.floor(num)) // min included, max excluded
  return randomNum
}

export default generateRandomNumFromRange
