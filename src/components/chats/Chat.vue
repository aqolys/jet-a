<template>
  <div
    class="chat"
    :class="{ 'chat--active': activeChat && activeChat.id === value.id }"
    @click="onSelectChat(value)"
  >
    <div class="chat__avatar">
      <img :src="value.avatar" :alt="value.name" />
      <span class="chat__status" v-show="value.online"></span>
    </div>
    <div class="chat__name">{{ value.name }}</div>
    <div class="chat__preview">{{ value.preview }}</div>
    <div class="chat__date">{{ parseDate(value.at) }}</div>
  </div>
</template>

<script>
import moment from "moment";
import { mapState } from "vuex";

export default {
  props: ["value"],
  computed: {
    ...mapState({
      activeChat: "activeChat",
    }),
  },
  methods: {
    parseDate(at) {
      return moment(at).format("HH:mm");
    },
    onSelectChat(value) {
      if (!(this.activeChat && this.activeChat.id === value.id)) {
        this.$store.commit("SELECT_CHAT", value);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/sizes.scss";
@import "@/scss/colors.scss";

.chat {
  height: fit-content;
  width: 100%;
  display: grid;
  grid-template-areas: "avatar name date" "avatar preview preview";
  grid-template-columns: 50px 1fr 2.5rem;
  grid-template-rows: 1fr 1fr;
  cursor: pointer;
  column-gap: 1rem;
  row-gap: 0.4rem;
  padding: 0 7px 0 7px;
  height: $chat-height;

  &:hover {
    background: rgba(64, 145, 227, 0.4);
  }

  &__avatar {
    grid-area: avatar;
    overflow: hidden;
    display: flex;
    align-items: center;
    position: relative;

    img {
      width: 100%;
      border-radius: 100%;
    }
  }

  &__status {
    background: #fff;
    width: 12px;
    height: 12px;
    border-radius: 100%;
    right: 2px;
    border: 2px solid $blue;
    bottom: 10px;
    position: absolute;
  }

  &__name {
    grid-area: name;
    align-self: end;
    font-weight: 500;
  }

  &__preview {
    grid-area: preview;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: $text-muted;
  }

  &__date {
    grid-area: date;
    align-self: end;
  }

  &--active {
    background: $blue !important;
  }
}
</style>