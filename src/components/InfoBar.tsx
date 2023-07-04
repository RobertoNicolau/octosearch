import { GitFork, HardDrives } from '@phosphor-icons/react'
import { GoEye, GoIssueOpened } from 'react-icons/go'
import { ItemTooltip } from './ItemTooltip'
import { sizeFormater } from '../helpers/sizeFormater'
import { numberFormater } from '../helpers/numberFormater'

export function InfoBar({ forks, issues, watchers, size }: any) {
  return (
    <div className="flex justify-around text-zinc-700 py-2  leading-tight">
      <ItemTooltip
        text="Forks"
        counter={numberFormater(forks)}
        icon={<GitFork />}
      />
      <ItemTooltip
        text="Open Issues"
        counter={numberFormater(issues)}
        icon={<GoIssueOpened />}
      />
      <ItemTooltip
        text="Watchers"
        counter={numberFormater(watchers)}
        icon={<GoEye />}
      />
      <ItemTooltip
        text="Size"
        counter={sizeFormater(size)}
        icon={<HardDrives />}
      />
    </div>
  )
}
