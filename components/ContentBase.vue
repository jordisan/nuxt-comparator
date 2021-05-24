<script lang="ts">
import {
  Component,
  Vue
} from 'nuxt-property-decorator'

/**
 * Base class for content components (storage agnostic)
 */
@Component
export default class ContentBase extends Vue {
    public title: string = ''
    public description: string = ''
    public slug: string = ''
    public body: string = ''
    public img: string = ''
    public alt: string = ''
    public createdAt: Date = new Date()
    public references: URL[] = []

    get createdAtFormatted (): string {
      return new Date(this.createdAt)?.toLocaleDateString('en', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    }
}
</script>
