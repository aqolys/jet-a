<template>
  <button class="button" :class="{ 'button-icon': icon, 'button-text': text }">
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
  }

  &-text {
    background: $blue;
  }

  &-dialogue {
    font-size: 30px;
    min-height: 50px;
    min-width: 50px;
  }
}
</style>
