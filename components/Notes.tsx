import PostPreview from 'components/PostPreview'
import type { Post } from 'lib/sanity.queries'

export default function Notes({ posts }: { posts: Post[] }) {
  return (
    <section>
      <h2 className="mb-8 text-4xl font-bold leading-tight tracking-tighter md:text-5xl">
        Notes
      </h2>
      <div className="mb-16 grid grid-cols-1 gap-y-16 md:grid-cols-4 md:gap-x-2 md:gap-y-5 lg:gap-x-16">
        {posts.map((post) => (
          <PostPreview
            key={post._id}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
