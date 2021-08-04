<template>
  <button
    class="button"
    :class="{ 'button-icon': icon, 'button-text': text }"
    @click="(e) => $emit('click', e)"
  >
    <fa :icon="icon" v-if="icon" />
    {{ text }}
  </button>
</template>

<script>
export default {
  props: ["icon", "text"],
};
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";

.button {
  cursor: pointer;
  background: unset;
  border: unset;
  outline: unset;
  color: white;
  border-radius: 100%;

  &-icon {
    padding: 10px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: rgba(64, 145, 227, 0.4);
    }
  }

  &-text {
    background: $blue;
  }

  &-dialogue {
    font-size: 25px;
    height: 45px;
    width: 45px;
    align-self: center;
  }

  &-header {
    &.active {
      background: $blue;
    }
  }

  &-send {
    svg {
      margin-right: 4px;
    }
  }
}
</style>
