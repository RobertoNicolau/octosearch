import gitLogo from '../assets/github-mark-white.png'
import { motion } from 'framer-motion'
import { Search } from '../components/Search'
import { CardGrid } from '../components/CardGrid'
import { Suspense, useContext } from 'react'
import AppContext from '../contexts/AppContext'

export function Main() {
  const { results, term } = useContext(AppContext)
  return (
    <div className="flex items-start py-8 justify-center min-h-screen w-full bg-zinc-950">
      <main className="flex flex-col  items-center w-[1180px] lg:w-[1380px]">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.05 }}>
          <a href="https://github.com/search" target="_blank" rel="noreferrer">
            <img src={gitLogo} alt="Invertocat" className="w-32 h-32 m-10" />
          </a>
        </motion.div>
        <Search />
        <div className="text-xl text-zinc-500 m-4">
          {results && results.items.length > 0 ? (
            <div>
              <p>
                <span className="text-zinc-300 font-semibold">
                  {results.total_count}
                </span>{' '}
                Results for{' '}
                <span className="text-zinc-300">&quot;{term}&quot;</span>
              </p>
            </div>
          ) : (
            <>
              <img src={gitLogo} alt="Invertocat" className="w-32 h-32 m-10" />
            </>
          )}{' '}
        </div>
        <Suspense fallback={<p className="m-10 bg-red-700">Carregando...</p>}>
          <CardGrid />
        </Suspense>
      </main>
    </div>
  )
}
