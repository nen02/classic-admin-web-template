<template>
  <li>
    <router-link :to="url">
      <fa :icon="icon"></fa>
      <span>
        <slot></slot>
      </span>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'TreeViewItem',
  props: {
    icon: String,
    url: String
  }
}
</script>
