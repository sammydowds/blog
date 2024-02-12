import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import IndexPageHead from 'components/IndexPageHead'
import Notes from 'components/Notes'
import * as fallback from 'lib/fallback.data'
import type { About, Post, Settings } from 'lib/sanity.queries'

export interface IndexPageProps {
  about?: About
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, posts, settings, about } = props
  const { title = fallback.title } = settings || {}

  return (
    <>
      <IndexPageHead settings={settings} />

      <Layout preview={preview} loading={loading}>
        <Container>
          <BlogHeader title={title} about={about} />
          {posts.length > 0 && <Notes posts={posts} />}
        </Container>
      </Layout>
    </>
  )
}
