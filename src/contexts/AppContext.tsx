import { useState, createContext } from 'react'
import { ISearchResponse } from '../interfaces/ISearchResponse'
// import { ISearchResponse } from '../interfaces/ISearchResponse'

interface IContextData {
  newSearch: string
  setNewSearch(newSearch: string): void
  results: ISearchResponse | undefined
  setResults(results: ISearchResponse): void
  term: string
  setTerm(term: string): void
  // loading: boolean
  // setLoading(loading: boolean): void
  // numberOfResults: number
  // setNumberOfResults(numberOfResults: number): void
  // page: number
  // setPage(page: number): void
}

const AppContext = createContext<IContextData>({} as IContextData)

function AppProvider({ children }: any) {
  const [newSearch, setNewSearch] = useState<string>('')
  const [results, setResults] = useState<ISearchResponse>()
  const [term, setTerm] = useState<string>('')
  // const [loading, setLoading] = useState<boolean>(false)
  // const [numberOfResults, setNumberOfResults] = useState<number>(0)
  // const [page, setPage] = useState<number>(1)

  return (
    <AppContext.Provider
      value={{
        newSearch,
        setNewSearch,
        results,
        setResults,
        term,
        setTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
export { AppProvider }
