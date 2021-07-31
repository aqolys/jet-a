<template>
  <div class="input">
    <div class="input__media">
      <Button icon="plus" class="button-dialogue" />
    </div>
    <div class="input__textarea-container">
      <p class="input__placeholder" v-show="placeholderVisibility">
        Напишите сообщение...
      </p>
      <div
        class="input__textarea"
        contenteditable="true"
        ref="input"
        @input="onWrite()"
      ></div>
    </div>
    <div class="input__send">
      <Button icon="paper-plane" class="button-dialogue" />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  components: {
    Button,
  },
  data: () => {
    return {
      placeholderVisibility: true,
    };
  },
  computed: {
    activeChat() {
      return this.$store.state.activeChat;
    },
  },
  watch: {
    activeChat() {
      this.$refs.input.innerText = "";
      this.placeholderVisibility = true;
    },
  },
  methods: {
    onWrite() {
      let input = this.$refs.input;
      let text = input.innerText;

      if (text) {
        this.placeholderVisibility = false;
      } else {
        this.placeholderVisibility = true;
      }
    },
  },
  mounted() {
    // this.$store.subscribe((mutation, state) => {
    // if (mutation.type === "SELECT_CHAT") {
    // this.$refs.input.innerText = "";
    // this.placeholderVisibility = true;
    // }
    // });
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";

.input {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: 0 7px 5px 7px;
  max-width: 100%;

  &__textarea {
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    min-height: 30px;
    max-height: 130px;
    padding: 9px 0 10px 10px;
    font-size: 16px;
    resize: none;
    border: 0;
    outline: 0;
    overflow-y: auto;
    overflow-x: hidden;
    line-height: 17px;
    word-wrap: break-word;

    &-container {
      position: relative;
    }
  }

  &__placeholder {
    position: absolute;
    font-size: 16px;
    left: 10px;
    top: 7px;
    color: $text-muted;
    pointer-events: none;
  }
}
</style>
