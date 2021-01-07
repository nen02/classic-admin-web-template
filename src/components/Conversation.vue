<template>
  <li class="con">
    <a href="#" class="con-link" :class="{ unseen: !item.seen }" @click="readMessage">
      <div class="prof-pic" v-if="item.profilePicture===''">
        {{ item.conversationDetail.sender[0] }}
      </div>
      <img :src="item.profilePicture" alt="" class="prof-pic" v-else>
      <div class="con-detail">
        <p class="sender-name">{{ item.conversationDetail.sender }}</p>
        <p>
          <span class="sender-message">{{ message(item.userIsLastSender, item.conversationDetail.message) }}</span>
          <span class="timestamp"> · {{ item.conversationDetail.timestamp }}</span>
        </p>
      </div>
      <a href="#">
        <fa icon="ellipsis-v"></fa>
      </a>
    </a>
  </li>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class Conversation extends Vue {
  @Prop() item!: {
    id: number;
    seen: boolean;
    profilePicture: string;
    userIsLastSender: boolean;
    conversationDetail: {};
  }

  message (userIsLastSender: boolean, message: string): string {
    const msg = userIsLastSender ? 'You: ' + message : message
    return msg.length < 33 ? msg : msg.substr(0, 30) + '...'
  }

  mounted () {
    if (!this.item.seen) this.$emit('increment-unseen')
  }

  readMessage () {
    if (!this.item.seen) {
      this.item.seen = true
      this.$emit('decrement-unseen')
    }
  }
}
</script>
