import IndexPage from 'components/IndexPage'
import PreviewIndexPage from 'components/PreviewIndexPage'
import { readToken } from 'lib/sanity.api'
import { getAllPosts, getClient, getMostRecentAbout, getSettings } from 'lib/sanity.client'
import { About,Post, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import type { SharedPageProps } from 'pages/_app'

interface PageProps extends SharedPageProps {
  posts: Post[]
  settings: Settings
  about?: About 
}

interface Query {
  [key: string]: string
}

export default function Page(props: PageProps) {
  const { posts, settings, draftMode, about } = props

  if (draftMode) {
    return <PreviewIndexPage posts={posts} settings={settings} />
  }

  return <IndexPage posts={posts} settings={settings} about={about} />
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { draftMode = false } = ctx
  const client = getClient(draftMode ? { token: readToken } : undefined)

  const [about, settings, posts = []] = await Promise.all([
    getMostRecentAbout(client),
    getSettings(client),
    getAllPosts(client),
  ])

  return {
    props: {
      about,
      posts,
      settings,
      draftMode,
      token: draftMode ? readToken : '',
    },
  }
}
