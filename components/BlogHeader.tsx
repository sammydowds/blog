import DropdownMenuButton from 'components/DropdownMenuButton'

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
        <DropdownMenuButton />
      </header>
    )
}
