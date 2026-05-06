import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import MealGrid from './components/MealGrid'
import Pagination from './components/Pagination'
import RecipeModal from './components/RecipeModal'
import './App.css'

const API_BASE = 'https://api.freeapi.app/api/v1/public/meals'
const LIMIT = 12

function App() {
  const [page, setPage] = useState(1)
  const [meals, setMeals] = useState([])
  const [selectedMeal, setSelectedMeal] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [meta, setMeta] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    async function fetchMeals() {
      setIsLoading(true)
      setError('')

      try {
        const response = await fetch(`${API_BASE}?page=${page}&limit=${LIMIT}`, {
          method: 'GET',
          headers: { accept: 'application/json' },
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`)
        }

        const payload = await response.json()
        setMeals(payload?.data?.data || [])
        setMeta(payload?.data || null)
      } catch (requestError) {
        if (requestError.name !== 'AbortError') {
          setError('Could not load recipes right now. Please try again.')
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchMeals()
    return () => controller.abort()
  }, [page])

  useEffect(() => {
    document.body.style.overflow = selectedMeal ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedMeal])

  const canGoNext = useMemo(() => {
    if (!meta) return meals.length === LIMIT
    return page < (meta.totalPages || 1)
  }, [meta, meals.length, page])

  return (
    <div className="app-shell">
      <div className="deco deco-heart" />
      <div className="deco deco-star" />
      <Header />

      <main className="content-area">
        {error && <p className="status error">{error}</p>}
        {isLoading && <p className="status">Loading meals...</p>}

        {!isLoading && !error && (
          <>
            <MealGrid meals={meals} onOpen={setSelectedMeal} />
            <Pagination
              page={page}
              canGoNext={canGoNext}
              onPrev={() => setPage((oldPage) => Math.max(1, oldPage - 1))}
              onNext={() => setPage((oldPage) => oldPage + 1)}
            />
          </>
        )}
      </main>

      <RecipeModal meal={selectedMeal} onClose={() => setSelectedMeal(null)} />
    </div>
  )
}

export default App