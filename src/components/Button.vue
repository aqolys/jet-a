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
  user-select: none;

  &-icon {
    padding: 10px;
    font-size: 20px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: $blue-muted;
    }
  }

  &-text {
    background: $blue;
    border-radius: 10px;
    font-size: 18px;
    padding: 10px 25px;
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

  &--stretched {
    width: 100%;
  }
}
</style>
