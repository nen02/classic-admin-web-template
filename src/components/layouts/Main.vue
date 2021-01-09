<template>
  <div id="main"
    :class="{slide: isSidebarOpen}"
    @click="toggleSidebar"
  >
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Main extends Vue {
  @Prop() isSidebarOpen!: boolean

  toggleSidebar () {
    this.$emit('close-sidebar')
  }
}
</script>
