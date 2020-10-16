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
            <span class="label label-danger">2</span>
          </a>
          <ul class="dropdown-menu message-dropdown">
            <li class="dropdown-header">You have 2 unread message(s)</li>
            <li class="dropdown-body">
              <ul class="conversations">
                <li class="conversation">
                  <div>A</div>
                  <div>
                    <p class="sender-name">ABCD EFGH</p>
                    <p class="message">Testing purpose only</p>
                  </div>
                  <div>
                    <span><fa icon="clock"></fa> 7:56 pm</span>
                  </div>
                </li>
                <li class="conversation">
                  <div>B</div>
                  <div></div>
                  <div></div>
                </li>
                <li class="conversation">
                  <div>C</div>
                  <div></div>
                  <div></div>
                </li>
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

<script lag="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Navbar extends Vue {}
</script>
