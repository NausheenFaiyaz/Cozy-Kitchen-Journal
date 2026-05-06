import { truncateByWords } from '../utils/mealUtils'

function MealCard({ meal, onOpen }) {
  return (
    <article className="meal-card">
      <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-image" loading="lazy" />
      <div className="meal-body">
        <h2>{meal.strMeal}</h2>
        <p className="area-pill">{meal.strArea || 'Global Cuisine'}</p>
        <p className="intro">{truncateByWords(meal.strInstructions || 'No instructions available yet.')}</p>
        <button type="button" onClick={() => onOpen(meal)}>
          Open Recipe Card
        </button>
      </div>
    </article>
  )
}

export default MealCard