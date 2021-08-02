<template>
  <div class="dialogue">
    <Message v-for="(message, i) in messageData" :key="i" :message="message" />
  </div>
</template>

<script>
import Message from "@/components/dialogue/Message.vue";
import messageData from "@/components/dialogue/messages.js";

export default {
  components: {
    Message,
  },
  data: () => {
    return { messageData };
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.$store.commit("SELECT_CHAT", null);
      }
    });
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
}
</style>