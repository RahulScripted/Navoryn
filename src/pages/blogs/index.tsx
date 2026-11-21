import { SectionHeading } from "@/utilities/SectionHeading/SectionHeading"
import { BlogScroller } from "@/components/blogs/BlogScroller"
import { BLOGS_INTRO } from "@/components/blogs/blogs"
export default function Blogs() {
  return (
    <section id="blogs" className="w-full overflow-x-clip bg-background py-24 text-foreground sm:py-28 lg:py-32">
      <SectionHeading
        align="left"
        className="mb-16 sm:mb-20"
        title={BLOGS_INTRO.title}
        description={BLOGS_INTRO.description}
        tabletDescription={BLOGS_INTRO.tabletDescription}
        mobileDescription={BLOGS_INTRO.mobileDescription}
      />
      <BlogScroller />
    </section>
  )
}
