import CoverImage from 'components/CoverImage'
import Date from 'components/PostDate'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Omit<Post, '_id'>) {
  return (
    <div className="overflow-hidden rounded-md border border-gray-200">
      <div>
        <CoverImage
          slug={slug}
          title={title}
          image={coverImage}
          priority={false}
        />
      </div>
      <div className="px-4 py-2">
        <h3 className="mb-3 text-sm leading-snug text-balance">
          <Link href={`/posts/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        <div className="mb-1 text-xs">
          <Date dateString={date} />
        </div>
        {excerpt && (
          <p className="mb-1 text-sm leading-relaxed text-pretty">{excerpt}</p>
        )}
      </div>
    </div>
  )
}
