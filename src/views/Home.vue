<template>
  <div class="chats">
    <div class="chats-list" v-show="isMobile ? !activeChat : true">
      <div class="chats-list__header">
        <ChatHeader />
      </div>
      <div class="chats-list__wrapper">
        <ChatSearch v-show="searchVisibility" />
        <div class="chats-list__container" v-show="!searchVisibility">
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
import ChatSearch from "@/components/chats/Search.vue";
import Dialogue from "@/components/dialogue/Dialogue.vue";
import DialogueHeader from "@/components/dialogue/Header.vue";
import DialogueInput from "@/components/dialogue/Input.vue";
import chatsData from "@/components/chats/data.js";

export default {
  components: {
    Chat,
    ChatHeader,
    ChatSearch,
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
      searchVisibility: "searchVisibility",
      isMobile: "isMobile",
    }),
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (this.activeChat) {
          this.$store.commit("SELECT_CHAT", null);
        } else {
          this.$store.commit("SEARCH_TOGGLE", false);
        }
      }
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/sizes.scss";
@import "@/scss/media-query.scss";

.chats {
  display: grid;
  grid-template-columns: $chats-width 1fr;

  &-list {
    height: 100vh;
    backdrop-filter: blur(2px);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: $header-height 1fr;

    &__header {
      display: flex;
      align-items: center;
      backdrop-filter: blur(4px);
    }

    &__wrapper {
      overflow-y: auto;
    }
  }

  &-dialogue {
    display: flex;
    flex-direction: column;
    position: relative;
    min-width: $dialogue-width;

    &__header {
      height: $header-height;
      display: flex;
      backdrop-filter: blur(4px);
      align-items: center;
    }

    &__container {
      flex: 1;
    }
  }

  @include tablet {
    grid-template-columns: 18rem 1fr;

    &-dialogue {
      min-width: 340px;
    }
  }

  @include mobile-lg {
    grid-template-columns: 1fr;
    height: 100%;
  }
}
</style>