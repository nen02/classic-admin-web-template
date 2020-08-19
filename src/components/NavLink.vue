<template>
  <li class="nav-item">
    <router-link :to="url" class="nav-link">
      <slot name="icon"></slot>
      <fa :icon="icon"></fa>
      <span class="link-desc">
        <slot></slot>
      </span>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'NavLink',
  props: {
    url: String,
    icon: String
  }
}
</script>
