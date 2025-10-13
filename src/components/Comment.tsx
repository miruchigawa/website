import { site } from '@/config.json'
import { DiscussionEmbed } from 'disqus-react'

interface Props {
  id: string
  title: string
}

export default function Comment({ id, title }: Props) {
  return (
    <div className="mt-4">
      <DiscussionEmbed
        shortname="nanakura"
        config={{
          url: new URL(id, site.url).href,
          identifier: id,
          title: title,
          language: site.lang,
        }}
      />
    </div>
  )
}
