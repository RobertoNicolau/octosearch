import React from 'react'
import * as Tooltip from '@radix-ui/react-tooltip'

interface ItemTooltipProps {
  text: string
  icon: React.ReactNode
  counter: number | string
}

export function ItemTooltip({ text, icon, counter }: ItemTooltipProps) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div
            className="flex items-center rounded justify-start gap-2 px-2
            font-semibold  hover:text-zinc-100 cursor-pointer"
          >
            {icon}
            {counter}
          </div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="TooltipContent bg-zinc-800 text-zinc-400 rounded py-1 px-4">
            {text} {counter}
            <Tooltip.Arrow className="TooltipArrow fill-zinc-800" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
