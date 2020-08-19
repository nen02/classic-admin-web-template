<template>
  <div id="main"
    :class="{slide: isSidebarOpen}"
    @click="toggleSidebar"
  >
    <div class="container   z">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    isSidebarOpen: Boolean
  },
  methods: {
    toggleSidebar: function () {
      if (window.innerWidth < 768 && this.isSidebarOpen) this.$emit('toggle-sidebar')
    }
  }
}
</script>
