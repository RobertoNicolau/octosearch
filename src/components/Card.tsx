import { motion } from 'framer-motion'
import { Star } from '@phosphor-icons/react'
import { InfoBar } from './InfoBar'
import { IItemsResponse } from '../interfaces/IItemsResponse'
import { numberFormater } from '../helpers/numberFormater'
import { dateFormater } from '../helpers/dateFormater'

interface IProps {
  repo: IItemsResponse
}

export function Card({ repo }: IProps) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 1.02 }}>
      <div className="flex flex-col gap-3 rounded-md border-2 p-6 border-zinc-800 min-h-[256px] bg-zinc-900">
        <header className="flex items-center justify-between gap-2">
          <a
            href={repo.html_url}
            target="_blank"
            className="flex items-center gap-2 cursor-pointer"
            rel="noreferrer"
          >
            <img
              src={repo.owner.avatar_url}
              alt="RepoLogo"
              className="h-8 w-8 rounded-sm"
            />
            <div className="flex flex-col leading-tight">
              <h2 className="text-zinc-100 font-semibold whitespace-nowrap max-w-[17ch] overflow-hidden overflow-ellipsis">
                {repo.name}
              </h2>
              <h3 className="text-zinc-300 text-sm">{repo.owner.login}</h3>
            </div>
          </a>
          <div className="flex items-center justify-start gap-2 font-semibold text-yellow-400">
            <Star weight="bold" />
            {numberFormater(repo.stargazers_count)}
          </div>
        </header>
        <main>
          <p className="text-zinc-500 rounded-sm leading-tight line-clamp-3 min-h-[60px]">
            {repo.description || 'No Description Provided'}
          </p>
          <InfoBar
            issues={repo.open_issues}
            watchers={repo.watchers}
            size={repo.size}
            forks={repo.forks}
          />
        </main>
        <footer className="flex justify-around text-sm ">
          <div className="flex flex-col items-center">
            <span className="text-zinc-700">Created at</span>
            <p className="text-zinc-300 font-sans font-bold">
              {dateFormater(repo.created_at)}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-zinc-700">Updated</span>
            <p className="text-zinc-300 font-sans font-bold">
              {dateFormater(repo.updated_at)}
            </p>
          </div>
        </footer>
      </div>
    </motion.div>
  )
}
