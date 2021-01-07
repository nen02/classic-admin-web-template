<template>
  <li class="nav-item">
    <router-link :to="url" class="nav-link">
      <fa :icon="icon"></fa>
      <span class="link-desc">
        <slot></slot>
      </span>
    </router-link>
  </li>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class NavLink extends Vue {
  @Prop() url!: string
  @Prop() icon!: string
}
</script>
