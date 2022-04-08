export const splitScore = (score) => {
  if (score) {
    return score.split('x')
  } else {
    return ['', '']
  }
}
