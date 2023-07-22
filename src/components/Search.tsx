import { useContext } from 'react'
import { searchRepositories } from '../services/api'
import AppContext from '../contexts/AppContext'

export function Search() {
  const { newSearch, setNewSearch, setResults, setTerm } =
    useContext(AppContext)

  async function search(param: string) {
    if (param.length <= 2) {
      return console.log('Type more than 2 characters')
    }
    const response = await searchRepositories({ q: param })
    setTerm(newSearch)
    setResults(response)
  }

  return (
    <div className="flex w-1/2 gap-2">
      <input
        name="search"
        className="h-10 w-full py-2 px-4 rounded-sm bg-zinc-900  focus:outline-none placeholder:text-zinc-500 text-zinc-400"
        placeholder="Discover amazing repositories..."
        value={newSearch}
        onChange={(e) => setNewSearch(e.target.value)}
      />
      <button
        className="h-10 w-fit px-3 rounded-sm bg-sky-600 text-zinc-50"
        type="button"
        onClick={() => search(newSearch)}
      >
        Search
      </button>
    </div>
  )
}
