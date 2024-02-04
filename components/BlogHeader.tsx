import MoreLinks from 'components/MoreLinks'
import Link from 'next/link'

export default function BlogHeader({
  title,
}: {
  title: string
  description?: any[]
}) {
    return (
      <header className="mb-10 mt-4 flex items-center md:mb-12 md:flex-row justify-between text-pretty">
        <h1 className="text-md font-bold leading-tight tracking-tighter md:pr-8 md: text-xl">
          {title}
        </h1>
        <div className="flex gap-3">
          <Link
            href="/about"
            className="hover:bg-gray-50 p-1 flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
          >
            About
          </Link>
          <Link
            href="/resume"
            className="hover:bg-gray-50 p-1 flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
          >
            Resume 
          </Link>
          <MoreLinks />
        </div>
      </header>
    )
}
