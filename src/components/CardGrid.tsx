import { Card } from './Card'
import { Suspense, useContext } from 'react'
import AppContext from '../contexts/AppContext'

export function CardGrid() {
  const { results } = useContext(AppContext)
  return (
    <Suspense fallback={<div className="bg-red-500">Loading...</div>}>
      <div className="m-6 grid gap-8 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 ">
        {results?.items.map((item) => (
          <Card key={item.id} repo={item} />
        ))}
      </div>
    </Suspense>
  )
}
