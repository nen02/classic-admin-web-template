<template>
  <li class="tree-view">
    <a href="#" class="nav-link" @click.prevent="toggleTreeView">
      <fa :icon="icon"></fa>
      <span class="link-desc">
        <slot name="desc"></slot>
      </span>
      <fa icon="angle-left" :style="arrowRotation" class="tree-view-arrow"></fa>
    </a>
    <ul class="tree-view-menu" ref="menu">
      <slot name="items"></slot>
    </ul>
  </li>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

@Component
export default class TreeView extends Vue {
  @Prop() icon!: string
  @Prop() mouseLeaveWatcher!: boolean

  isTreeViewToggled = false
  el!: HTMLUListElement

  toggleTreeView () {
    const el = this.el
    if (!this.isTreeViewToggled) {
      el.style.display = 'block'
      const tempHeight = el.clientHeight + 'px'
      el.style.height = '0'
      setTimeout(function () {
        el.style.height = tempHeight
      }, 0)
    } else {
      setTimeout(function () {
        el.style.height = '0'
      }, 0)
    }
    this.isTreeViewToggled = !this.isTreeViewToggled
  }

  closeTreeView () {
    if (!this.isTreeViewToggled) {
      this.el.style.display = ''
      this.el.style.height = ''
    }
  }

  mounted () {
    this.el = this.$refs.menu as HTMLUListElement
    this.el.addEventListener('transitionend', this.closeTreeView)
  }

  get arrowRotation () {
    return this.isTreeViewToggled ? { transform: 'rotate(-90deg)' } : { transform: '' }
  }

  @Watch('mouseLeaveWatcher')
  onMouseLeaveWatcherChanged () {
    if (this.isTreeViewToggled) this.toggleTreeView()
  }
}
</script>
