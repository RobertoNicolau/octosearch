import { CaretRight, CaretLeft } from '@phosphor-icons/react'

export function Paginator() {
  return (
    <div className="flex gap-2 items-center">
      <div className="rounded py-1 px-1 border-4 border-zinc-100 text-zinc-100 hover:bg-zinc-100 hover:text-zinc-900 cursor-pointer">
        <CaretLeft size={32} />
      </div>
      <div className="border-4 border-zinc-100 text-zinc-100 py-2 px-4 rounded text-md font-semibold hover:bg-zinc-100 hover:text-zinc-900 cursor-pointer">
        1
      </div>
      <div className="border-4 border-zinc-100 text-zinc-100 py-2 px-4 rounded text-md font-semibold hover:bg-zinc-100 hover:text-zinc-900 cursor-pointer">
        2
      </div>
      <div className="border-4 border-zinc-100 text-zinc-100 py-2 px-4 rounded text-md font-semibold hover:bg-zinc-100 hover:text-zinc-900 cursor-pointer">
        3
      </div>
      <div className="rounded py-1 px-1 border-4 border-zinc-100 text-zinc-100 hover:bg-zinc-100 hover:text-zinc-900 cursor-pointer">
        <CaretRight size={32} />
      </div>
    </div>
  )
}
