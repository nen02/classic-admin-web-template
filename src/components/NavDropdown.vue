<template>
  <li class="nav-item dropdown" :class="{active: isActive}">
    <a href="#" class="nav-link" @click.prevent="toggle">
      <fa :icon="icon"></fa>
      <span class="link-desc">{{ desc }}</span>
      <slot name="label"></slot>
    </a>
    <ul class="dropdown-menu" :class="classes">
      <slot name="dropdown-content"></slot>
    </ul>
  </li>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class NavDropdown extends Vue {
  @Prop() icon !: string
  @Prop() desc !: string
  @Prop() classes !: string[]
  isActive = false

  closeDropdown () {
    this.isActive = false
  }

  toggle () {
    if (!this.isActive) this.$emit('dropdown-opened')
    this.isActive = !this.isActive
  }
}
</script>
