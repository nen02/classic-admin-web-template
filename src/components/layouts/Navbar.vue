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
          <ul class="dropdown-menu">
            <li class="dropdown-header"><small>You have 2 unread message(s)</small></li>
            <li class="dropdown-body">Body</li>
            <li class="dropdown-footer text-center"><a href="#"><small>See All Messages</small></a></li>
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

<script>
export default {
  name: 'Navbar'
}
</script>
