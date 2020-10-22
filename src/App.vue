<template>
  <div id="app">
    <header>
      <Navbar @toggle-sidebar="isSidebarOpen = !isSidebarOpen"></Navbar>
      <Sidebar :isSidebarOpen="isSidebarOpen"></Sidebar>
    </header>
    <Main
      :isSidebarOpen='isSidebarOpen'
      @toggle-sidebar="isSidebarOpen = !isSidebarOpen"
    ></Main>
    <footer></footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Navbar from '@/components/layouts/Navbar.vue'
import Sidebar from '@/components/layouts/Sidebar.vue'
import Main from '@/components/layouts/Main.vue'

@Component({
  components: {
    Navbar,
    Sidebar,
    Main
  }
})
export default class App extends Vue {
  isSidebarOpen = false
}
</script>
