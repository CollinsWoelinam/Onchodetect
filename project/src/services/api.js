const simulateApiCall = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const gleasonScores = ['3+3', '3+4', '4+3', '4+4', '4+5', '5+4', '5+5']
      const suggestions = [
        'No cancer detected. Regular follow-up recommended.',
        'Low-grade cancer detected. Active surveillance may be appropriate.',
        'Intermediate-grade cancer detected. Consider treatment options.',
        'High-grade cancer detected. Immediate treatment recommended.',
      ]
      resolve({
        gleasonScore: gleasonScores[Math.floor(Math.random() * gleasonScores.length)],
        suggestion: suggestions[Math.floor(Math.random() * suggestions.length)],
      })
    }, 2000)
  })
}

export { simulateApiCall }