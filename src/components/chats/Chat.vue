<template>
  <div class="chat">
    <div class="chat__avatar">
      <img :src="value.avatar" :alt="value.name" />
    </div>
    <div class="chat__name">{{ value.name }}</div>
    <div class="chat__preview">{{ value.preview }}</div>
    <div class="chat__date">{{ parseDate(value.at) }}</div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: ["value"],
  methods: {
    parseDate(at) {
      return moment(at).format("HH:mm");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/sizes.scss";

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

    img {
      width: 100%;
      border-radius: 100%;
    }
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
    color: #dbdbdb;
  }

  &__date {
    grid-area: date;
    align-self: end;
  }
}
</style>