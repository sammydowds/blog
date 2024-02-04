import DropdownMenuButton from 'components/DropdownMenuButton'
import Link from 'next/link'

export default function BlogHeader({
  title,
  description,
  level,
}: {
  title: string
  description?: any[]
  level: 1 | 2
}) {
  switch (level) {
    case 1:
      return (
        <header className="mb-10 mt-4 flex items-center md:mb-12 md:flex-row justify-between text-pretty">
          <h1 className="text-md font-bold leading-tight tracking-tighter md:pr-8 md: text-xl">
            {title}
          </h1>
          <DropdownMenuButton />
        </header>
      )

    case 2:
      return (
        <header>
          <h2 className="mb-20 mt-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter text-pretty">
            <Link href="/" className="hover:underline">
              {title}
            </Link>
          </h2>
        </header>
      )

    default:
      throw new Error(
        `Invalid level: ${
          JSON.stringify(level) || typeof level
        }, only 1 or 2 are allowed`,
      )
  }
}
