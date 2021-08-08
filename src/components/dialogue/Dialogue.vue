<template>
  <div class="dialogue">
    <div class="dialogue__loader" v-show="loading">
      <Loader />
    </div>
    <Message v-for="(message, i) in messageData" :key="i" :message="message" />
  </div>
</template>

<script>
import Message from "@/components/dialogue/Message.vue";
import Loader from "@/components/Loader.vue";
import messageData from "@/components/dialogue/messages.js";

export default {
  components: {
    Message,
    Loader,
  },
  data: () => {
    return { messageData, loading: false };
  },
};
</script>

<style lang="scss" scoped>
.dialogue {
  width: 100%;
  min-height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column-reverse;
  position: relative;

  &__loader {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
}
</style>