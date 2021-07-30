<template>
  <button>
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
button {
  cursor: pointer;
  background: unset;
  border: unset;
  outline: unset;
  color: white;
  padding: 10px;
  font-size: 20px;
}
</style>
