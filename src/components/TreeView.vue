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
import { Vue, Component, Prop, Ref } from 'vue-property-decorator'

@Component
export default class TreeView extends Vue {
  @Prop() icon!: string
  @Ref() menu!: HTMLUListElement

  isTreeViewToggled = false

  toggleTreeView () {
    const el = this.menu
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
      this.menu.style.display = ''
      this.menu.style.height = ''
    }
  }

  closeOpenedTreeView () {
    if (this.isTreeViewToggled) this.toggleTreeView()
  }

  mounted () {
    this.menu.addEventListener('transitionend', this.closeTreeView)
  }

  get arrowRotation () {
    return this.isTreeViewToggled ? { transform: 'rotate(-90deg)' } : { transform: '' }
  }
}
</script>
