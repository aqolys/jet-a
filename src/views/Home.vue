<template>
  <div class="chats">
    <div class="chats-list">
      <div class="chats-list__header">
        <ChatHeader />
      </div>
      <div class="chats-list__wrapper">
        <div class="chats-list__container">
          <Chat v-for="chat in chatsData" :key="chat.id" :value="chat" />
        </div>
      </div>
    </div>
    <div class="chats-dialogue">
      <div class="chats-dialogue__header"></div>
      <div class="chats-dialogue__container"></div>
      <div class="chats-dialogue__input"></div>
    </div>
  </div>
</template>

<script>
import Chat from "@/components/chats/Chat.vue";
import ChatHeader from "@/components/chats/Header.vue";
import chatsData from "@/components/chats/data.js";

export default {
  components: {
    Chat,
    ChatHeader,
  },
  data: () => {
    return { chatsData };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/sizes.scss";

.chats {
  display: grid;
  grid-template-columns: $chats-width 1fr;

  &-list {
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);

    &__header {
      height: $header-height;
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }

    &__wrapper {
      height: calc(100% - 4.5rem);
      overflow-y: auto;
    }

    &__container {
    }
  }

  &-dialogue {
  }
}
</style>