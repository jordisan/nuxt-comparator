<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import {
  Component,
  Prop
} from 'nuxt-property-decorator'
import BlogListBase from './BlogListBase.vue'
import BlogEntry from './BlogEntry.vue'

/**
 * List of blog entries with data from .md documents
 */
@Component
export default class BlogList extends BlogListBase<BlogEntry> {
    @Prop()
    contentList!: IContentDocument[]

    private created () {
      // create entries from contents
      this.blogEntryList = []
      this.contentList?.forEach((content) => {
        this.blogEntryList.push(new BlogEntry({ propsData: { content } }))
      })
      // sort entries (more recent first)
      this.blogEntryList = this.blogEntryList.sort(
        (b1: BlogEntry, b2: BlogEntry) => new Date(b2.createdAt).getTime() - new Date(b1.createdAt).getTime()
      )
    }
}
</script>
