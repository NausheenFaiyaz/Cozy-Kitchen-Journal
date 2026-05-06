export function getIngredientPairs(meal) {
  const pairs = []

  for (let index = 1; index <= 20; index += 1) {
    const ingredient = meal[`strIngredient${index}`]?.trim()
    const measure = meal[`strMeasure${index}`]?.trim()

    if (ingredient) {
      pairs.push({
        ingredient,
        measure: measure || '-',
      })
    }
  }

  return pairs
}

export function truncateByWords(text = '', minWords = 20, maxWords = 30) {
  const words = text.split(/\s+/).filter(Boolean)

  if (words.length <= maxWords) {
    return text
  }

  return `${words.slice(0, Math.max(minWords, Math.min(maxWords, minWords + 8))).join(' ')}...`
}