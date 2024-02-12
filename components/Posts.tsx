import PostPreview from 'components/PostPreview'
import type { Post } from 'lib/sanity.queries'

export default function Posts({ posts }: { posts: Post[] }) {
  return (
    <section className="flex flex-col items-center">
      <div className="h-8 w-12 border-t-2 border-oklahoma-beige" />
      <div className="mb-16 grid grid-cols-1 gap-y-16 md:grid-cols-5 md:gap-x-2 md:gap-y-5 lg:gap-x-8">
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
