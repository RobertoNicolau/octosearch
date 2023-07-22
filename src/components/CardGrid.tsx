import { Card } from './Card'
import { useContext } from 'react'
import AppContext from '../contexts/AppContext'
import { Paginator } from './Paginator'

export function CardGrid() {
  const { results } = useContext(AppContext)
  return (
    <>
      <Paginator />
      <div className="m-6 grid gap-8 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 ">
        {results?.items.map((item) => (
          <Card repo={item} key={item.id} />
        ))}
      </div>
      <Paginator />
    </>
  )
}
