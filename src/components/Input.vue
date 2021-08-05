<template>
  <div class="input-group">
    <label class="input-label" :for="id" v-if="label">{{ label }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      :id="id"
      :maxlength="maxlength"
    />
  </div>
</template>

<script>
export default {
  props: ["type", "placeholder", "label", "id", "maxlength"],
};
</script>

<style lang="scss" scoped>
@import "@/scss/colors.scss";

.input {
  &-group {
    display: grid;
    grid-template-columns: 70px 1fr;
    column-gap: 1rem;
    width: 100%;
    align-items: center;
    margin-bottom: 10px;
  }

  &-label {
    font-weight: bold;
    font-size: 18px;
  }
}

input {
  cursor: text;
  color: white;
  padding: 7px;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  border: unset;
  outline: unset;
  font-size: 18px;
  font-weight: 500;
  border-radius: 10px;
  border: 2px solid $blue;

  &:focus {
    box-shadow: 0 0 0 2px $blue, 0 0 0 6px $blue-muted;
  }
}
</style>