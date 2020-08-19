<template>
  <li class="tree-view">
    <a href="#" class="nav-link" @click.prevent="toggleTreeView">
      <fa :icon="icon"></fa>
      <span class="link-desc">
        <slot name="desc"></slot>
      </span>
      <fa icon="angle-left" :style="getArrowRotation" class="tree-view-arrow"></fa>
    </a>
    <ul class="tree-view-menu" ref="menu">
      <slot name="items"></slot>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'TreeView',
  props: {
    icon: String,
    mouseLeaveWatcher: Boolean
  },
  data () {
    return {
      isTreeViewToggled: false
    }
  },
  methods: {
    toggleTreeView: function () {
      const el = this.$refs.menu
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
    },
    closeTreeView: function () {
      if (!this.isTreeViewToggled) {
        this.$refs.menu.style.display = ''
        this.$refs.menu.style.height = ''
      }
    }
  },
  mounted () {
    this.$refs.menu.addEventListener('transitionend', this.closeTreeView)
  },
  computed: {
    getArrowRotation: function () {
      return this.isTreeViewToggled ? { transform: 'rotate(-90deg)' } : { transform: '' }
    }
  },
  watch: {
    mouseLeaveWatcher: function () {
      if (this.isTreeViewToggled) this.toggleTreeView()
    }
  }
}
</script>
