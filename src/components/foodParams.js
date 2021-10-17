const randomCount = () => {
  return Math.floor(Math.random() * 20)
}

const randomPrice = () => {
  return Math.floor(Math.random() * 1000)
}

export {randomCount, randomPrice}