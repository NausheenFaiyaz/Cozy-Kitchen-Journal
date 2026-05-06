import { getIngredientPairs } from '../utils/mealUtils'

function RecipeModal({ meal, onClose }) {
  if (!meal) return null

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <section
        className="recipe-modal"
        role="dialog"
        aria-modal="true"
        aria-label={`${meal.strMeal} details`}
        onClick={(event) => event.stopPropagation()}
      >
        <button className="close-btn" type="button" onClick={onClose} aria-label="Close recipe popup">
          x
        </button>

        <div className="recipe-paper">
          <div className="recipe-title-badge">Recipe Notes</div>
          <div className="recipe-left">
            <h2 className="recipe-name">{meal.strMeal}</h2>
            <img src={meal.strMealThumb} alt={meal.strMeal} className="modal-image" />
            <div className="meta-box">
              <p><span>Area</span><strong>{meal.strArea || '-'}</strong></p>
              <p><span>Category</span><strong>{meal.strCategory || '-'}</strong></p>
              <p><span>Tags</span><strong>{meal.strTags || 'Not specified'}</strong></p>
            </div>
            {meal.strYoutube && (
              <a href={meal.strYoutube} target="_blank" rel="noreferrer" className="video-link">
                Watch Recipe Video
              </a>
            )}
          </div>

          <div className="recipe-right">
            <h3 className="section-pill ingredients-pill">Ingredients + Measurements</h3>
            <ul className="ingredients-list">
              {getIngredientPairs(meal).map((item) => (
                <li key={`${item.ingredient}-${item.measure}`}>
                  <span>{item.ingredient}</span>
                  <span>{item.measure}</span>
                </li>
              ))}
            </ul>

            <h3 className="section-pill directions-pill">Directions</h3>
            <p className="full-instructions">{meal.strInstructions || 'No instructions available.'}</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RecipeModal
