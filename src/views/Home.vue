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
    <div class="chats-dialogue" v-if="activeChat">
      <div class="chats-dialogue__header">
        <DialogueHeader :user="activeChat" />
      </div>
      <div class="chats-dialogue__container">
        <Dialogue />
      </div>
      <div class="chats-dialogue__input">
        <DialogueInput />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import Chat from "@/components/chats/Chat.vue";
import ChatHeader from "@/components/chats/Header.vue";
import Dialogue from "@/components/dialogue/Dialogue.vue";
import DialogueHeader from "@/components/dialogue/Header.vue";
import DialogueInput from "@/components/dialogue/Input.vue";
import chatsData from "@/components/chats/data.js";

export default {
  components: {
    Chat,
    ChatHeader,
    Dialogue,
    DialogueHeader,
    DialogueInput,
  },
  data: () => {
    return { chatsData };
  },
  computed: {
    ...mapState({
      activeChat: "activeChat",
    }),
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
    backdrop-filter: blur(2px);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: $header-height 1fr;

    &__header {
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }

    &__wrapper {
      overflow-y: auto;
    }

    &__container {
    }
  }

  &-dialogue {
    display: flex;
    flex-direction: column;
    position: relative;
    background: rgba(0, 0, 0, 0.2);
    min-width: $dialogue-width;
    // backdrop-filter: blur(1px);

    &__header {
      height: $header-height;
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }

    &__container {
      flex: 1;
    }
  }
}
</style>