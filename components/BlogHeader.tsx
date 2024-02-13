import MoreLinks from 'components/MoreLinks'
import Link from 'next/link'

export default function BlogHeader({
  title,
}: {
  title: string
  description?: any[]
}) {
  return (
    <header className="flex items-center flex-col justify-between text-pretty">
      <div className="flex items-center justify-between w-full p-2">
        <Link
          href="/"
          className="hover:underline text-md font-bold leading-tight tracking-tighter md:pr-8 md: text-xl"
        >
          {title}
        </Link>
        <div className="flex gap-3">
          <Link
            href="/resume"
            className="hover:bg-gray-50 p-1 flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
          >
            Resume
          </Link>
          <MoreLinks />
        </div>
      </div>
    </header>
  )
}
