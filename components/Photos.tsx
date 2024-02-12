import type { Photo } from 'lib/sanity.queries'

import PhotoPreview from './PhotoPreview'

export default function Photos({ photos }: { photos: Photo[] }) {
  return (
    <section className="flex flex-col items-center">
      <div className="h-8 w-12 border-t-2 border-oklahoma-beige" />
      <div className="mb-16 grid grid-cols-1 gap-y-6 md:grid-cols-6 md:gap-x-2 md:gap-y-5 lg:gap-x-6">
        {photos.map((p) => (
          <PhotoPreview
            key={p._id}
            description={p.description}
            image={p.image}
          />
        ))}
      </div>
    </section>
  )
}
