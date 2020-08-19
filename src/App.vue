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

<script>
import Navbar from '@/components/layouts/Navbar'
import Sidebar from '@/components/layouts/Sidebar'
import Main from '@/components/layouts/Main'
export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar,
    Main
  },
  data () {
    return {
      isSidebarOpen: false
    }
  }
}
</script>
