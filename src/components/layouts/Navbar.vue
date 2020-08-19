<template>
  <div id="navbar">
    <a href="#" id="sidebar-toggle" @click.prevent="$emit('toggle-sidebar')">
      <fa icon="bars"></fa>
    </a>
    <nav class="navbar-nav">
      <ul class="nav-items">
        <li class="nav-item">
          <a href="#" class="nav-link">
            <fa icon="envelope"></fa>
            <span class="link-desc">Messages</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <fa icon="bell"></fa>
            <span class="link-desc">Notifications</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <fa icon="user"></fa>
            <span class="link-desc">User</span>
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

<script>
export default {
  name: 'Navbar'
}
</script>
