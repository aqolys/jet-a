<template>
  <div class="input">
    <div class="input__button input__media">
      <Button icon="plus" class="button-dialogue" @click="onMedia"/>
    </div>
    <div class="input__textarea-container">
      <p class="input__placeholder" v-show="placeholderVisibility">
        Напишите сообщение...
      </p>
      <div
        class="input__textarea"
        contenteditable="true"
        ref="input"
        @input="onInput"
        @keydown.enter="onEnter"
      ></div>
    </div>
    <div class="input__button input__send">
      <Button icon="paper-plane" class="button-dialogue button-send" />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  components: {
    Button,
  },
  data: () => ({
    placeholderVisibility: true,
  }),
  computed: {
    input() {
      return this.$refs.input.innerText;
    },
    activeChat() {
      return this.$store.state.activeChat;
    },
    storedDraft() {
      return this.$store.state.drafts[this.activeChat?.id];
    },
  },
  watch: {
    activeChat(_, prev) {
      this.$refs.input.focus();

      this.$store.commit("UPDATE_DRAFT", {
        chat: prev.id,
        draft: this.$refs.input.innerText,
      });

      this.clearInput();
    },
  },
  methods: {
    clearInput() {
      this.$refs.input.innerText = this.storedDraft || "";
      this.placeholderVisibility = !this.storedDraft;
    },
    onInput() {
      this.placeholderVisibility = !this.$refs.input.innerText;
    },
    onEnter(e) {
      if (!this.$refs.input.innerText) {
        e.preventDefault();
      }
    },
    onMedia() {
      this.$root.$emit('modal-open')
    }
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";

.input {
  display: grid;
  grid-template-columns: 50px calc(100% - 116px) 50px;
  align-items: center;
  column-gap: 8px;
  padding: 0 8px 5px 8px;
  max-width: 100%;

  &__textarea {
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(5px);
    min-height: 30px;
    max-height: 130px;
    padding: 9px 0 10px 10px;
    font-size: 18px;
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
    font-size: 18px;
    left: 10px;
    top: 7px;
    z-index: 1;
    color: $text-muted;
    pointer-events: none;
  }

  &__button {
    display: flex;
    justify-content: center;
  }
}
</style>
