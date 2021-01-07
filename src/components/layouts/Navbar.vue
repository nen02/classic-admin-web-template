<template>
  <div id="navbar">
    <a href="#" id="sidebar-toggle" @click.prevent="$emit('toggle-sidebar')">
      <fa icon="bars"></fa>
    </a>
    <nav class="navbar-nav">
      <ul class="nav-items">
        <NavLink
          :url="'/'"
          :icon="'home'"
        >Home</NavLink>
        <NavDropdown :icon="'envelope'" :desc="'Messages'"
          :classes="messageDropdownClasses" ref="messageDropdown"
          @dropdown-opened="closeOpenedDropdown">
          <template slot="label" v-if="unreadMessages != 0">
            <span class="label label-danger">{{ unreadMessages }}</span>
          </template>

          <template slot="header" v-if="unreadMessages != 0">
            You have {{ unreadMessages }} unread message(s)
          </template>
          <template slot="header" v-else>
            <h3 style="margin: 0">Messages</h3>
          </template>

          <template slot="body">
            <ul class="cons">
              <Conversation
                v-for="item in conversations"
                :key="item.id" :item="item"
                @increment-unseen="unreadMessages++"
                @decrement-unseen="unreadMessages--"
              ></Conversation>
            </ul>
          </template>
          <template slot="footer">
            <a href="#">See All Messages</a>
          </template>
        </NavDropdown>
        <NavDropdown :icon="'bell'" :desc="'Notifications'"
          :classes="messageDropdownClasses" ref="notifDropdown"
          @dropdown-opened="closeOpenedDropdown">
          <template slot="label" v-if="unreadMessages != 0">
            <span class="label label-danger">{{ unreadMessages }}</span>
          </template>

          <template slot="header" v-if="unreadMessages != 0">
            You have {{ unreadMessages }} unread notification(s)
          </template>
          <template slot="header" v-else>
            <h3 style="margin: 0">Messages</h3>
          </template>

          <template slot="body">
            <ul class="cons">
              <Conversation
                v-for="item in conversations"
                :key="item.id" :item="item"
                @increment-unseen="unreadMessages++"
                @decrement-unseen="unreadMessages--"
              ></Conversation>
            </ul>
          </template>
          <template slot="footer">
            <a href="#">See All Messages</a>
          </template>
        </NavDropdown>
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
import { Component, Vue, Ref } from 'vue-property-decorator'
import Conversation from '@/components/Conversation.vue'
import NavDropdown from '@/components/NavDropdown.vue'
import NavLink from '@/components/NavLink.vue'
import conversations from '@/data/conversations'

@Component({
  components: {
    Conversation,
    NavDropdown,
    NavLink
  }
})
export default class Navbar extends Vue {
  @Ref() messageDropdown !: NavDropdown
  @Ref() notifDropdown !: NavDropdown
  navDropdown!: NavDropdown[]
  conversations = conversations
  unreadMessages = 0
  messageDropdownClasses = [
    'message-dropdown',
    'menu-center-sm',
    'menu-left-md'
  ]

  mounted () {
    this.navDropdown = [this.messageDropdown, this.notifDropdown]
  }

  closeOpenedDropdown () {
    for (const current of this.navDropdown) current.closeDropdown()
  }
}
</script>
