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

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class TreeViewItem extends Vue {
  @Prop() icon!: string
  @Prop() url!: string
}
</script>
