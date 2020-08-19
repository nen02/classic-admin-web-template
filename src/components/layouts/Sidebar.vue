<template>
  <div id="sidebar" :class='{toggled: isSidebarOpen}' @mouseleave="mouseLeft">
    <div class="brand">
      <img class="brand-logo" src="@/assets/images/anime.jpg" alt="Code Venture">
      <div class="brand-desc">
        <p class="title">CodeVenture</p>
        <p class="subtitle">Programming is Fun!</p>
      </div>
    </div>

    <div class="search-container">
      <form action="#" class="search-form" method="post" v-on:submit.prevent>
        <input type="text" class="query" placeholder="Search">
        <button type="submit" class="submit">
          <fa icon="search"></fa>
        </button>
      </form>
    </div>
    <overlay-scrollbars
      :options="{
        className: 'os-theme-light',
        scrollbars: {autoHide: 'leave', autoHideDelay: 200}
      }">
      <nav class="sidebar-nav">
        <ul class="nav-items">
          <template v-for="item in links">
            <li class="header"
              v-if="item.type==='header'"
              :key="item.id">{{ item.desc }}</li>
            <NavLink
              v-else-if="item.type==='link'"
              :key="item.id" :url="item.url"
              :icon="item.icon">{{ item.desc }}</NavLink>
            <TreeView v-else
              :key="item.id"
              :icon="item.icon"
              :mouseLeaveWatcher="mouseLeaveWatcher">
              <template slot="desc" ``11a>{{ item.desc }}</template>
              <template slot="items">
                <TreeViewItem
                  v-for="treeItem in item.items"
                  :key="treeItem.id"
                  :icon="treeItem.icon"
                  :url="treeItem.url">{{ treeItem.desc }}</TreeViewItem>
              </template>
            </TreeView>
          </template>
        </ul>
      </nav>
    </overlay-scrollbars>
  </div>
</template>

<script>
import NavLink from '@/components/NavLink'
import TreeView from '@/components/TreeView'
import TreeViewItem from '@/components/TreeViewItem'
import links from '@/data/links'

export default {
  name: 'Sidebar',
  props: {
    isSidebarOpen: Boolean
  },
  components: {
    NavLink,
    TreeView,
    TreeViewItem
  },
  data () {
    return {
      links,
      mouseLeaveWatcher: false
    }
  },
  methods: {
    mouseLeft: function () {
      this.mouseLeaveWatcher = !this.mouseLeaveWatcher
    }
  }
}
</script>
