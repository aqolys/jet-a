<template>
  <div class="message" :class="{ 'message--im': origin() }">
    <div class="message__content">
      {{ message.content }}
    </div>
    <p class="message__date">{{ parseDate(message.at) }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";

export default {
  props: ["message"],
  data: () => ({
    im: false,
  }),
  computed: {
    ...mapState({
      activeChat: "activeChat",
    }),
  },
  methods: {
    origin() {
      return this.message.author !== this.activeChat.id ? true : false;
    },
    parseDate(at) {
      return moment(at).format("HH:mm");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";

.message {
  padding: 10px;
  background: rgba(0, 0, 0, 0.5);
  align-self: flex-start;
  margin: 10px 25px 10px 25px;
  border-radius: 10px 10px 10px 0;
  position: relative;
  max-width: 70%;

  &__date {
    position: absolute;
    right: -40px;
    bottom: -5px;
    max-width: 30px;
    opacity: 0;
    transition: all 0.4s ease;

    &:hover {
      opacity: 1;
      bottom: 2px;
    }
  }

  &--im {
    align-self: flex-end;
    border-radius: 10px 10px 0 10px;
    background: $blue;

    .message__date {
      left: -40px;
      text-align: right;
    }
  }

  &:hover &__date {
    opacity: 1;
    bottom: 2px;
  }
}
</style>