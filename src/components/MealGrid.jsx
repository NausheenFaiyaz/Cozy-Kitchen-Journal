import MealCard from './MealCard'

function MealGrid({ meals, onOpen }) {
  return (
    <section className="grid">
      {meals.map((meal) => (
        <MealCard key={meal.idMeal} meal={meal} onOpen={onOpen} />
      ))}
    </section>
  )
}

export default MealGrid