<template>
  <div id="navbar">
    <a href="#" id="sidebar-toggle" @click.prevent="$emit('toggle-sidebar')">
      <fa icon="bars"></fa>
    </a>
    <nav class="navbar-nav">
      <ul class="nav-items">
        <li class="nav-item dropdown">
          <a href="#" class="nav-link">
            <fa icon="envelope"></fa>
            <span class="link-desc">Messages</span>
            <span class="label label-danger">1</span>
          </a>
          <ul class="dropdown-menu menu-left menu-center-sm message-dropdown">
            <li class="dropdown-header">You have 2 unread message(s)</li>
            <li class="dropdown-body">
              <ul class="cons">
                <Conversation v-for="item in conversations" :key="item.id" :item="item">
                </Conversation>
              </ul>
            </li>
            <li class="dropdown-footer"><a href="#">See All Messages</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <fa icon="bell"></fa>
            <span class="link-desc">Notifications</span>
          </a>
        </li>
        <li class="nav-item user-acc">
          <a href="#" class="nav-link">
            <img src="@/assets/images/anime.jpg" alt="">
            <span class="link-desc">Misuhara Chizuru</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Conversation from '@/components/Conversation.vue'
import conversations from '@/data/conversations'

@Component({
  components: {
    Conversation
  }
})
export default class Navbar extends Vue {
  conversations = conversations
}
</script>
